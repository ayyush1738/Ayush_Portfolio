import React, { useEffect, useState } from "react";
import bgImg from './assets/home1.png';
import Lottie from "lottie-react";
import anim from './assets/baloon.json';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Navbar from "./Navbar";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define a CSS animation for rotation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
      .selected {
        animation: rotate 100s linear infinite;
      }
      .animate {
        animation: typing 2s steps(20), cursor .4s step-end infinite alternate;
      }
    `;
    document.head.appendChild(style);

    // Clean up the style element when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Web3 Developer', 'Content Writer', 'Cool Boy'],
    loop: 0,
    typeSpeed: 120
  });

  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col md:flex-row w-auto h-screen items-center justify-center p-4 md:p-20">
        <div className=" absolute inset-0 z-5 bg-cover blur-md" style={{ backgroundImage: `url(${bgImg})` }}></div>
        <div className="relative z-10 flex flex-col md:flex-row w-full items-center justify-center">
          {windowWidth >= 500 && (
            <div className="w-full md:w-1/3 flex justify-center z-10">
              <Lottie animationData={anim} className="h-64 md:h-96" />
            </div>
          )}
          <div className={`relative z-10 w-full text-center md:text-left ${windowWidth >= 500 ? 'md:w-1/2 mt-4 md:mt-0' : 'mt-20'}`}>
            <h1 className="text-3xl lg:text-5xl font-bold">
              <b className="text-blue-800">Hi, it's Ayush <br />I'm a </b>
              <span className="text-green-900 font-bold">{text}</span>
              <span className="text-red-500"><Cursor /></span>
            </h1>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
