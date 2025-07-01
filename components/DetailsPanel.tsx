"use client";

import { HCP } from "../types";
import { Button } from "./ui/button";
import {
  Star,
  Download,
  ArrowRight,
  BookOpen,
  User,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";

interface DetailsPanelProps {
  hcp: HCP | null;
}

export default function DetailsPanel({ hcp }: DetailsPanelProps) {
  if (!hcp) {
    return (
      <div className="h-full flex items-center justify-center p-6">
        <div className="text-center text-gray-500">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
            <User className="h-6 w-6 text-gray-400" />
          </div>
          <p className="text-lg font-medium">
            Select a healthcare professional to view details
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <img
            src={hcp.avatar}
            alt={hcp.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
          />
          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
            {hcp.type === "physician" ? (
              <BookOpen className="h-4 w-4" />
            ) : (
              <Award className="h-4 w-4" />
            )}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">{hcp.name}</h2>
          <p className="text-gray-600">{hcp.specialty}</p>
          <div className="flex gap-2 mt-2">
            <Button size="sm" className="rounded-full gap-1">
              <ArrowRight className="h-4 w-4" />
              View Profile
            </Button>
            <Button variant="outline" size="sm" className="rounded-full gap-1">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Patients Served</p>
          <p className="font-bold text-xl">{hcp.patientsServed}+</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Success Rate</p>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <p className="font-bold text-xl">{hcp.successRate}%</p>
          </div>
        </div>
      </div>

      {/* Specializations */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">Specializations</h3>
        <div className="flex flex-wrap gap-2">
          {hcp.categories?.map((category, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">About</h3>
        <p className="text-gray-600">{hcp.about}</p>
      </div>

      {/* Education Timeline */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-blue-500" />
          Education
        </h3>
        <div className="space-y-4">
          {hcp.education.map((edu, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5" />
                {i < hcp.education.length - 1 && (
                  <div className="w-px h-full bg-gray-200" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-600">
                  {edu.institution} • {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-green-500" />
          Experience
        </h3>
        <div className="space-y-4">
          {hcp.workExperience.map((exp, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" />
                {i < hcp.workExperience.length - 1 && (
                  <div className="w-px h-full bg-gray-200" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium">{exp.position}</p>
                <p className="text-sm text-gray-600">
                  {exp.institution} • {exp.startYear}-{exp.endYear || "Present"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
