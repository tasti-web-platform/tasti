import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleTryDemo = () => {
    navigate('/trydemo');
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
        <div className="w-full sm:w-1/2 space-y-6">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold text-[#1F2937]">Artificial Intelligence Powered Synthetic Vision Solution for Industrial Applications</h1>
          </div>

          <div>
            <p className="text-center sm:text-left font-normal text-base sm:text-lg text-[#6B7280]">TASTI WEB PLATFORM is an innovative solution designed to create synthetic images for industrial applications. Our platform uses artificial intelligence to revolutionize image creation processes for factories and production facilities. Whether for product development, quality control or process optimization, TASTI Web Platform offers powerful and user-friendly tools to create visuals that fit your business</p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleTryDemo}
              className="border rounded-md px-6 py-3 font-medium text-lg bg-[#3730A3] text-[#FFFFFF] border-[#3730A3] hover:bg-[#2b2582] transition-colors">
              Try Demo
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
          <img src="/Hero.png" className="w-full max-w-md" alt="Project" /> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
