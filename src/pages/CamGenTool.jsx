import React from 'react';
import Hero from '../components/Hero';
import ToolDataCard from '../components/ToolDataCard';
import CamGenToolImage from '../assets/CamGenTool.png';
import CamGenToolData1 from '../assets/CamGenToolData1.png';
import UseCase from '../assets/UseCase.png';

const heroData = {
  title: "CamGenTool (Camera Synthetic Image Generation Tool)",
  description: "CamGenTool is a powerful tool for the automatic generation of synthetic images with the using reference images or image prompts. This tool allows you to generate images that resemble real images but are completely synthetic. This real image similarity can be enhanced by the power of LoRA models trained with reference images.",
  image: CamGenToolImage,
  imageAlt: "CamGenTool Demo"
};

const toolData1 = {
  title: "Features",
  features: [
    'Synthetic image generation based on reference images',
    'Generate various synthetic image variations with different parameters',
    'Create large libraries of synthetic images with one click'
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
