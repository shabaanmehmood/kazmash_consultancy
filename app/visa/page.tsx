import SubHeader from "@/components/SubHeader";
import React from "react";
import {
  FiFileText,
  FiUser,
  FiShield,
  FiDollarSign,
  FiMail,
  FiCheckCircle,
  FiCamera,
  FiCreditCard,
  FiBook,
  FiGlobe,
  FiInfo,
} from "react-icons/fi";

const Visa = () => {
  const requirements = [
    { icon: <FiUser />, item: "Valid national passport" },
    {
      icon: <FiFileText />,
      item: "Two duly completed national visa application forms",
    },
    {
      icon: <FiCamera />,
      item: "Two recently taken biometric portrait photographs",
    },
    {
      icon: <FiBook />,
      item: "Proof of admission at a German education institution",
    },
    {
      icon: <FiCheckCircle />,
      item: "Authenticated certificates of earlier education",
    },
    { icon: <FiMail />, item: "Curriculum vitae" },
    { icon: <FiFileText />, item: "Motivational letter" },
    {
      icon: <FiDollarSign />,
      item: "Proof paid German student visa application fee",
    },
    { icon: <FiDollarSign />, item: "Means of subsistence" },
    { icon: <FiShield />, item: "Student health insurance" },
    { icon: <FiGlobe />, item: "Proof of English language proficiency" },
    { icon: <FiGlobe />, item: "Proof of German language proficiency" },
  ];

  return (
    <div>
      <SubHeader
        title="How to Apply for Student Visa?"
        desc="Complete guide to German student visa requirements and application process"
      />

      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Timeline Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#3B88C5] mb-12">
            Visa Application Process
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-[#A6CE38] transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-16 md:space-y-0">
              {/* Step 1 */}
              <div className="relative md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#3B88C5]">
                    Document Preparation
                  </h3>
                  <p className="text-[#757575]">
                    Gather all required documents
                  </p>
                </div>
                <div className="hidden md:flex justify-center md:w-2/12">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3B88C5] text-white text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:hidden flex items-start mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B88C5] text-white text-sm font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#3B88C5]">
                      Document Preparation
                    </h3>
                    <p className="text-[#757575] text-sm">
                      Gather all required documents
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <p className="text-[#757575]">
                    Start collecting documents at least 3 months before
                    application
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative md:flex justify-between items-center">
                <div className="md:w-5/12 order-last md:pl-8">
                  <h3 className="text-xl font-bold text-[#3B88C5]">
                    Application Submission
                  </h3>
                  <p className="text-[#757575]">
                    Submit at German embassy/consulate
                  </p>
                </div>
                <div className="hidden md:flex justify-center md:w-2/12">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3B88C5] text-white text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:hidden flex items-start mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B88C5] text-white text-sm font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#3B88C5]">
                      Application Submission
                    </h3>
                    <p className="text-[#757575] text-sm">
                      Submit at German embassy/consulate
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12 order-first md:order-none bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <p className="text-[#757575]">
                    Book appointment early as waiting times can be long
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#3B88C5]">
                    Interview & Processing
                  </h3>
                  <p className="text-[#757575]">
                    Attend visa interview and wait for approval
                  </p>
                </div>
                <div className="hidden md:flex justify-center md:w-2/12">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3B88C5] text-white text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:hidden flex items-start mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B88C5] text-white text-sm font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#3B88C5]">
                      Interview & Processing
                    </h3>
                    <p className="text-[#757575] text-sm">
                      Attend visa interview and wait for approval
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <p className="text-[#757575]">
                    Processing typically takes 4-12 weeks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#3B88C5] mb-12">
            Complete Visa Requirements
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-[#A6CE38] transition-colors flex items-start"
              >
                <div className="text-[#3B88C5] mr-3 mt-1">{req.icon}</div>
                <span className="text-[#757575]">{req.item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#A6CE38]/10 p-6 rounded-xl border border-[#A6CE38]/30">
            <h3 className="text-xl font-bold text-[#3B88C5] mb-4 flex items-center">
              <FiInfo className="mr-2" />
              Important Notes
            </h3>
            <ul className="text-[#757575] space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#A6CE38] mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  All documents must be in German or English (certified
                  translations required)
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#A6CE38] mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  Processing time varies by country and season (apply at least 3
                  months in advance)
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#A6CE38] mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  You may need to show proof of accommodation for your initial
                  stay in Germany
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
