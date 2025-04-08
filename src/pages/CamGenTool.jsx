import React from 'react';
import Hero from '../components/Hero';
import CamGenToolImage from '../assets/CamGenTool.png';

const heroData = {
  title: "CamGenTool - Synthetic Image Generation",
  description: "Generate high-quality synthetic images based on your sample images. Create multiple variations with customizable parameters, adjust positions, colors, and lighting conditions. Perfect for creating large datasets with controlled variations.",
  image: CamGenToolImage,
  imageAlt: "CamGenTool Demo"
};

const CamGenTool = () => {
  return (
    <div>
      <Hero {...heroData} />
      {/* Additional content will go here */}
    </div>
  );
};

export default CamGenTool;
