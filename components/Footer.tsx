import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-textp text-white pt-16 pb-10 mt-16 relative overflow-hidden">
      {/* Top Slanted Design */}
      <div className="absolute -top-10 left-0 w-full h-20 bg-white transform -skew-y-6 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Logo */}
          <div className="mb-6 lg:mb-0">
            <Image 
              src={"/logo.png"} 
              alt="KAZMASH Logo" 
              width={100} 
              height={100} 
              className="mx-auto lg:mx-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left w-full max-w-4xl">
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-secondary mb-2">German Office:</h3>
              <p className="text-sm md:text-base">
                FloBweg Bad Honnef 53604<br />
                North Rhine-Westphalia<br />
                Germany
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg text-secondary mb-2">Lahore Office:</h3>
              <p className="text-sm md:text-base">
                3rd Floor, Central Garden Tower<br />
                Office No. 301, 47 New<br />
                Babar Block Garden Town<br />
                Lahore, 54660, Pakistan
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg text-secondary mb-2">Okara Office:</h3>
              <p className="text-sm md:text-base">
                City Business Center<br />
                G.T Road Okara
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-sm md:text-base">
            &copy; 2025 KAZMASH Pharmaceuticals Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;