import React, { useState, useEffect } from 'react';
import cpp from './assets/cpp.png';
import node from './assets/node.webp';
import lin from './assets/linux.png';
import './stars.scss';

const Skills = () => {
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
      <div  id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className={`${windowWidth < 700 ? 'mt-44' : ''} p-20 mt-4 h-44 ${windowWidth < 700 ? 'p-7' : ''}`}>
        <h1 className={`skill text-white font-custom text-4xl`}>Skills</h1>
        <div>
          <h1 className={`text-white font-custom mt-10 text-2xl ${windowWidth < 700 ? 'text-sm' : ''}`}>Programming languages</h1>
          <ul className='flex justify-between mr-48'>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Javascript</h1></li>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Python</h1></li>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Solidity</h1></li>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>CPP</h1></li>
          </ul>
          <div className="absolute mt-12 hide-on-small" style={{ left: '26%' }}>
            <img src={node} className="h-28 blur-md hover:blur-none cursor-pointer selected" alt="Node.js" />
          </div>
          <div className="absolute hide-on-small" style={{ left: '82%' }}>
            <img src={cpp} className="h-28 blur-md hover:blur-none cursor-pointer selected" alt="C++" />
          </div>
        </div>
        <div>
          <h1 className={`text-white font-custom mt-52 text-2xl ${windowWidth < 700 ? 'text-sm' : ''}`}>Backend Development</h1>
          <ul className='flex justify-between mr-48'>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Nodejs</h1></li>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Express</h1></li>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Fast API</h1></li>
            <li><h1 className={`text-white font-custom mt-10 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Mongoose</h1></li>
          </ul>
          <div className="absolute hide-on-small" style={{ left: '56%' }}>
            <img src={lin} className="h-28 blur-md hover:blur-none cursor-pointer selected" alt="Linux" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
