"use client";

import { useState, useRef, useCallback } from "react";
import Graph from "../components/Graph";
import DetailsPanel from "../components/DetailsPanel";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import { mockData } from "../mockData";
import { HCP } from "../types";

const avatarImages = {
  "1": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&auto=format&fit=crop",
  "2": "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&auto=format&fit=crop",
  "3": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&auto=format&fit=crop",
  "4": "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&auto=format&fit=crop",
};

// Using a free SVG globe from Wikimedia Commons
const GLOBE_IMAGE_URL =
  "https://t3.ftcdn.net/jpg/01/93/72/26/360_F_193722653_97kYBd1p2WV1ETbb9lsR2O28Jliz4BO3.jpg";

export default function HealthcareNetwork() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHCP, setSelectedHCP] = useState<HCP | null>(null);
  const [centerNodeId, setCenterNodeId] = useState<string | null>(null);
  const graphRef = useRef<{ centerNode: (nodeId: string) => void }>(null);

  const enhancedMockData = {
    ...mockData,
    hcps: mockData.hcps.map((hcp) => ({
      ...hcp,
      avatar: avatarImages[hcp.id as keyof typeof avatarImages],
      successRate: Math.floor(Math.random() * 30) + 70, // 70-100%
      patientsServed: Math.floor(Math.random() * 500) + 100,
      categories: ["Cardiology", "Neurology", "Oncology"].slice(
        0,
        Math.floor(Math.random() * 2) + 1
      ),
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    })),
  };

  const handleSearch = useCallback(() => {
    const foundHCP = enhancedMockData.hcps.find((hcp) =>
      hcp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundHCP) {
      setCenterNodeId(foundHCP.id);
      setSelectedHCP(foundHCP);
      graphRef.current?.centerNode(foundHCP.id);
    }
  }, [searchTerm, enhancedMockData]);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Global Healthcare Network
            </h1>
            <p className="text-slate-500 mt-1">
              Explore connections between medical professionals worldwide
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <Input
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 pr-4 py-2 rounded-full bg-white shadow-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden relative">
            <div
              className="absolute inset-0 bg-no-repeat bg-center opacity-10"
              style={{
                backgroundImage: `url(${GLOBE_IMAGE_URL})`,
                backgroundSize: "contain",
              }}
            />
            <div className="h-[600px] w-full relative z-10">
              <Graph
                ref={graphRef}
                data={enhancedMockData}
                onNodeClick={setSelectedHCP}
                centerNodeId={centerNodeId ?? undefined}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <DetailsPanel hcp={selectedHCP} />
          </div>
        </div>
      </div>
    </div>
  );
}
