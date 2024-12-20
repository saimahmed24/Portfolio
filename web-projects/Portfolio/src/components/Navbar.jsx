import { color } from "framer-motion";
import { div } from "framer-motion/client";
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsBehance, BsGithub, BsLinkedin, BsTwitter, BsTwitterX, BsYoutube } from "react-icons/bs"

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);


  const menuOpen = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="fixed z-10 top-0 flex items-center w-full justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md ">
      <a href="#home" className=" text-3xl font-semibold transition-all duration-300 hover:opacity-100 ">Portfolio<span className="text-red-600">.</span></a>
      <ul className="hidden md:flex gap-10 w-min-880 ">
        <a href="#home" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Home
          </li>
        </a>
        <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Tech
          </li>
        </a>
        <a href="#project" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Project
          </li>
        </a>
        <a href="#experience" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Experience
          </li>
        </a>
        <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
          <li>
            Contact
          </li>
        </a>
      </ul>
      <ul className="hidden md:flex items-center justify-center gap-3">
        <a href="https://www.linkedin.com/in/saimahmed24" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-700 hover:opacity-100 ">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://github.com/saimahmed24" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100 ">
            <BsGithub />
          </li>
        </a>
        <a href="https://www.behance.net/saimahmedqazi24" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300  hover:text-blue-600 hover:opacity-100 ">
            <BsBehance />
          </li>
        </a>

        {/* <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked={isDarkMode}
            onChange={toggleTheme} />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">Enable Dark Theme</span>
        </label> */}
        <li >
          <label
          
            htmlFor="themeSwitcherThree"
            className={"themeSwitcherThree inline-flex cursor-pointer select-none items-center ml-4 transition-all"}
          >
            <input
              type="checkbox"
              name="themeSwitcherThree"
              id="themeSwitcherThree"
              className="sr-only"
              checked={isDarkMode}
              onChange={toggleTheme}
              
            />

            <div className="shadow-two flex items-center justify-center ">
              <span
                className={`light bg-white flex h-6 w-6 items-center justify-center rounded-lg text-white ${isDarkMode ? '' : 'hidden'
                  }`}
              >
                {/* Light Mode SVG */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {<svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V2C8.66667 2.36819 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.36819 7.33333 2V0.666667C7.33333 0.298477 7.63181 0 8 0ZM8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333ZM4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8ZM8.66667 14C8.66667 13.6318 8.36819 13.3333 8 13.3333C7.63181 13.3333 7.33333 13.6318 7.33333 14V15.3333C7.33333 15.7015 7.63181 16 8 16C8.36819 16 8.66667 15.7015 8.66667 15.3333V14ZM2.3411 2.3424C2.60145 2.08205 3.02356 2.08205 3.28391 2.3424L4.23057 3.28906C4.49092 3.54941 4.49092 3.97152 4.23057 4.23187C3.97022 4.49222 3.54811 4.49222 3.28776 4.23187L2.3411 3.28521C2.08075 3.02486 2.08075 2.60275 2.3411 2.3424ZM12.711 11.7682C12.4506 11.5078 12.0285 11.5078 11.7682 11.7682C11.5078 12.0285 11.5078 12.4506 11.7682 12.711L12.7148 13.6577C12.9752 13.918 13.3973 13.918 13.6577 13.6577C13.918 13.3973 13.918 12.9752 13.6577 12.7148L12.711 11.7682ZM0 8C0 7.63181 0.298477 7.33333 0.666667 7.33333H2C2.36819 7.33333 2.66667 7.63181 2.66667 8C2.66667 8.36819 2.36819 8.66667 2 8.66667H0.666667C0.298477 8.66667 0 8.36819 0 8ZM14 7.33333C13.6318 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.6318 8.66667 14 8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333H14ZM4.23057 11.7682C4.49092 12.0285 4.49092 12.4506 4.23057 12.711L3.28391 13.6577C3.02356 13.918 2.60145 13.918 2.3411 13.6577C2.08075 13.3973 2.08075 12.9752 2.3411 12.7148L3.28776 11.7682C3.54811 11.5078 3.97022 11.5078 4.23057 11.7682ZM13.6577 3.28521C13.918 3.02486 13.918 2.60275 13.6577 2.3424C13.3973 2.08205 12.9752 2.08205 12.7148 2.3424L11.7682 3.28906C11.5078 3.54941 11.5078 3.97152 11.7682 4.23187C12.0285 4.49222 12.4506 4.49222 12.711 4.23187L13.6577 3.28521Z"
                      fill="#4F46E5"
                    />
                  </svg>
                  }
                </svg>
              </span>
              <span
                className={`dark text-body-color flex h-6 w-6 items-center justify-center rounded-lg ${isDarkMode ? 'hidden' : ''
                  }`}
              >
                {/* Dark Mode SVG */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {<svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.0547 1.67334C8.18372 1.90227 8.16622 2.18562 8.01003 2.39693C7.44055 3.16737 7.16651 4.11662 7.23776 5.07203C7.30901 6.02744 7.72081 6.92554 8.39826 7.60299C9.07571 8.28044 9.97381 8.69224 10.9292 8.76349C11.8846 8.83473 12.8339 8.5607 13.6043 7.99122C13.8156 7.83502 14.099 7.81753 14.3279 7.94655C14.5568 8.07556 14.6886 8.32702 14.6644 8.58868C14.5479 9.84957 14.0747 11.0512 13.3002 12.053C12.5256 13.0547 11.4818 13.8152 10.2909 14.2454C9.09992 14.6756 7.81108 14.7577 6.57516 14.4821C5.33925 14.2065 4.20738 13.5846 3.312 12.6892C2.41661 11.7939 1.79475 10.662 1.51917 9.42608C1.24359 8.19017 1.32569 6.90133 1.75588 5.71038C2.18606 4.51942 2.94652 3.47561 3.94828 2.70109C4.95005 1.92656 6.15168 1.45335 7.41257 1.33682C7.67423 1.31264 7.92568 1.44442 8.0547 1.67334ZM6.21151 2.96004C5.6931 3.1476 5.20432 3.41535 4.76384 3.75591C3.96242 4.37553 3.35405 5.21058 3.00991 6.16334C2.66576 7.11611 2.60008 8.14718 2.82054 9.13591C3.04101 10.1246 3.5385 11.0301 4.25481 11.7464C4.97111 12.4627 5.87661 12.9602 6.86534 13.1807C7.85407 13.4012 8.88514 13.3355 9.8379 12.9913C10.7907 12.6472 11.6257 12.0388 12.2453 11.2374C12.5859 10.7969 12.8536 10.3081 13.0412 9.78974C12.3391 10.0437 11.586 10.1495 10.8301 10.0931C9.55619 9.99813 8.35872 9.44907 7.45545 8.5458C6.55218 7.64253 6.00312 6.44506 5.90812 5.17118C5.85174 4.4152 5.9575 3.66212 6.21151 2.96004Z " fill="#cccccc"
                    />
                  </svg>
                  }
                </svg>
              </span>
            </div>
          </label>
        </li>


      </ul>



      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )
      }

      {isOpen && (
        <div className={`fixed right-0 top-[84px] md:hidden flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-8">
            <a href="#home" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Home
              </li>
            </a>
            <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Tech
              </li>
            </a>
            <a href="#project" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Project
              </li>
            </a>
            <a href="#experience" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Experience
              </li>
            </a>
            <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ">
              <li>
                Contact
              </li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <a href="https://www.linkedin.com/in/saimahmed24" target="_blank">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-700 hover:opacity-100 ">
                <BsLinkedin />
              </li>
            </a>
            <a href="https://github.com/saimahmed24" target="_blank">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100 ">
                <BsGithub />
              </li>
            </a>
            <a href="https://www.behance.net/saimahmedqazi24" target="_blank">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-300  hover:text-blue-600 hover:opacity-100 ">
                <BsBehance />
              </li>
            </a>
          </ul>
          <ul>
            <li><label className="flex flex-wrap  gap-2 items-center cursor-pointer">
              <span className="text-xs font-normal text-white ">Dark Mode</span>
              <input type="checkbox" value="" className="sr-only peer" checked={isDarkMode}
                onChange={toggleTheme} />
              <div className="relative w-9 h-5 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-500 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-red-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-500" ></div>

            </label></li>
          </ul>


        </div>
      )
      }

    </nav>
  )
}

export default Navbar
