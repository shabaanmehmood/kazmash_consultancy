import SubHeader from "@/components/SubHeader";
import React from "react";
import { FiFileText, FiUser, FiShield, FiDollarSign, FiMail, FiAward, FiEdit, FiGlobe, FiBook } from "react-icons/fi";

const Admission = () => {
  const requirements = [
    {
      icon: <FiUser className="text-2xl" />,
      title: "Personal Documents",
      items: ["CV", "Passport"]
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Health & Finances",
      items: ["Health insurance", "Proof of finances"]
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Application Materials",
      items: ["Motivational letter", "Official transcripts in English/German"]
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Academic Records",
      items: ["High school diploma", "Entrance exam (if any)"]
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Language Proficiency",
      items: ["English Language test", "German Language test"]
    }
  ];

  return (
    <div>
      <SubHeader
        title="How to apply for admission?"
        desc="Everything you need to prepare for your German university application"
      />
      
      <div className="max-w-[1700px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B88C5] mb-4">
            Complete Admission Checklist
          </h2>
          <div className="w-20 h-1 bg-[#A6CE38] mx-auto mb-6"></div>
          <p className="text-[#757575] max-w-3xl mx-auto text-lg">
            German universities have straightforward but strict admission requirements. 
            Make sure you have all these documents ready before applying.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {requirements.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="bg-[#3B88C5] p-4 flex items-center">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="bg-[#A6CE38]/10 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-[#A6CE38] rounded-full"></div>
                      </div>
                      <span className="text-[#757575]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          {/* Additional Info Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-[#A6CE38] p-4 flex items-center">
              <div className="bg-white/20 p-2 rounded-lg mr-4">
                <FiBook className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Important Notes</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4 text-[#757575]">
                <li className="flex items-start">
                  <div className="bg-[#3B88C5]/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-[#3B88C5] rounded-full"></div>
                  </div>
                  <span>Some programs may have additional requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3B88C5]/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-[#3B88C5] rounded-full"></div>
                  </div>
                  <span>Documents may need certified translations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3B88C5]/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-[#3B88C5] rounded-full"></div>
                  </div>
                  <span>Application deadlines vary by university</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;