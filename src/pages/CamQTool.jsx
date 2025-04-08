import React from 'react';
import Hero from '../components/Hero';
import CamQToolImage from '../assets/CamQTool.png';

const heroData = {
  title: "CamQTool - Image Quality Analysis",
  description: "Analyze the realism and quality of synthetic images with our comprehensive quality assessment tool. Compare with reference images, analyze histograms and textures, and calculate quality scores using various metrics.",
  image: CamQToolImage,
  imageAlt: "CamQTool Demo"
};

const CamQTool = () => {
  return (
    <div>
      <Hero {...heroData} />
      {/* Additional content will go here */}
    </div>
  );
};

export default CamQTool;
