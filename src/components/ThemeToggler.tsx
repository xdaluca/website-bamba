import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDarkMode ? "light" : "dark");
    root.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 bg-gray-300 rounded-full dark:bg-gray-700 transition-colors duration-300 ease-in-out"
    >
      <span
        className={`${
          isDarkMode ? "translate-x-8 " : "translate-x-0 "
        } w-8 h-8 rounded-full transition-transform duration-300 ease-in-out`}
      />
      <svg
        className={`absolute w-6 h-6 transition-colors duration-300 ease-in-out ${
          isDarkMode ? "text-white right-1" : "text-black left-1"
        }`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_6312_1069)">
          <rect
            width="32"
            height="32"
            rx="16"
            fill="currentColor"
          />
          <path
            d="M16 7C14.8134 8.19491 14.1488 9.81141 14.1518 11.4954C14.1547 13.1794 14.825 14.7935 16.0157 15.9843C17.2065 17.175 18.8206 17.8453 20.5046 17.8482C22.1886 17.8512 23.8051 17.1866 25 16C25 17.78 24.4722 19.5201 23.4832 21.0001C22.4943 22.4802 21.0887 23.6337 19.4442 24.3149C17.7996 24.9961 15.99 25.1743 14.2442 24.8271C12.4984 24.4798 10.8947 23.6226 9.63604 22.364C8.37737 21.1053 7.5202 19.5016 7.17294 17.7558C6.82567 16.01 7.0039 14.2004 7.68509 12.5558C8.36628 10.9113 9.51983 9.50571 10.9999 8.51677C12.4799 7.52784 14.22 7 16 7Z"
            stroke="#222222"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-current text-white"
          />
        </g>
        <defs>
          <clipPath id="clip0_6312_1069">
            <rect
              width="32"
              height="32"
              rx="16"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default ThemeToggle;
