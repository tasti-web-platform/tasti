import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ title, image, description, link, showLink = true }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-2xl">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded-lg" />
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <ul className="list-disc pl-5 mb-4 text-gray-600">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {showLink && (
        <Link to={link} className="text-blue-500 hover:underline">Explore Our Solution</Link>
      )}
    </div>
  );
};

export default ToolCard; 