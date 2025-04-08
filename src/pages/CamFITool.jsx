import React from 'react';
import Hero from '../components/Hero';
import ToolDataCard from '../components/ToolDataCard';
import CamFIToolImage from '../assets/CamFITool.png';
import CamFIToolData1 from '../assets/CamFIToolData1.png';
import CamFIToolData2 from '../assets/CamFIToolData2.png';

const heroData = {
  title: "CamFITool",
  description: "CamQTool is a quality control tool that allows synthetic images obtained with CamGenTool to be analyzed with various mathematical and software metrics and to use the appropriate images.",
  image: CamFIToolImage,
  imageAlt: "CamFITool Demo"
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
  image: CamFIToolData1,
  imageAlt: "CamFITool Features"
};

const toolData2 = {
  title: "Use Cases",
  features: [
    "Quality control of the synthetic images produced",
    "Assess and improve dataset quality",
    "Improving model performance by selecting the most appropriate images",
    "Analyze the differences between real and synthetic images"
  ],
  image: CamFIToolData2,
  imageAlt: "CamFITool Use Cases"
};

const CamFITool = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero {...heroData} />
      <ToolDataCard {...toolData1} />
      <ToolDataCard {...toolData2} />
    </div>
  );
};

export default CamFITool;
