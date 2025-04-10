import React from 'react';

const ToolInfoCard = ({ title, features }) => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <div className="space-y-6">
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

export default ToolInfoCard; 