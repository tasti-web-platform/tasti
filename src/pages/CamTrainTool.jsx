import React from 'react';
import Hero from '../components/Hero';
import CamTrainToolImage from '../assets/CamTrainTool.png';

const heroData = {
  title: "CamTrainTool - Model Training Solution",
  description: "Train LoRA (Low-Rank Adaptation) models with your custom datasets. Fine-tune parameters, analyze performance, and monitor the training process visually. The perfect tool for developing specialized AI models.",
  image: CamTrainToolImage,
  imageAlt: "CamTrainTool Demo"
};

const CamTrainTool = () => {
  return (
    <div>
      <Hero {...heroData} />
      {/* Additional content will go here */}
    </div>
  );
};

export default CamTrainTool;
