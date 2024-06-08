import React, { useState, useEffect } from 'react';
import './stars.scss';
import py from './assets/python.png';
import sol from './assets/solidity.png';
import git from './assets/git.png';

const Skills2 = () => {
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
        <>
            <div className="h-screen bg-black">
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
                <div className="absolute mr-48">
                    {windowWidth >= 700 && (
                        <img src={py} className="h-28 blur-md hover:blur-none cursor-pointer selected" alt="Python" />
                    )}
                </div>
                <div className={`p-20 mt-4 h-44 ${windowWidth < 700 ? 'p-7' : ''}`}>
                    <div className={`${windowWidth < 700 ? 'mt-44' : ''}`}>
                        <h1 className={`text-white font-custom mt-10 text-2xl mt-8 ${windowWidth < 700 ? 'text-sm' : ''}`}>Frameworks</h1>
                        <ul className='flex justify-between mr-48'>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''}  ${windowWidth < 700 ? 'm-2' : ''}`} >React</h1></li>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''}  ${windowWidth < 700 ? 'm-2' : ''}`}>Hardhat</h1></li>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''}  ${windowWidth < 700 ? 'm-2' : ''}`}>Webthreejs</h1></li>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''}  ${windowWidth < 700 ? 'm-2' : ''}`}>Flask</h1></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className={`text-white font-custom mt-52 text-2xl mt-44 ${windowWidth < 700 ? 'text-sm' : ''}`}>Tools</h1>
                        <ul className='flex justify-between mr-48'>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Ethereum</h1></li>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Firebase</h1></li>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Linux</h1></li>
                            <li><h1 className={`text-white font-custom mt-10 mt-8 ${windowWidth < 700 ? 'text-xs' : ''} ${windowWidth < 700 ? 'm-2' : ''}`}>Raspberry Pi</h1></li>
                        </ul>
                        <div className="absolute mt-18" style={{ left: '70%' }}>
                            {windowWidth >= 700 && (
                                <img src={sol} className="h-28 blur-md hover:blur-none cursor-pointer selected" alt="Solidity" />
                            )}
                        </div>
                        <div className="absolute mt-20">
                            {windowWidth >= 700 && (
                                <img src={git} className="h-28 blur-md hover:blur-none cursor-pointer selected" alt="Git" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills2;
