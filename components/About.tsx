import React from "react";

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-5 h-screen p-5 bg-gray-900 text-white"
        id="about"
    >
      <div className="box col-span-3 bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
        <h1 className="text-3xl mb-3 text-cyan-400">About RYM Grenergy</h1>
        <p>
          RYM Grenergy Company is a foremost renewable energy company in India,
          committed to providing clean and sustainable energy solutions.
        </p>
      </div>
      <div className="box col-span-2 bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
        <h2 className="text-2xl mb-3 text-cyan-400">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Sustainable solutions</li>
          <li>Water system power Installation</li>
          <li>IOT (Internet of Things) installations</li>
          <li>Sustainable AI Tools</li>
        </ul>
      </div>
      <div className="box bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
        <h2 className="text-2xl mb-3 text-cyan-400">Commitment</h2>
        <p>
          We are dedicated to helping our clients achieve their energy goals
          with high-quality products and services, constantly innovating to
          improve energy efficiency.
        </p>
      </div>
      <div className="box bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
        <h2 className="text-2xl mb-3 text-cyan-400">Vision</h2>
        <p>
          To be a leading provider of renewable energy solutions in India and to
          help create a sustainable future for our planet.
        </p>
      </div>
      <div className="box bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
        <h2 className="text-2xl mb-3 text-cyan-400">Mission</h2>
        <p>
          To provide our clients with high-quality, cost-effective renewable
          energy solutions that meet their specific needs.
        </p>
      </div>
      <div className="box bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
        <h2 className="text-2xl mb-3 text-cyan-400">Call to Action</h2>
        <p>
          Are you looking for a renewable energy solution for home or business?
          Pick up your phone and contact RYM Grenergy today to learn more about
          our products and services.
        </p>
      </div>
    </div>
  );
};

export default About;
