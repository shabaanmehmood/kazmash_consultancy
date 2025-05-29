import Link from "next/link";
import React from "react";
import {
  FiDollarSign,
  FiAward,
  FiHome,
  FiBook,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

const FinanceSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Finances & Scholarships
          </h2>
          <div className="w-48 h-1 bg-secondary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cost of Studying Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-primary p-5 flex items-center">
              <FiDollarSign className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-bold text-white">
                Cost of Studying in Germany
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-5">
                <FiHome className="text-secondary text-xl mt-1 mr-4 flex-shrink-0" />
                <p className="text-textp">
                  Although student budgets vary mostly due to university
                  differences, the individual living expenses in Germany
                  compared to other nations in Europe are much more affordable.
                  On average, an international German student has a living
                  expense of{" "}
                  <span className="font-bold text-[#3B88C5]">
                    EUR 834 per month
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-start mb-5">
                <FiBook className="text-secondary text-xl mt-1 mr-4 flex-shrink-0" />
                <p className="text-textp">
                  The cost of studying might vary depending on your degree of
                  study and the kind of school you attend. Additionally, the
                  average yearly cost of universities and vocational
                  institutions are varies.
                </p>
              </div>

              <div className="flex items-start">
                <FiUsers className="text-secondary text-xl mt-1 mr-4 flex-shrink-0" />
                <p className="text-textp">
                  However, students must be delighted to know that in public
                  universities in Germany, undergraduates from both domestic and
                  foreign countries can study for free, with a one-time modest
                  charge to support additional expenditures such as
                  administration.
                </p>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <FiGlobe className="text-[#3B88C5] mr-2" />
                  <h4 className="font-semibold text-[#3B88C5]">
                    Important Note
                  </h4>
                </div>
                <p className="text-sm text-textp">
                  While most costs are affordable, students should note that
                  living expenses differ between cities.
                </p>
              </div>
            </div>
          </div>

          {/* Scholarships Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-secondary p-5 flex items-center">
              <FiAward className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-bold text-white">
                Scholarships For International Students
              </h3>
            </div>
            <div className="p-6">
              <p className="text-textp mb-6">
                Scholarships in Germany are an excellent method to help cover
                the costs of studying abroad in one of the most popular
                locations for foreign students. There are several scholarship
                alternatives available, including fully-funded programs,
                merit-based rewards, and need-based help.
              </p>

              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center mb-2">
                  <FiAward className="text-secondary mr-2" />
                  <h4 className="font-semibold text-[#3B88C5]">
                    DAAD Scholarships
                  </h4>
                </div>
                <p className="text-sm text-textp">
                  DAAD, or the German Academic Exchange Service, offers several
                  pathways for German and international students to generate an
                  amount to enable them to continue further education in
                  Germany. Moreover, some of these opportunities allow an
                  affordable cost or even free studies!
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-[#3B88C5] mb-3 flex items-center">
                  <FiUsers className="mr-2" />
                  How We Can Help
                </h4>
                <p className="text-textp mb-4">
                  Our team of professionals can help you along the way if you&apos;re
                  eager to study in Germany and are looking for scholarships.
                  All applicants can select the scholarship of their choice with
                  the assistance of our online resources and wealth of knowledge
                  in this field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
