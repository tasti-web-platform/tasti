import React from 'react';

const ToolDataCard = ({ title, features, image, imageAlt }) => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-16 max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <div className="w-full sm:w-1/2 flex justify-center order-2 sm:order-1">
          <img src={image} className="w-full max-w-md rounded-3xl" alt={imageAlt} />
        </div>

        <div className="w-full sm:w-1/2 space-y-6 order-1 sm:order-2">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]">{title}</h2>
          </div>

          <ul className="list-disc pl-5 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="text-base sm:text-lg text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolDataCard; 