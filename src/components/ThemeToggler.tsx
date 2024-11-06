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
      className="relative flex items-center justify-between w-16 h-8  bg-gray-300 rounded-full dark:bg-gray-700 transition-colors duration-300 ease-in-out"
    >
      <span
        className={`${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        } w-8 h-8 bg-white rounded-full absolute transition-transform duration-100 ease-in-out`}
      >
        <div className="absolute w-full h-full flex justify-center items-center">
          <svg
            className={`absolute w-6 h-6 text-white transition-all duration-150 ease-in-out ${
              isDarkMode
                ? "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
              fill="#1C274C"
            />
          </svg>

          <svg
            className={`absolute w-6 h-6 text-black transition-all duration-100 ease-in-out ${
              isDarkMode
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="3.5"
              stroke="#222222"
            />
            <path
              d="M12 5V3"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M12 21V19"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M16.9498 7.04996L18.364 5.63574"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M5.63608 18.3644L7.05029 16.9502"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M19 12L21 12"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M3 12L5 12"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M16.9498 16.95L18.364 18.3643"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M5.63608 5.63559L7.05029 7.0498"
              stroke="#222222"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </span>
    </button>
  );
};

export default ThemeToggle;
