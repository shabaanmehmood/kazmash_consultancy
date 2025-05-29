import FinanceSection from "@/components/Finances";
import SubHeader from "@/components/SubHeader";
import React from "react";
import { FiAward } from "react-icons/fi";

const WorkOpportunities = () => {
  return (
    <div>
      <SubHeader title="Finances and Scholarships" desc="" />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-[1700px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <FinanceSection />
        <div className="md:flex">
          <div className="md:w-1/2 bg-[#3B88C5] p-8 md:p-12 flex items-center">
            <div>
              <FiAward className="text-white text-4xl mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Employers Value German Graduates
              </h3>
              <p className="text-blue-100">
                German universities provide students with a professional skill
                set that businesses trust.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="space-y-6">
              <p className="text-[#757575]">
                As a result, after you graduate, several companies will approach
                you with all kinds of tempting job offers. Businesses trust that
                you can greatly enhance their operations based on the
                professional credentials you earned from an excellent German
                education.
              </p>
              <p className="text-[#757575]">
                Additionally, your German degree will help you land a
                well-paying position in any country, regardless of your academic
                specialty.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-bold text-[#3B88C5] mb-2">
                  Work Visa Options
                </h4>
                <p className="text-sm text-[#757575]">
                  Germany offers an 18-month post-study work visa for
                  international graduates to find employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOpportunities;
