import React from 'react';
import Hero from '../components/Hero';
import ToolInfoCard from '../components/ToolInfoCard';
import logo2 from '../assets/logo2.png'; 
import ToolDataCard from '../components/ToolDataCard';
import Ekstra1 from '../assets/Ekstra1.png';
import Ekstra2 from '../assets/Ekstra2.png';

const WhatIsTasti = () => {
  return (
    <div className="space-y-16 py-8">
      <Hero
        title="What is TASTI?"
        description="TASTI (Application-Tailored Synthetic İmage Generation) is a powerful toolkit that simplifies visual test automation and synthetic image generation. It is ideal for projects in artificial intelligence, machine learning, and computer vision. TASTI helps teams easily generate, edit, and evaluate test images, making it easier to ensure the accuracy and resilience of their visual systems."
        image={logo2}
        imageAlt="TASTI Overview"
      />


      <ToolDataCard
        title="What tools does it include?"
        features={[
          "Adding controlled faults to real images",
          "Comparing original and test images for quality assessment",
          "Generating new images using AI-based prompts and parameters"
        ]}
        image={Ekstra1}
        imageAlt="What tools does it include?"
      />

      <ToolDataCard
        title="What is it used for?"
        features={[
          "Automating visual test scenarios",
          "Generating fault-injected and synthetic test data",
          "Validating AI or computer vision models",
          "Enhancing data augmentation processes"
        ]}
        image={Ekstra2}
        imageAlt="What is it used for?"
      />
    </div>
  );
};

export default WhatIsTasti;
