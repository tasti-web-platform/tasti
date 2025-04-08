import React from 'react';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import CamFiToolLogo from '../assets/CamFiToolLogo.png';
import CamGenToolLogo from '../assets/CamGenToolLogo.png';
import CamTrainToolLogo from '../assets/CamTrainToolLogo.png';
import CamQToolLogo from '../assets/CamQToolLogo.png';
import GenerativeZooLogo from '../assets/GenerativeZoo.png';

const tools = [
  {
    title: 'CamFITool',
    image: CamFiToolLogo,
    description: [
      'Add various types of errors to existing images',
      'Adjust different distortion levels',
      'Automatically add noise, blur and other anomalies',
      'Making artificially created errors realistic',
      'Create large data sets with batch processing'
    ],
    link: '/camfitool'
  },
  {
    title: 'CamGenTool',
    image: CamGenToolLogo,
    description: [
      'Synthetic image generation based on sample images',
      'Create several variations with different parameters',
      'Adjust position, color and size of objects',
      'Customize image background and lighting conditions',
      'Create large data sets with batch production'
    ],
    link: '/camgentool'
  },
  {
    title: 'CamTrainTool',
    image: CamTrainToolLogo,
    description: [
      'Training LoRA (Low-Rank Adaptation) models',
      'Customize models with custom data sets',
      'Fine-tuning training parameters',
      'Analyze and evaluate model performance',
      'Visually monitoring the training process'
    ],
    link: '/camtraintool'
  },
  {
    title: 'CamQTool',
    image: CamQToolLogo,
    description: [
      'Realism analysis of synthetic images',
      'Image quality and clarity assessment',
      'Image histogram and texture analysis',
      'Comparison with reference images',
      'Quality score calculation with various metrics'
    ],
    link: '/camqtool'
  },
  {
    title: 'GenerativeZoo',
    image: GenerativeZooLogo,
    description: [
      'GenerativeZoo is an innovative generative algorithm library developed using Python and PyTorch. Developed within the Xecs TASTI project (nr. 2022005), it is a unique collection of 27 different models, brought together by standardized, user-friendly and independent code structures. The library offers practical solutions to researchers and developers with comprehensive documentation and example scenarios.'
    ],
    link: '' // No link for GenerativeZoo
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      <h2 className="text-3xl font-bold mt-10 mb-6">Innovative Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
};

export default Home; 