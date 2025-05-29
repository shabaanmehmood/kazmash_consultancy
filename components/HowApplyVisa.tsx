import Image from "next/image";
import Link from "next/link";
import React from "react";

function HowApplyVisa() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          How to Apply for Visa?
        </h1>
        <div className="w-52 h-1 bg-secondary mx-auto mb-8"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              height={800}
              width={1200}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              src={"/images/visa.jpg"}
              alt="Visa application process"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-500/10"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full">
          {/* Step 1 */}
          <div className="mb-10 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Book Your Visa Appointment
                </h2>
                <p className="text-textp mb-4">
                  Secure your visa appointment before starting your document
                  preparation to ensure timely processing.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue-100 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  Prepare Your Documents
                </h2>
                <p className="text-gray-700 mb-3">
                  Gather all required documents for your visa interview:
                </p>
                <ul className="list-disc pl-5 text-textp space-y-1 mb-4">
                  <li>BA/BS/MA/MSc Degree or Provisional Certificate</li>
                  <li>BS/MSc Mark Sheet / Transcript</li>
                  <li>Passport with minimum 6 months validity</li>
                  <li>Financial proof documents</li>
                </ul>
                <Link href={"/visa"}>
                <button className="bg-gradient-to-r from-secondary to-[#8fb82a] hover:from-[#8fb82a] hover:to-secondary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Read More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowApplyVisa;
