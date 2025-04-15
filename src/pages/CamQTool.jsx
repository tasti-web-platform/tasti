import React from 'react';
import Hero from '../components/Hero';
import ToolDataCard from '../components/ToolDataCard';
import CamQToolImage from '../assets/CamQTool.png';
import CamQToolData1 from '../assets/CamQToolData1.png';
import UseCase from '../assets/UseCase.png';

const heroData = {
  title: "CamQTool (Camera Image Quality Assesment Tool)",
  description: "CamQTool is a quality control tool that allows synthetic images obtained with CamGenTool to be analyzed with various mathematical and software metrics and to use the appropriate images.",
  image: CamQToolImage,
  imageAlt: "CamQTool Demo"
};

const toolData1 = {
  title: "Features",
  features: [
    "Realism analysis of synthetic images",
    "Image quality and clarity assessment",
    "Image histogram and texture analysis",
    "Comparison with reference images",
    "Quality score calculation with various metrics"
  ],
  image: CamQToolData1,
  imageAlt: "CamQTool Features"
};

const toolData2 = {
  title: "Use Cases",
  features: [
    "Quality control of the synthetic images produced",
    "Assess and improve dataset quality",
    "Improving model performance by selecting the most appropriate images",
    "Analyze the differences between real and synthetic images"
  ],
  image: UseCase,
  imageAlt: "CamQTool Use Cases"
};

const CamQTool = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero {...heroData} />
      <ToolDataCard {...toolData1} />
      <ToolDataCard {...toolData2} />
    </div>
  );
};

export default CamQTool;
