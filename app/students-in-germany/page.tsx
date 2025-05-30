import SubHeader from "@/components/SubHeader";
import { studentsData } from "@/data";
import Image from "next/image";
import React from "react";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";

const StudentsInGermany = () => {
  return (
    <div className="bg-gray-50">
      <SubHeader
        title="Our Students in Germany"
        desc="Meet our successful alumni who are currently pursuing their dreams in German universities"
      />

      <div className="max-w-[1700px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {studentsData.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Student Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={student.img}
                  alt={student.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">
                    {student.name}
                  </h3>
                  <p className="text-white">{student.education}</p>
                </div>
              </div>

              {/* Student Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full text-secondary">
                    <FaGraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-textp">Program</p>
                    <p className="font-medium">{student.education}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full text-secondary">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-textp">Location</p>
                    <p className="font-medium">{student.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full text-secondary">
                    <FaCalendarAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-textp">Year</p>
                    <p className="font-medium">{student.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsInGermany;
