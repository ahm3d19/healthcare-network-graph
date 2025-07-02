"use strict";

import * as d3 from "d3";
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";


const Graph = forwardRef(function Graph(
  { data, onNodeClick, centerNodeId },
  ref
) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const simulationRef = useRef(null);
  const transformRef = useRef(d3.zoomIdentity);
  const tooltipRef = useRef(null);

  const centerNode = (nodeId) => {
    if (!svgRef.current || !simulationRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const currentPositions = new Map(
      simulationRef.current
        .nodes()
        .map((node) => [node.id, { x: node.x || 0, y: node.y || 0 }])
    );

    simulationRef.current.nodes().forEach((node) => {
      if (node.id === nodeId) {
        node.fx = width / 2;
        node.fy = height / 2;
      } else {
        const originalPos = currentPositions.get(node.id);
        const centerPos = currentPositions.get(nodeId);
        if (originalPos && centerPos) {
          const dx = originalPos.x - centerPos.x;
          const dy = originalPos.y - centerPos.y;
          node.fx = width / 2 + dx;
          node.fy = height / 2 + dy;
        } else {
          node.fx = null;
          node.fy = null;
        }
      }
    });

    transformRef.current = d3.zoomIdentity;
    d3.select(svgRef.current)
      .select("g")
      .attr("transform", transformRef.current);
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

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "transparent");

    const container = svg.append("g");

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        transformRef.current = event.transform;
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    const defs = svg.append("defs");

    const link = container
      .append("g")
      .selectAll("path")
      .data(connections)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("stroke", "#e2e8f0")
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.6)
      .attr("fill", "none");

    const nodeGroups = container
      .append("g")
      .selectAll("g")
      .data(hcps)
      .enter()
      .append("g")
      .attr("class", "node-group")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      )
      .on("click", (event, d) => {
        event.stopPropagation();
        onNodeClick(d);
      })
      .on("mouseover", function (event, d) {
        d3.select(this).raise();
        d3.select(this).select("circle.avatar").attr("stroke-width", 3);

        if (tooltipRef.current) {
          tooltipRef.current.style.display = "block";
          tooltipRef.current.innerHTML = `
            <div class="p-3 bg-white rounded-lg shadow-lg border border-gray-200 max-w-xs">
              <div class="flex items-center space-x-3 mb-2">
                <div class="flex-shrink-0">
                  <img src="${d.avatar}" alt="${
            d.name
          }" class="h-10 w-10 rounded-full" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">${d.name.replace(
                    "Dr. ",
                    ""
                  )}</h3>
                  <p class="text-sm text-gray-600">${d.specialty}</p>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                <p><span class="font-medium">Type:</span> ${
                  d.type === "physician" ? "Physician" : "Researcher"
                }</p>
                ${
                  d.education.length > 0
                    ? `
                  <p class="mt-1"><span class="font-medium">Education:</span> ${d.education[0].degree}, ${d.education[0].institution}</p>
                `
                    : ""
                }
                ${
                  d.workExperience.length > 0
                    ? `
                  <p class="mt-1"><span class="font-medium">Position:</span> ${d.workExperience[0].position} at ${d.workExperience[0].institution}</p>
                `
                    : ""
                }
              </div>
            </div>
          `;

          const [x, y] = [event.pageX + 10, event.pageY + 10];
          tooltipRef.current.style.left = `${x}px`;
          tooltipRef.current.style.top = `${y}px`;
        }
      })
      .on("mouseout", function () {
        d3.select(this).select("circle.avatar").attr("stroke-width", 2);
        if (tooltipRef.current) {
          tooltipRef.current.style.display = "none";
        }
      })
      .on("mousemove", function (event) {
        if (tooltipRef.current) {
          const [x, y] = [event.pageX + 10, event.pageY + 10];
          tooltipRef.current.style.left = `${x}px`;
          tooltipRef.current.style.top = `${y}px`;
        }
      });

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

    nodeGroups
      .append("circle")
      .attr("class", "avatar")
      .attr("r", 20)
      .attr("fill", (d) => `url(#avatar-${d.id})`)
      .attr("stroke", (d) => (d.id === centerNodeId ? "#6366f1" : "#ffffff"))
      .attr("stroke-width", 2)
      .attr("filter", "url(#drop-shadow)");

    defs
      .append("filter")
      .attr("id", "drop-shadow")
      .append("feDropShadow")
      .attr("dx", 0)
      .attr("dy", 1)
      .attr("stdDeviation", 2)
      .attr("flood-color", "rgba(0,0,0,0.2)");

    nodeGroups
      .append("circle")
      .attr("class", "node-type")
      .attr("r", 6)
      .attr("cx", 14)
      .attr("cy", 14)
      .attr("fill", (d) => (d.type === "physician" ? "#6366f1" : "#10b981"))
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1.5);

    nodeGroups
      .append("text")
      .attr("dy", 30)
      .attr("text-anchor", "middle")
      .attr("fill", "#1e293b")
      .attr("font-size", "10px")
      .attr("font-weight", "500")
      .text((d) => d.name.replace("Dr. ", "").split(" ")[0]);

    const simulation = d3
      .forceSimulation(hcps)
      .force(
        "link",
        d3
          .forceLink(connections)
          .id((d) => d.id)
          .distance(120)
          .strength(0.1)
      )
      .force("charge", d3.forceManyBody().strength(-250))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(25).strength(0.7))
      .alphaDecay(0.05)
      .on("tick", ticked);

    simulationRef.current = simulation;

    function ticked() {
      link.attr("d", (d) => {
        const source = d.source;
        const target = d.target;
        const sx = source.x || 0;
        const sy = source.y || 0;
        const tx = target.x || 0;
        const ty = target.y || 0;

        const mx = (sx + tx) / 2;
        const my = (sy + ty) / 2;

        const dx = tx - sx;
        const dy = ty - sy;
        const normal = Math.sqrt(dx * dx + dy * dy);
        const offset = normal * 0.2;

        const px = -dy / normal;
        const py = dx / normal;

        const cx = mx + px * offset;
        const cy = my + py * offset;

        return `M${sx},${sy} Q${cx},${cy} ${tx},${ty}`;
      });

      nodeGroups.attr("transform", (d) => `translate(${d.x || 0},${d.y || 0})`);
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.2).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    if (centerNodeId) {
      setTimeout(() => centerNode(centerNodeId), 50);
    }

    return () => {
      simulation.stop();
    };
  }, [data, centerNodeId, onNodeClick]);

  return (
    <div ref={containerRef} className="h-full w-full relative">
      <svg ref={svgRef} className="h-full w-full" />
      <div
        ref={tooltipRef}
        className="absolute hidden z-50 pointer-events-none"
        style={{ display: "none" }}
      />
    </div>
  );
});

Graph.displayName = "Graph";

export default Graph;
