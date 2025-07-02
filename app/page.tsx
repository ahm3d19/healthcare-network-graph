"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import Graph from "../components/Graph";
import DetailsPanel from "../components/DetailsPanel";
import { Search, Globe, X, ChevronDown } from "lucide-react";
import { mockData } from "../mockData";
import { HCP } from "../types";

export type GraphRef = {
  centerNode: (nodeId: string) => void;
};

const avatarImages = {
  "1": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&auto=format&fit=crop",
  "2": "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&auto=format&fit=crop",
  "3": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&auto=format&fit=crop",
  "4": "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&auto=format&fit=crop",
  "5": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop",
  "6": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
  "7": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&auto=format&fit=crop",
  "8": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop",
  "9": "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&auto=format&fit=crop",
  "10": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&auto=format&fit=crop",
  "11": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&auto=format&fit=crop",
  "12": "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=200&h=200&auto=format&fit=crop",
  "13": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&auto=format&fit=crop",
  "14": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop",
  "15": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop",
  "16": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
  "17": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop",
  "18": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&auto=format&fit=crop",
  "19": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&auto=format&fit=crop",
  "20": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&auto=format&fit=crop",
  "21": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&auto=format&fit=crop",
  "22": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&auto=format&fit=crop",
  "23": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=200&h=200&auto=format&fit=crop",
  "24": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=200&h=200&auto=format&fit=crop",
  "25": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&auto=format&fit=crop",
  "26": "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&auto=format&fit=crop",
  "27": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop",
  "28": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
  "29": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop",
  "30": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&auto=format&fit=crop",
  "31": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop",
  "32": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&auto=format&fit=crop",
  "33": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&auto=format&fit=crop",
  "34": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop",
  "35": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&auto=format&fit=crop",
  "36": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=200&h=200&auto=format&fit=crop",
  "37": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=200&h=200&auto=format&fit=crop",
  "38": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&auto=format&fit=crop",
  "39": "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&auto=format&fit=crop",
  "40": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop",
};

const GLOBE_IMAGE_URL =
  "https://t3.ftcdn.net/jpg/01/93/72/26/360_F_193722653_97kYBd1p2WV1ETbb9lsR2O28Jliz4BO3.jpg";

export default function HealthcareNetwork() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHCP, setSelectedHCP] = useState<HCP | null>(null);
  const [centerNodeId, setCenterNodeId] = useState<string | null>(null);
  const graphRef = useRef<{ centerNode: (nodeId: string) => void }>(null);
  const [selectedFilter, setSelectedFilter] = useState("");

  const enhancedMockData = useMemo(
    () => ({
      ...mockData,
      hcps: mockData.hcps.map((hcp) => ({
        ...hcp,
        avatar: avatarImages[hcp.id as keyof typeof avatarImages],
        successRate: Math.floor(Math.random() * 30) + 70,
        patientsServed: Math.floor(Math.random() * 500) + 100,
        categories: ["Cardiology", "Neurology", "Oncology"].slice(
          0,
          Math.floor(Math.random() * 2) + 1
        ),
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        specialty: hcp.specialty ?? "General",
        type: hcp.type === "administrator" ? "physician" : hcp.type,
      })),
    }),
    []
  );

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
    <div className="flex h-screen bg-gray-50 overflow-hidden p-2">
      {/* Sidebar - Only shown when HCP is selected */}
      {selectedHCP && (
        <div className="absolute lg:relative z-20 w-full lg:w-96 bg-white shadow-xl">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                Professional Details
              </h2>
              <button
                onClick={() => setSelectedHCP(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <DetailsPanel hcp={selectedHCP} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 z-10">
  <div className="px-4 sm:px-6 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    {/* Logo + Title */}
    <div className="flex items-center gap-3">
      <div className="p-2 bg-gradient-to-br from-sky-500 rounded-lg shadow-sm">
        <Globe className="h-5 w-5 text-white" />
      </div>
      <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-300 to-sky-800 bg-clip-text text-transparent">
        Global Health Network
      </h1>
    </div>

    {/* Search + Filter */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      {/* Search Bar */}
      <div className="relative w-full sm:w-80">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search doctors, specialties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full pl-11 pr-10 py-2.5 text-sm rounded-full border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 shadow-sm hover:shadow-md"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Filter Dropdown */}
      <div className="relative w-full sm:w-56">
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="appearance-none w-full text-sm pl-4 pr-10 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Oncology">Oncology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Dermatology">Dermatology</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  </div>
</header>


        {/* Graph Visualization */}
        <div className="flex-1 relative bg-gray-50">
          <div
            className="absolute inset-0 bg-no-repeat bg-center opacity-10"
            style={{
              backgroundImage: `url(${GLOBE_IMAGE_URL})`,
              backgroundSize: "contain",
            }}
          />
          <div className="absolute inset-0 z-10">
            <Graph
              data={enhancedMockData}
              onNodeClick={(hcp) => setSelectedHCP(hcp)}
              centerNodeId={centerNodeId ?? undefined} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
