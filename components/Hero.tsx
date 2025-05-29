import React from 'react';

const Hero = () => {  
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: `url('/images/hero.jpg')` }}>

      <div className="absolute inset-0 bg-blue-900 bg-opacity-40 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-start top-24 h-full text-center px-4">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            KAZMASH CONSULTANTS
          </h1>
          <h3 className="text-white text-sm md:text-base tracking-widest uppercase my-2">
            Study in Germany
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
