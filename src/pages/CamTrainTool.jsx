import React from 'react';
import Hero from '../components/Hero';
import ToolDataCard from '../components/ToolDataCard';
import CamTrainToolImage from '../assets/CamTrainTool.png';
import CamTrainToolData1 from '../assets/CamTrainToolData1.png';
import UseCase from '../assets/UseCase.png';


const heroData = {
  title: "CamTrainTool (Camera Synthetic Image Model Training Tool)",
  description: "CamTrainTool is a tool for training LoRA models with Stable Diffusion main models using reference images. This tool allows you to create customized LoRA models to be used for the extension of your own custom dataset with synthetic images.",
  image: CamTrainToolImage,
  imageAlt: "CamTrainTool Demo"
};

const toolData1 = {
  title: "Features",
  features: [
    'Training LoRA (Low Rank Adaptation) models using sample datasets',
    'Fine-tuning training parameters'
  ],
  image: CamTrainToolData1,
  imageAlt: "CamTrainTool Features"
};

const toolData2 = {
  title: "Use Cases",
  features: [
    "Generate models specific to special production processes",
    "Develop AI models that focus on specific parts (industrial, healthcare, etc.)",
    "Optimize existing models with customized data sets for your company",
    "Train customized models for different product variations"
  ],
  image: UseCase,
  imageAlt: "CamTrainTool Use Cases"
};

const CamTrainTool = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero {...heroData} />
      <ToolDataCard {...toolData1} />
      <ToolDataCard {...toolData2} />
    </div>
  );
};

export default CamTrainTool;
