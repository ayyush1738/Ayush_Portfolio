import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for small screen
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`${windowWidth < 700 ? 'bg-transparent' : ''} fixed z-40 ${scrolled ? "bg-black bg-opacity-50" : "bg-transparent"} ${isSmallScreen ? "left-0" : "right-1"}`}
        style={{ zIndex: 2 }}
      >
        <div className={`${windowWidth < 800 ? '' : ''} flex z-50 justify-between items-center`}>
          <div className={`p-10 justify-between h-20 w-screen md:flex text-white text-2xl font-custom font-bold ${isSmallScreen ? "hidden" : ""}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blogs</a>
            <a href="#">Connect with me</a>
          </div>
          <div className={`w-auto p-5 md:hidden mr-20 flex items-center ${windowWidth > 700 ? 'hidden' : ''}`}>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden z-50 ml-10 rounded-3xl z-20">
            <ul className="flex flex-col items-center space-y-4 mt-4 text-white bg-black text-2xl font-custom font-bold">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Connect with me</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
