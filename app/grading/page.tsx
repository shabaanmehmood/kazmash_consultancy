import SubHeader from "@/components/SubHeader";
import React from "react";
import Image from "next/image";

const Grading = () => {
  const gradeData = [
    { cgpa: 4.0, germanGrade: "1.0", remark: "Very Good" },
    { cgpa: 3.9, germanGrade: "1.15", remark: "Very Good" },
    { cgpa: 3.8, germanGrade: "1.30", remark: "Very Good" },
    { cgpa: 3.7, germanGrade: "1.45", remark: "Very Good" },
    { cgpa: 3.6, germanGrade: "1.60", remark: "Good" },
    { cgpa: 3.5, germanGrade: "1.75", remark: "Good" },
    { cgpa: 3.4, germanGrade: "1.90", remark: "Good" },
    { cgpa: 3.3, germanGrade: "2.05", remark: "Good" },
    { cgpa: 3.2, germanGrade: "2.20", remark: "Good" },
    { cgpa: 3.1, germanGrade: "2.35", remark: "Good" },
    { cgpa: 3.0, germanGrade: "2.50", remark: "Good" },
    { cgpa: 2.9, germanGrade: "2.65", remark: "Satisfactory" },
    { cgpa: 2.8, germanGrade: "2.80", remark: "Satisfactory" },
    { cgpa: 2.7, germanGrade: "2.95", remark: "Satisfactory" },
    { cgpa: 2.6, germanGrade: "3.10", remark: "Satisfactory" },
    { cgpa: 2.5, germanGrade: "3.25", remark: "Satisfactory" },
    { cgpa: 2.4, germanGrade: "3.40", remark: "Satisfactory" },
    { cgpa: 2.3, germanGrade: "3.55", remark: "Sufficient" },
    { cgpa: 2.2, germanGrade: "3.70", remark: "Sufficient" },
    { cgpa: 2.1, germanGrade: "3.85", remark: "Sufficient" },
    { cgpa: 2.0, germanGrade: "4.00", remark: "Sufficient" },
  ];

  return (
    <div>
      <SubHeader
        title="How to Convert CGPA into German Grading System?"
        desc="Understand the conversion between CGPA and German grading scales using the Modified Bavarian Formula"
      />

      <div className="max-w-[1700px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Grading Scale Conversion
            </h2>
            <p className="text-lg text-textp mb-6">
              The German grading system uses a scale from 1.0 (best) to 5.0
              (fail). To convert your CGPA to the German equivalent, we use the
              Modified Bavarian Formula:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Modified Bavarian Formula
              </h3>
              <div className="text-center text-lg bg-gray-100 p-4 rounded">
                <code>
                  (N<sub>max</sub> - N<sub>d</sub>) / (N<sub>max</sub> - N
                  <sub>min</sub>) × 3 + 1
                </code>
              </div>
              <p className="mt-4 text-textp">
                Where N<sub>max</sub> is the best possible grade in your system
                (4.0), N<sub>min</sub> is the worst passing grade (2.0), and N
                <sub>d</sub> is your actual grade.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Image
              src="/images/cgpa.png"
              alt="Grading Scale Comparison"
              width={2000}
              height={2000}
              className="rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Conversion Table
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 px-4 text-left">CGPA (4.0 Scale)</th>
                  <th className="py-3 px-4 text-left">German Grade</th>
                  <th className="py-3 px-4 text-left">Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gradeData.map((grade, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-4 px-4 font-medium">{grade.cgpa}</td>
                    <td className="py-4 px-4">{grade.germanGrade}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          grade.remark === "Very Good"
                            ? "bg-green-100 text-green-800"
                            : grade.remark === "Good"
                            ? "bg-blue-100 text-blue-800"
                            : grade.remark === "Satisfactory"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {grade.remark}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Important Notes
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              This conversion is based on the Modified Bavarian Formula used by
              many German universities.
            </li>
            <li>
              Some universities may use slightly different conversion methods -
              always check with your specific institution.
            </li>
            <li>
              The German grading system is more stringent - a 1.0 is exceptional
              and rarely given.
            </li>
            <li>
              Grades below 4.0 are passing, while 5.0 means the student has
              failed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grading;
