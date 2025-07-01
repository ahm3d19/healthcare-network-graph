"use client";

import * as d3 from "d3";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { MockData, HCP } from "../types";

interface SimulationNode extends d3.SimulationNodeDatum, HCP {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface GraphProps {
  data: MockData;
  onNodeClick: (hcp: HCP) => void;
  centerNodeId?: string;
}

const Graph = forwardRef<{ centerNode: (nodeId: string) => void }, GraphProps>(
  ({ data, onNodeClick, centerNodeId }, ref) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const simulationRef = useRef<d3.Simulation<SimulationNode, undefined>>();

    const centerNode = (nodeId: string) => {
      if (!svgRef.current || !simulationRef.current) return;

      const [x, y] = [
        svgRef.current.clientWidth / 2,
        svgRef.current.clientHeight / 2,
      ];

      simulationRef.current.nodes().forEach((node) => {
        if (node.id === nodeId) {
          node.fx = x;
          node.fy = y;
        } else {
          node.fx = null;
          node.fy = null;
        }
      });

      simulationRef.current.alpha(1).restart();
    };

    useImperativeHandle(ref, () => ({
      centerNode,
    }));

    useEffect(() => {
      if (!svgRef.current || !containerRef.current || !data) return;

      const { hcps, connections } = data;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      // Clear previous graph
      d3.select(svgRef.current).selectAll("*").remove();

      // Create SVG
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "transparent");

      // Create curved connections
      const link = svg
        .append("g")
        .selectAll("path")
        .data(connections)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("stroke", "#cbd5e1")
        .attr("stroke-width", 1.5)
        .attr("fill", "none")
        .attr("stroke-opacity", 0.6);

      // Create node groups
      const nodeGroups = svg
        .append("g")
        .selectAll("g")
        .data(hcps)
        .enter()
        .append("g")
        .attr("class", "node-group")
        .call(
          d3
            .drag<SVGGElement, SimulationNode>()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        )
        .on("click", (event, d) => {
          event.stopPropagation();
          onNodeClick(d);
        });

      // Add avatar patterns
      const defs = svg.append("defs");
      hcps.forEach((hcp) => {
        defs
          .append("pattern")
          .attr("id", `avatar-${hcp.id}`)
          .attr("width", 1)
          .attr("height", 1)
          .attr("patternUnits", "objectBoundingBox")
          .append("image")
          .attr("width", 48)
          .attr("height", 48)
          .attr("x", 0)
          .attr("y", 0)
          .attr("href", hcp.avatar || "");
      });

      // Add avatar circles
      nodeGroups
        .append("circle")
        .attr("r", 24)
        .attr("fill", (d) => `url(#avatar-${d.id})`)
        .attr("stroke", (d) => (d.id === centerNodeId ? "#f59e0b" : "#fff"))
        .attr("stroke-width", 2.5);

      // Add type indicator
      nodeGroups
        .append("circle")
        .attr("r", 8)
        .attr("cx", 16)
        .attr("cy", 16)
        .attr("fill", (d) => (d.type === "physician" ? "#3b82f6" : "#10b981"))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5);

      // Create simulation
      const simulation = d3
        .forceSimulation<SimulationNode>(hcps)
        .force(
          "link",
          d3
            .forceLink<SimulationNode, (typeof connections)[0]>(connections)
            .id((d) => d.id)
            .distance(120)
        )
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force(
          "collision",
          d3.forceCollide<SimulationNode>().radius(28).strength(0.7)
        )
        .alphaDecay(0.05)
        .on("tick", ticked);

      simulationRef.current = simulation;

      function ticked() {
        // Update curved connections
        link.attr("d", (d) => {
          const source = d.source as SimulationNode;
          const target = d.target as SimulationNode;
          const dx = target.x! - source.x!;
          const dy = target.y! - source.y!;
          const dr = Math.sqrt(dx * dx + dy * dy) * 0.2;
          return `M${source.x},${source.y}A${dr},${dr} 0 0,1 ${target.x},${target.y}`;
        });

        // Update node positions
        nodeGroups.attr(
          "transform",
          (d) => `translate(${d.x || 0},${d.y || 0})`
        );
      }

      function dragstarted(event: any, d: SimulationNode) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event: any, d: SimulationNode) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: SimulationNode) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      if (centerNodeId) {
        centerNode(centerNodeId);
      }

      return () => {
        simulation.stop();
      };
    }, [data, centerNodeId, onNodeClick]);

    return (
      <div ref={containerRef} className="h-full w-full">
        <svg ref={svgRef} className="h-full w-full" />
      </div>
    );
  }
);

Graph.displayName = "Graph";

export default Graph;
