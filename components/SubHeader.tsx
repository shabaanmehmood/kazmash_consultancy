import React from "react";

const SubHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="w-full bg-[#3B88C5] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {desc && (
          <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
