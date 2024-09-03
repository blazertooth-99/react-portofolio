import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Projects";
import Contact from "./components/Contact";
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
      <div className="bg-gray-400 dark:bg-neutral-800">
        <div className="container mx-auto px-8 bg-slate-200 dark:bg-neutral-900 rounded-2xl">
        <span className="flex flex-shrink-0 items-center justify-end px-5">
          <label className="grid cursor-pointer place-items-center">
            <input onClick={() => {
              setDarkMode(!darkMode);
            }}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          </span>
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
}
