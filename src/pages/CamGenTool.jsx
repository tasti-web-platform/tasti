import React from 'react';
import Hero from '../components/Hero';
import ToolDataCard from '../components/ToolDataCard';
import CamGenToolImage from '../assets/CamGenTool.png';
import CamGenToolData1 from '../assets/CamGenToolData1.png';
import UseCase from '../assets/UseCase.png';

const heroData = {
  title: "CamGenTool (Camera Synthetic Image Generation Tool)",
  description: "CamGenTool is a powerful tool for automatic creation of synthetic images based on sample images. This tool allows you to create images that are similar to real images but completely synthetic.",
  image: CamGenToolImage,
  imageAlt: "CamGenTool Demo"
};

const toolData1 = {
  title: "Features",
  features: [
    "Synthetic image generation based on sample images",
    "Create several variations with different parameters",
    "Adjust position, color and size of objects",
    "Customize image background and lighting conditions",
    "Create large data sets with batch production"
  ],
  image: CamGenToolData1,
  imageAlt: "CamGenTool Features"
};

const toolData2 = {
  title: "Use Cases",
  features: [
    "Product visualization and prototyping",
    "Generating training data for machine learning",
    "Simulation of rare or hard-to-collect scenarios",
    "Visual design of production processes"
  ],
  image: UseCase,
  imageAlt: "CamGenTool Use Cases"
};

const CamGenTool = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero {...heroData} />
      <ToolDataCard {...toolData1} />
      <ToolDataCard {...toolData2} />
    </div>
  );
};

export default CamGenTool;
