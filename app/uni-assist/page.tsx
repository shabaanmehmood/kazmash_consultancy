import SubHeader from "@/components/SubHeader";
import React from "react";
import { FaFileAlt, FaSearch, FaUpload, FaPaperPlane, FaCreditCard, FaUniversity } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const UniAssist = () => {
  return (
    <div className="bg-gray-50">
      <SubHeader
        title="How to apply through Uni-Assist?"
        desc="Step-by-step guide for international students applying to German universities"
      />

      <div className="max-w-[1700px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Guide to Uni-Assist Application</h2>
            <p className="text-lg text-textp mb-8">
              Uni-Assist is the centralized application portal for many German universities. Follow these steps carefully to ensure your application is processed successfully.
            </p>

            {/* Steps Section */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <FaFileAlt className="text-primary mr-3 text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">Fill the Online Uni-Assist Form</h3>
                  </div>
                  <p className="text-textp mb-4">
                    Click the button below to access the Uni-Assist application portal and select your desired course of study (Studienkolleg/Bachelor/Master).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <FaSearch className="text-primary mr-3 text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">Search for Your Desired Course</h3>
                  </div>
                  <p className="text-textp">
                    Carefully research and select the study programs that match your academic background and career goals. Consider factors like:
                  </p>
                  <ul className="mt-3 space-y-2 text-textp">
                    <li className="flex items-start">
                      <BsCheckCircleFill className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Language of instruction (English/German)</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircleFill className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>University ranking and location</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircleFill className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Admission requirements</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircleFill className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Future career prospects</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <FaUpload className="text-primary mr-3 text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">Upload Scanned Documents</h3>
                  </div>
                  <p className="text-textp mb-4">
                    Prepare high-quality scans of all required documents and upload them to your Uni-Assist account.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">Document Preparation Tips:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-textp">
                      <li>Scan in color at 300 DPI resolution</li>
                      <li>Save as PDF (preferred) or high-quality JPG</li>
                      <li>Ensure all text is clearly readable</li>
                      <li>Name files clearly (e.g., &quot;Bachelor_Degree.pdf&quot;)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">4</span>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <FaPaperPlane className="text-primary mr-3 text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">Send Documents by Mail</h3>
                  </div>
                  <p className="text-textp mb-4">
                    Mail a complete set of attested documents to Uni-Assist for evaluation. All documents must be notarized copies.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                    <h4 className="font-bold text-blue-800 mb-3 text-lg">Required Documents Checklist:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>BS/MSc Degree or Provisional Certificate</span>
                      </li>
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>BS/MSc Mark Sheet/Transcript</span>
                      </li>
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>FSc/FA Certificate</span>
                      </li>
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Matric Certificate</span>
                      </li>
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>IELTS (6.0+ band) or TOEFL (213+ CBT)</span>
                      </li>
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>German Language Certificates (if applicable)</span>
                      </li>
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Letter of Motivation/SOP</span>
                      </li>
                      <li className="flex items-start">
                        <BsCheckCircleFill className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Two Academic Reference Letters</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">Important Note:</h4>
                    <p className="text-yellow-800">
                      To maximize admission chances, apply to up to 10 relevant courses/universities through Uni-Assist.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">5</span>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <FaCreditCard className="text-primary mr-3 text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">Pay the Application Fee</h3>
                  </div>
                  <p className="text-textp mb-4">
                    Uni-Assist charges processing fees for each application. The fee structure is as follows:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Fee Structure:</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between border-b pb-2">
                        <span className="font-medium">First university application</span>
                        <span className="font-bold">75 €</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="font-medium">Each additional application</span>
                        <span className="font-bold">30 €</span>
                      </li>
                      <li className="flex justify-between pt-2">
                        <span className="font-medium">Example: 3 applications</span>
                        <span className="font-bold">75 + 30 + 30 = 135 €</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Payment Methods:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                          <FaCreditCard className="text-primary text-xl" />
                        </div>
                        <h5 className="font-semibold mb-1">Credit/Debit Card</h5>
                        <p className="text-sm text-textp">Direct online payment through Uni-Assist portal</p>
                      </div>
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                          <FaUniversity className="text-primary text-xl" />
                        </div>
                        <h5 className="font-semibold mb-1">Foreign Currency Account</h5>
                        <p className="text-sm text-textp">Through someone with foreign currency account in Pakistan</p>
                      </div>
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                          <FaPaperPlane className="text-primary text-xl" />
                        </div>
                        <h5 className="font-semibold mb-1">International Transfer</h5>
                        <p className="text-sm text-textp">By relatives/friends living abroad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniAssist;