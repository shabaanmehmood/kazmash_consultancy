import Link from "next/link";
import React from "react";
import { FiBriefcase, FiGlobe, FiDollarSign, FiAward } from "react-icons/fi";

const PostStudyOpportunities = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Post-Study Work Opportunities
          </h2>
          <div className="w-20 h-1 bg-[#A6CE38] mx-auto mb-6"></div>
          <p className="text-[#757575] max-w-2xl mx-auto">
            Unlock global career prospects with a German degree
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-[#3B88C5] w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <FiBriefcase className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Global Recognition</h3>
            <p className="text-[#757575]">
              A degree from a German institution is a highly esteemed and regarded credential worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-[#A6CE38] w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <FiGlobe className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">High Employability</h3>
            <p className="text-[#757575]">
              German graduates have a high employability in the international job market.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-[#3B88C5] w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <FiDollarSign className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Competitive Salaries</h3>
            <p className="text-[#757575]">
              German university graduates are among the highest-paid workers globally.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href={"/finances-scholarships"}>
          <button className="bg-gradient-to-r from-[#A6CE38] to-[#8fb82a] hover:from-[#8fb82a] hover:to-[#A6CE38] text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center">
            <FiBriefcase className="mr-2" />
            Explore Work Opportunities
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostStudyOpportunities;