import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { HiMenu } from "react-icons/hi";
import { RiCodeFill } from "react-icons/ri";
import { HiOutlineCode } from "react-icons/hi";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "Experience",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const var1 = "<Ruturaj/>";

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            {var1}
          </Link>
        </div>
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden md:block"
          >
            <RiCodeFill size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white `}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <HiOutlineCode size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-blue-300 font-bold ${
                    item.name === activeIndex ? "text-blue-500 border-b-2 border-blue-500" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="mailto:ruturajsahu2002@gmail.com"
              className="bg-blue-400 text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-black md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              HIRE ME
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
