import React, { useEffect, useState} from 'react';
import img from './assets/metro.webp';
import './stars.scss';

const Overview = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className="h-screen bg-black">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="metro relative" style={{ zIndex: 1 }}>
        <div className="ml-4 md:ml-10 lg:ml-16 mt-4 h-44 w-3/4 ">
          <h1 className="text-white font-custom text-4xl">Overview</h1>
          <h1 className={`${windowWidth < 700 ? 'text-center' : ''} font-custom text-white ml-4 md:ml-10 lg:ml-16 mt-8 text-2xl`}>
            About
          </h1>
          <p className={`font-custom text-white ml-4 md:ml-10 lg:ml-16 mr-4 md:mr-10 lg:mr-16 ${windowWidth < 700 ? 'text-center' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur explicabo quasi id impedit, dolor obcaecati perferendis
            eum assumenda ad! Fuga eveniet aut mollitia veritatis eum ullam
            earum ducimus excepturi?
          </p>
          <p className={`font-custom text-white ml-4 md:ml-10 lg:ml-16 mr-4 md:mr-10 lg:mr-16 ${windowWidth < 700 ? 'text-center' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur explicabo quasi id impedit, dolor obcaecati perferendis
            eum assumenda ad! Fuga eveniet aut mollitia veritatis eum ullam
            earum ducimus excepturi?
          </p>
        </div>
        <img src={img} className="hidden md:block" alt="Metro" />
      </div>
    </div>
  );
}

export default Overview;
