// import React from "react";
// import { FiBook, FiAward, FiGlobe, FiDollarSign, FiBriefcase, FiUsers, FiCalendar, FiMessageSquare, FiInfo } from "react-icons/fi";

// const WhyStudyGermany = () => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div>
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">
//             Germany
//           </h1>
//           <div className="w-20 h-1 bg-[#A6CE38] mx-auto mb-6"></div>
//           <p className="text-[#757575] max-w-3xl mx-auto text-lg">
//             Discover why Germany is the ideal destination for international students seeking world-class education and career opportunities
//           </p>
//         </div>

//         {/* Main Content */}
//         <div>
//           {/* Left Column - Table of Contents */}
//           {/* <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-fit sticky top-4">
//             <h3 className="text-xl font-bold text-[#3B88C5] mb-4 flex items-center">
//               <FiBook className="mr-2" /> Table of Contents
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 "Why study in Germany",
//                 "Admission requirements",
//                 "Cost of studying",
//                 "Scholarships",
//                 "Student visa requirements",
//                 "Post-Study work",
//                 "Book a Meeting",
//                 "CEO Message",
//                 "About Us"
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-[#A6CE38] mr-2">•</span>
//                   <span  className="text-[#757575] hover:text-[#3B88C5] transition-colors">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Middle Column - Main Content */}
//           <div className="md:col-span-2">
//             {/* Why Study in Germany */}
//             <div id="why-study-in-germany" className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-8">
//               <h2 className="text-2xl font-bold text-[#3B88C5] mb-6 flex items-center">
//                 <FiAward className="mr-2" /> Why Study in Germany?
//               </h2>
//               <div className="space-y-6 text-[#757575]">
//                 <p>
//                   Germany is an ideal place in the educational world to pursue your studies. It is becoming a more and more popular location for students from across the world looking to study abroad. Every year, thousands of these students make this decision.
//                 </p>
//                 <p>
//                   Germany is an excellent destination for international applicants looking to start new careers and explore new horizons because of its strong educational institutions and plentiful post-study employment prospects.
//                 </p>
//                 <p>
//                   Germany is considered a heaven for postsecondary education. Unlike any other nation, it offers a wide variety of internationally acclaimed colleges, an abundance of courses to select from, globally recognized degrees that guarantee you will be highly employable, and reasonably priced living expenses.
//                 </p>
//                 <p>
//                   Germany maintains its excellent standard of education while offering relatively open career paths. Moreover, German universities also encourage transfers, and research is strongly encouraged to give students opportunities for creativity and discovery.
//                 </p>
//               </div>
//             </div>

//             {/* Benefits Grid */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               {[
//                 {
//                   icon: <FiGlobe className="text-2xl" />,
//                   title: "Global Recognition",
//                   content: "German degrees are respected worldwide, ranking #3 for education quality"
//                 },
//                 {
//                   icon: <FiDollarSign className="text-2xl" />,
//                   title: "Affordable Education",
//                   content: "Low or no tuition fees at public universities with reasonable living costs"
//                 },
//                 {
//                   icon: <FiBriefcase className="text-2xl" />,
//                   title: "Career Opportunities",
//                   content: "18-month post-study work visa and high employability rates"
//                 },
//                 {
//                   icon: <FiUsers className="text-2xl" />,
//                   title: "Diverse Community",
//                   content: "Vibrant international student population with multicultural exposure"
//                 }
//               ].map((item, index) => (
//                 <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
//                   <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
//                   <p className="text-[#757575]">{item.content}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         {/* <div className="text-center mt-8">
//           <Link href="/admission">
//             <button className="bg-gradient-to-r from-[#3B88C5] to-[#2a6ba5] hover:from-[#2a6ba5] hover:to-[#3B88C5] text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
//               <FiCalendar className="mr-2" />
//               Start Your Application Now
//             </button>
//           </Link>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default WhyStudyGermany;




















import React from "react";
import { FiBook, FiAward, FiGlobe, FiDollarSign, FiBriefcase, FiUsers } from "react-icons/fi";

const WhyStudyGermany = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3B88C5] mb-4">
            Germany
          </h1>
          <div className="w-20 h-1 bg-[#A6CE38] mx-auto mb-6"></div>
          <p className="text-[#757575] max-w-3xl mx-auto text-lg">
            Germany is an ideal place in the educational world to pursue your studies. It is becoming 
            a more and more popular location for students from across the world looking to study abroad.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Left Sidebar */}
          <div className="lg:w-1/4 bg-white p-6 rounded-xl shadow-md border border-gray-200 h-fit sticky top-4">
            <h3 className="text-xl font-bold text-[#3B88C5] mb-4 flex items-center">
              <FiBook className="mr-2" /> Table of Contents
            </h3>
            <ul className="space-y-3">
              {[
                "Why study in Germany",
                "Admission requirements in Germany",
                "Cost of studying in Germany",
                "Scholarships for international students",
                "Student visa requirements",
                "Post-Study work Opportunities",
                "Book a Meeting with an expert",
                "CEO Message",
                "About Us"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#A6CE38] mr-2">•</span>
                  <span className="text-[#757575] hover:text-[#3B88C5] transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Why Study in Germany Section */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-[#3B88C5] mb-6 flex items-center">
                <FiAward className="mr-2" /> Why Study in Germany?
              </h2>
              <div className="space-y-6 text-[#757575]">
                <p>
                  Every year, thousands of these students make this decision. Germany is an excellent destination 
                  for international applicants looking to start new careers and explore new horizons because of its 
                  strong educational institutions and plentiful post-study employment prospects.
                </p>
                
                <p>
                  Germany is quite well-liked by students from outside. Its popularity is due to the nation&apos;s 
                  abundance of top-notch colleges, vibrant student population, and accessible financing sources. 
                  Additionally, the World Population Review classifies Germany as #3 among all the countries 
                  for its top-quality education.
                </p>
                
                <p>
                  Germany is considered a heaven for postsecondary education. Unlike any other nation, it offers 
                  a wide variety of internationally acclaimed colleges, an abundance of courses to select from, 
                  globally recognized degrees that guarantee you will be highly employable, and reasonably priced 
                  living expenses.
                </p>
                
                <p>
                  Germany maintains its excellent standard of education while offering relatively open career paths. 
                  Moreover, German universities also encourage transfers, and research is strongly encouraged to 
                  give students opportunities for creativity and discovery. A high level of life at a reduced cost, 
                  recognition, scholarships, and a long-term investment for the future are just a few of the benefits 
                  it provides.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: <FiGlobe className="text-2xl" />,
                  title: "Global Recognition",
                  content: "Ranked #3 worldwide for education quality by World Population Review"
                },
                {
                  icon: <FiDollarSign className="text-2xl" />,
                  title: "Affordable Education",
                  content: "Low tuition fees with high standard of living"
                },
                {
                  icon: <FiBriefcase className="text-2xl" />,
                  title: "Career Prospects",
                  content: "Excellent post-study employment opportunities"
                },
                {
                  icon: <FiUsers className="text-2xl" />,
                  title: "Diverse Community",
                  content: "Vibrant international student population"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-[#3B88C5] w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-[#757575]">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudyGermany;