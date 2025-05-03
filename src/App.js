import React from 'react';
import Countdown from 'react-countdown';
import { FaDiscord, FaGithub } from 'react-icons/fa'; 
import './output.css'; 

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 462.799"
    className="w-6 h-6" 
  >
    <path
      fillRule="nonzero"
      d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
      fill="currentColor" 
    />
  </svg>
);

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span className="text-2xl font-bold">We're Live!</span>;
  } else {
    return (
      <div className="flex space-x-4">
        <div className="text-center">
          <span className="text-5xl font-extrabold">{days}</span>
          <span className="text-sm text-gray-400">Days</span>
        </div>
        <div className="text-center">
          <span className="text-5xl font-extrabold">{hours}</span>
          <span className="text-sm text-gray-400">Hours</span>
        </div>
        <div className="text-center">
          <span className="text-5xl font-extrabold">{minutes}</span>
          <span className="text-sm text-gray-400">Minutes</span>
        </div>
        <div className="text-center">
          <span className="text-5xl font-extrabold">{seconds}</span>
          <span className="text-sm text-gray-400">Seconds</span>
        </div>
      </div>
    );
  }
};

function App() {
  const targetDate = new Date('2026-03-20T00:00:00');

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-8 bg-gray-900">
      <img
        src="/static/logo.png"
        className="w-32 h-32 rounded-full mb-8 shadow-lg" 
        alt="Wovver Logo"
      />

      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-gradient bg-clip-text text-transparent">
        Wovver is Coming Soon!
      </h1>

      <p className="text-lg md:text-xl text-gray-400 mb-6 text-center max-w-2xl">
        We're building something amazing for you. Stay tuned and join our community to get the latest updates!
      </p>

      <p className="text-md text-red-400 italic mb-8 text-center max-w-xl">
        Sorry for the delay — we've been pushed back due to school and development issues. Thanks for your patience!
      </p>

      <div className="mb-8">
        <Countdown date={targetDate} renderer={CountdownRenderer} />
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
        <a
          href="https://discord.gg/Cy2q5G7sj5" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-3 transition duration-300"
        >
          <FaDiscord className="w-7 h-7" />
          <span>Join Our Discord</span>
        </a>

        <a
          href="https://twitter.com/homaworks" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-3 transition duration-300"
        >
          <XIcon /> 
          <span>Follow Us on X</span>
        </a>

        <a
          href="https://github.com/Wovver" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-3 transition duration-300"
        >
          <FaGithub className="w-7 h-7" />
          <span>Star on GitHub</span>
        </a>
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p>© 2023 HomaWorks. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
