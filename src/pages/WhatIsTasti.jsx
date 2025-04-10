import React from 'react';
import Hero from '../components/Hero';
import ToolInfoCard from '../components/ToolInfoCard';
import tastiHeroImage from '../assets/logo_tasti_light.png'; // You'll need to add this image

const WhatIsTasti = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero
        title="What is TASTI?"
        description="TASTI (Test Automation and Synthetic Test Image Tool) is an innovative toolkit designed to simplify visual test automation and synthetic image generation. It is particularly useful in projects involving artificial intelligence, machine learning, and computer vision. TASTI enables users to generate, manipulate, and evaluate images for testing purposes—helping teams validate the accuracy and resilience of their visual systems."
        image={tastiHeroImage}
        imageAlt="TASTI Overview"
      />

      <ToolInfoCard
        title="What tools does it include?"
        features={[
          "Adding controlled faults to real images",
          "Comparing original and test images for quality assessment",
          "Generating new images using AI-based prompts and parameters"
        ]}
      />

      <ToolInfoCard
        title="What is it used for?"
        features={[
          "Automating visual test scenarios",
          "Generating fault-injected and synthetic test data",
          "Validating AI or computer vision models",
          "Enhancing data augmentation processes"
        ]}
      />
    </div>
  );
};

export default WhatIsTasti;
