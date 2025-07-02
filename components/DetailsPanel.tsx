"use client";

import { HCP } from "../types";
import { Button } from "./ui/button";
import { Star, Download, ArrowRight, BookOpen, User, Award, GraduationCap, Briefcase, Mail, Phone, MapPin } from "lucide-react";

const GLOBE_BACKGROUND = "https://t3.ftcdn.net/jpg/01/93/72/26/360_F_193722653_97kYBd1p2WV1ETbb9lsR2O28Jliz4BO3.jpg";

interface DetailsPanelProps {
  hcp: HCP | null;
}

export default function DetailsPanel({ hcp }: DetailsPanelProps) {
  if (!hcp) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-50 relative">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${GLOBE_BACKGROUND})` }}
        />
        <div className="relative z-10 text-center text-gray-500">
          <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-inner">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-1">No professional selected</h3>
          <p className="text-sm">Select a healthcare professional to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto relative pt-20 ">
      {/* Background with subtle globe pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${GLOBE_BACKGROUND})` }}
      />
      
      {/* Profile Header with centered avatar */}
      <div className="relative pt-16 pb-8 bg-gradient-to-b from-blue-50/80 to-white/30 ">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <img
              src={hcp.avatar}
              alt={hcp.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-full p-2 shadow-md">
              {hcp.type === "physician" ? (
                <BookOpen className="h-4 w-4" />
              ) : (
                <Award className="h-4 w-4" />
              )}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 px-6">
          <h2 className="text-2xl font-bold text-gray-800">{hcp.name}</h2>
          <p className="text-blue-600 font-medium">{hcp.specialty}</p>
          <div className="flex justify-center gap-3 mt-4">
            <Button size="sm" className="rounded-full gap-1.5 px-4 shadow-sm ">
              <ArrowRight className="h-4 w-4" />
              View Profile
            </Button>
            <Button variant="outline" size="sm" className="rounded-full gap-1.5 px-4 border-gray-300 shadow-sm">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6 space-y-8 ">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-100 shadow-sm">
            <p className="text-xs text-blue-600 mb-1">Patients Served</p>
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold text-gray-800">{hcp.patientsServed}</span>
              <span className="text-xs text-blue-500 mb-1">+</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-100 shadow-sm">
            <p className="text-xs text-green-600 mb-1">Success Rate</p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-2xl font-bold text-gray-800">{hcp.successRate}%</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <span className="bg-blue-100 p-1.5 rounded-lg">
              <Mail className="h-4 w-4 text-blue-600" />
            </span>
            Contact Information
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Mail className="h-4 w-4 text-blue-500" />
              </div>
              <span>dr.{hcp.name.toLowerCase().replace(/\s/g, '')}@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Phone className="h-4 w-4 text-blue-500" />
              </div>
              <span>+1 (555) {Math.floor(1000 + Math.random() * 9000)}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-50 p-2 rounded-lg">
                <MapPin className="h-4 w-4 text-blue-500" />
              </div>
              <span>123 Medical Ave, Boston, MA</span>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span className="bg-indigo-100 p-1.5 rounded-lg">
              <Award className="h-4 w-4 text-indigo-600" />
            </span>
            Specializations
          </h3>
          <div className="flex flex-wrap gap-2">
            {hcp.categories?.map((category, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-800 rounded-full text-xs font-medium shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span className="bg-gray-100 p-1.5 rounded-lg">
              <User className="h-4 w-4 text-gray-600" />
            </span>
            Professional Bio
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{hcp.about}</p>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="bg-blue-100 p-1.5 rounded-lg">
              <GraduationCap className="h-4 w-4 text-blue-600" />
            </span>
            Education
          </h3>
          <div className="space-y-4 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-blue-200 to-transparent" />
            {hcp.education.map((edu, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 z-10 ring-2 ring-blue-100" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="font-medium text-gray-800">{edu.degree}</p>
                  <p className="text-xs text-gray-500">
                    {edu.institution} • {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="bg-green-100 p-1.5 rounded-lg">
              <Briefcase className="h-4 w-4 text-green-600" />
            </span>
            Work Experience
          </h3>
          <div className="space-y-4 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-green-200 to-transparent" />
            {hcp.workExperience.map((exp, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1 z-10 ring-2 ring-green-100" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="font-medium text-gray-800">{exp.position}</p>
                  <p className="text-xs text-gray-500">
                    {exp.institution} • {exp.startYear}-{exp.endYear || "Present"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}