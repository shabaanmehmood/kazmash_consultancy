import SubHeader from "@/components/SubHeader";
import React from "react";
import {
  FiTarget,
  FiAward,
  FiUser,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";
import Image from "next/image"; // Make sure to import Next.js Image component

const WhoWeAre = () => {
  return (
    <div>
      <SubHeader
        title="Who We Are"
        desc="Discover the vision and values that drive our commitment to your study abroad success"
      />

      <section className="max-w-[1700px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#3B88C5] to-[#2a6ba5] p-3 rounded-full mr-4 text-white shadow-md">
                  <FiTarget className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-textp leading-relaxed">
                At Kazmash Consultants, our vision is to empower students to
                achieve their study abroad dreams by providing personalized
                guidance, expert support, and unparalleled service. We strive to
                be the trusted partner of choice for students seeking
                international education opportunities.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#A6CE38] to-[#8fb82a] p-3 rounded-full mr-4 text-white shadow-md">
                  <FiAward className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-textp mb-6 leading-relaxed">
                We help students unlock their potential through:
              </p>
              <ul className="space-y-4">
                {[
                  "Expert university and program matching",
                  "Scholarship and financial aid assistance",
                  "Comprehensive transition support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#A6CE38]/10 p-1 rounded-full mr-3 mt-1">
                      <FiCheckCircle className="text-secondary text-lg" />
                    </div>
                    <span className="text-textp">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CEO's Message */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
            <div className="md:flex h-full">
              {/* CEO Profile */}
              <div className="md:w-1/3 bg-gradient-to-b from-[#3B88C5] to-[#2a6ba5] p-6 md:p-8 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3 md:mb-4">
                    <FiUser className="text-2xl md:text-3xl mr-2 md:mr-3" />
                    <h3 className="text-xl md:text-2xl font-bold">
                      From Our CEO
                    </h3>
                  </div>
                  <p className="mb-6 md:mb-8 opacity-90 text-sm md:text-base">
                    A personal message from our leadership team
                  </p>
                </div>
                <div className="flex flex-col items-center bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full bg-white/20 overflow-hidden border-2 border-white mb-3 md:mb-4">
                    <Image
                      src="/images/founder.jpg"
                      alt="Kazmash CEO"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="text-center">
                    {/* <h4 className="font-bold text-sm md:text-base">John Doe</h4> */}
                    <p className="text-xs md:text-sm opacity-90">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="md:w-2/3 p-6 md:p-8 lg:p-10">
                <blockquote className="text-textp italic mb-4 md:mb-6 text-base md:text-lg leading-relaxed border-l-4 border-[#A6CE38] pl-4 md:pl-6">
                  &apos;Welcome to Kazmash Consultants, your trusted partner in
                  achieving your study abroad dreams.&lsquo;
                </blockquote>
                <div className="space-y-3 md:space-y-4 text-textp text-sm md:text-base">
                  <p>
                    As the CEO, I am proud to lead a team of experts dedicated
                    to providing personalized guidance and unparalleled service
                    to students seeking international education opportunities.
                  </p>
                  <p>
                    We understand that studying abroad is a life-changing
                    experience that requires careful planning and support.
                    That&apos;s why we&apos;re committed to helping at every
                    step - from university selection to settling into your new
                    life abroad.
                  </p>
                  <p>
                    Our team is driven by a passion for education and commitment
                    to excellence. We believe every student deserves to unlock
                    their potential, and we&apos;re dedicated to making that
                    happen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FiUser className="text-2xl" />,
                  title: "Student-Centric",
                  desc: "Your success is our top priority",
                },
                {
                  icon: <FiStar className="text-2xl" />,
                  title: "Excellence",
                  desc: "Uncompromising quality in all we do",
                },
                {
                  icon: <FiCheckCircle className="text-2xl" />,
                  title: "Integrity",
                  desc: "Honest, transparent advice",
                },
                {
                  icon: <FiTarget className="text-2xl" />,
                  title: "Innovation",
                  desc: "Creative solutions for your journey",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all text-center"
                >
                  <div className="bg-[#3B88C5]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-textp">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
