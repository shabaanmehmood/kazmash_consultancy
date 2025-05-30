"use client";

import SubHeader from "@/components/SubHeader";
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaHeadset,
  FaGlobeEurope,
  FaHandshake,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Services = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    studyLevel: "",
    areaOfInterest: "",
    questionNotes: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Special handling for phone number input
    if (name === "phone") {
      // Auto-add + if it's not there and the user starts typing numbers
      let formattedValue = value;
      if (/^[0-9]/.test(value) && !value.startsWith("+")) {
        formattedValue = `+${value}`;
      }

      // Validate phone number format
      const phoneRegex = /^\+[0-9]{1,3}[0-9]{4,14}$/; // Basic international phone format
      const isValid = formattedValue === "" || phoneRegex.test(formattedValue);

      setErrors(prev => ({
        ...prev,
        phone: isValid ? "" : "Please enter a valid international phone number (e.g., +49123456789)"
      }));

      setFormData(prev => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Phone validation (only if provided)
    if (formData.phone && errors.phone) {
      isValid = false;
    }

    // Check required fields
    if (!formData.fullName.trim()) {
      isValid = false;
    }
    if (!formData.email.trim()) {
      isValid = false;
    }
    if (!formData.studyLevel) {
      isValid = false;
    }
    if (!formData.areaOfInterest) {
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error(
        <div className="flex items-center">
          <FaTimesCircle className="text-red-500 mr-2 text-xl" />
          <span>Please fill all required fields correctly</span>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "bg-white text-gray-800 font-medium",
        }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      // Show success toast
      toast.success(
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2 text-xl" />
          <span>{data.message || "Form submitted successfully!"}</span>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "bg-white text-gray-800 font-medium",
        }
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        studyLevel: "",
        areaOfInterest: "",
        questionNotes: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(
          <div className="flex items-center">
            <FaTimesCircle className="text-red-500 mr-2 text-xl" />
            <span>
              {error.message || "Failed to submit form. Please try again."}
            </span>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "bg-white text-gray-800 font-medium",
          }
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SubHeader
        title="Submit your case through our experts"
        desc="Get personalized guidance for your study abroad journey in Germany"
      />

      <ToastContainer />

      <div className="max-w-[1700px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Book A Meeting With An Expert
            </h2>
            <p className="text-textp mb-6">
              Fill out this form to schedule a one-on-one consultation about
              studying in Germany.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="+49 123 456 789"
                  pattern="^\+[0-9]{1,3}[0-9]{4,14}$"
                />
                {errors.phone && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <FaInfoCircle className="mr-1" />
                    <span>{errors.phone}</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Please include country code (e.g., +49 for Germany)
                </p>
              </div>

              <div>
                <label
                  htmlFor="studyLevel"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Study Level *
                </label>
                <select
                  id="studyLevel"
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your current level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelor">Bachelor&apos;s Degree</option>
                  <option value="master">Master&apos;s Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="areaOfInterest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Area of Interest *
                </label>
                <select
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your interest</option>
                  <option value="bachelor">Bachelor&apos;s Program</option>
                  <option value="master">Master&apos;s Program</option>
                  <option value="phd">PhD Program</option>
                  <option value="language-course">Language Course</option>
                  <option value="scholarship">Scholarship Information</option>
                  <option value="visa">Visa Process</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="questionNotes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Questions or Notes
                </label>
                <textarea
                  id="questionNotes"
                  name="questionNotes"
                  rows={4}
                  value={formData.questionNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your goals and any specific questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#A6CE38] to-[#8fb82a] hover:from-[#8fb82a] hover:to-[#A6CE38] text-white font-bold py-3 px-4 rounded-lg transition duration-200 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Book Free Consultation"}
              </button>
            </form>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Why Consult With Our Experts?
              </h3>
              <p className="text-textp mb-6">
                Do you have plans to continue your educational path in Germany?
                We are here to assist you along the way! Schedule a one-on-one
                consultation to discuss your study abroad options, fees,
                scholarships, and other information.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <FaCalendarAlt className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Personalized Guidance
                    </h4>
                    <p className="text-textp mt-1">
                      Get advice tailored to your academic background and career
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <FaHeadset className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Comprehensive Support
                    </h4>
                    <p className="text-textp mt-1">
                      Our experts guide you through university selection,
                      applications, visas, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <FaGlobeEurope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Germany Specialists
                    </h4>
                    <p className="text-textp mt-1">
                      Benefit from our deep knowledge of the German education
                      system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-blue-100 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <FaHandshake className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-blue-800">
                    Our Commitment
                  </h4>
                  <p className="text-gray-700 mt-2">
                    &quot;Our staff offers consultations and is committed to
                    supporting you in reaching your study abroad objectives.
                    Though the procedure may appear daunting, we provide
                    tailored guidance and assistance at every stage.&quot;
                  </p>
                  <p className="text-gray-700 mt-4 font-medium">
                    So, take advantage of the chance to study abroad to broaden
                    your perspectives and travel the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;