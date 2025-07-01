import { XMLParser } from "fast-xml-parser";
import { HCP, Connection, MockData } from "../types";

interface GraphMLNode {
  "@_id": string;
  data: {
    "@_key": string;
    "#text": string;
  }[];
}

interface GraphMLEdge {
  "@_source": string;
  "@_target": string;
  data: {
    "@_key": string;
    "#text": string;
  }[];
}

interface GraphMLGraph {
  node: GraphMLNode[];
  edge: GraphMLEdge[];
}

interface GraphMLDoc {
  graphml: {
    graph: GraphMLGraph;
  };
}

export async function parseGraphML(graphmlString: string): Promise<MockData> {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    isArray: (name) => ["node", "edge", "data"].includes(name),
  });

  const parsed = parser.parse(graphmlString) as GraphMLDoc;
  const graph = parsed.graphml.graph;

  const hcps: HCP[] = [];
  const connections: Connection[] = [];

  // Parse nodes (HCPs)
  graph.node.forEach((node) => {
    try {
      const getData = (key: string) =>
        node.data.find((d) => d["@_key"] === key)?.["#text"];

      const hcp: HCP = {
        id: node["@_id"],
        name: getData("name") || `HCP-${node["@_id"]}`,
        type: (getData("type") as any) || "physician",
        specialty: getData("specialty"),
        education: tryParseJSON(getData("education")) || [],
        workExperience: tryParseJSON(getData("workExperience")) || [],
        publications: tryParseJSON(getData("publications")) || [],
      };
      hcps.push(hcp);
    } catch (e) {
      console.error(`Error parsing node ${node["@_id"]}:`, e);
    }
  });

  // Parse edges (connections)
  graph.edge.forEach((edge) => {
    try {
      const getData = (key: string) =>
        edge.data.find((d) => d["@_key"] === key)?.["#text"];

      const sourceNode = graph.node.find((n) => n["@_id"] === edge["@_source"]);
      const targetNode = graph.node.find((n) => n["@_id"] === edge["@_target"]);

      const getNodeName = (node: GraphMLNode | undefined) =>
        node?.data.find((d) => d["@_key"] === "name")?.["#text"];

      const connection: Connection = {
        source: edge["@_source"],
        target: edge["@_target"],
        sourceName: getNodeName(sourceNode) || edge["@_source"],
        targetName: getNodeName(targetNode) || edge["@_target"],
        type: (getData("type") as any) || "colleague",
        publications: tryParseJSON(getData("publications")) || [],
        organization: getData("organization"),
        institution: getData("institution"),
        year: parseInt(getData("year") || "0"),
        startYear: parseInt(getData("startYear") || "0"),
        endYear: parseInt(getData("endYear") || "0"),
      };
      connections.push(connection);
    } catch (e) {
      console.error(
        `Error parsing edge ${edge["@_source"]}-${edge["@_target"]}:`,
        e
      );
    }
  });

  return { hcps, connections };
}

function tryParseJSON(jsonString: string | undefined): any {
  if (!jsonString) return undefined;
  try {
    return JSON.parse(jsonString);
  } catch {
    return undefined;
  }
}
