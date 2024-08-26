import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function App() {
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="overflow-x-hidden text-neutral-600 antialiased
     selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="light:bg-neutral-200 dark:bg-neutral-900">
        <span className="flex flex-shrink-0 items-center justify-end px-5">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="flex mr-2 mt-2 justify-center items-center dark:bg-white dark:text-black bg-black text-white px-2 py-2 border-2 border-slate-500 dark:border-black-500 rounded-full shadow
             hover:bg-stone-700 dark:hover:bg-gray-300 font-semibold"
          >
            Theme :
            <span className="ml-2 mr-1"> {darkMode ? <IoSunny /> : <IoMoon />} </span>
          </button>
        </span>

        {/* <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,19,90,0.93),rgba(20,15,21,0.8))]"></div>
      </div> */}
        <div className="container mx-auto px-8 dark:bg-neutral-900">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  );
};


