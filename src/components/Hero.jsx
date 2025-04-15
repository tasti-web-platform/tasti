import React from 'react';

const Hero = ({ title, description, image, imageAlt }) => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
        <div className="w-full sm:w-1/2 space-y-6">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold text-[#1F2937]">{title}</h1>
          </div>

          <div>
            <p className="text-center sm:text-left font-normal text-base sm:text-lg text-[#6B7280]">{description}</p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSeKjDugfymyIg_L887jeJ1PK7RtziSoBPhMGpBuOo_A-GDpXw/viewform?usp=header',
                  '_blank'
                )
              }
              className="border rounded-md px-6 py-3 font-medium text-lg bg-[#374151] text-[#FFFFFF] border-[#374151] hover:bg-[#1F2937] transition-colors"
            >
              Join Our Beta Program
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
          <img src={image} className="w-full max-w-md rounded-3xl" alt={imageAlt} /> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
