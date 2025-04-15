import React from 'react';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import HeroImage from '../assets/Hero.png';
import CamFiToolLogo from '../assets/CamFiToolLogo.png';
import CamGenToolLogo from '../assets/CamGenToolLogo.png';
import CamTrainToolLogo from '../assets/CamTrainToolLogo.png';
import CamQToolLogo from '../assets/CamQToolLogo.png';
import GenerativeZooLogo from '../assets/GenerativeZoo.png';

const heroData = {
  title: "TASTI Web Platform Closed Beta Program",
  description: "The TASTI Web Platform is an innovative solution designed to generate synthetic images for industrial applications. Our platform uses artificial intelligence to revolutionize image generation processes for everyone.",
  buttonText: "Join Our Beta Program",
  buttonLink: "/trydemo",
  image: HeroImage,
  imageAlt: "TASTI Platform"
};

const tools = [
  {
    title: 'CamFITool (Camera Fault Injection Tool)',
    image: CamFiToolLogo,
    description: [
      'Inject 13 different fault types into images',
      'Create large libraries of faulty images with one click'
    ],
    link: '/camfitool'
  },
  {
    title: 'CamGenTool (Camera Synthetic Image Generation Tool)',
    image: CamGenToolLogo,
    description: [
      'Synthetic image generation based on reference images',
      'Generate various synthetic image variations with different parameters',
      'Create large libraries of synthetic images with one click'
    ],
    link: '/camgentool'
  },
  {
    title: 'CamTrainTool (Camera Synthetic Image Model Training Tool)',
    image: CamTrainToolLogo,
    description: [
      'Training LoRA (Low Rank Adaptation) models using sample datasets',
      'Fine-tuning training parameters'
    ],
    link: '/camtraintool'
  },
  {
    title: 'CamQTool (Camera Image Quality Assesment Tool)',
    image: CamQToolLogo,
    description: [
      'Analyzing the correspondence of synthetic images to real images',
      'Image quality assessment',
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
    link: 'https://github.com/caetas/GenerativeZoo',
    showLink: true
  }
];

const Home = () => {
  return (
    <div>
      <Hero {...heroData} />
      <h2 className="text-3xl font-bold mt-10 mb-6">TASTI Web Platform Toolkit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Home; 