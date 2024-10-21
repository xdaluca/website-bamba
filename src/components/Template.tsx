"use client";

import { FC, ReactNode, useState } from "react";
import SelectMenu, { menu } from "./SelectMenu";
import Footer from "./Footer";
import Link from "next/link";

interface TemplateProps {
  children: ReactNode;
}
const Template: FC<TemplateProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed  top-0 z-50 w-full bg-white">
        <div className="px-3 py-4 lg:px-5 lg:pl-3 max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <a
                href="/"
                className="flex flex-row items-center justify-center space-x-1"
              >
                <svg
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0.90625H4.15011C8.31764 0.90625 11.6961 4.2847 11.6961 8.45223C11.6961 12.6137 8.32745 15.9884 4.16827 15.9982C8.32745 16.008 11.6961 19.3827 11.6961 23.5442C11.6961 27.7117 8.31764 31.0901 4.15011 31.0901H0V31.0898C3.20246 31.0487 5.78872 27.6861 5.78872 23.5442C5.78872 19.4022 3.20246 16.0396 0 15.9986V15.9982V15.9982V15.9978C3.20246 15.9568 5.78872 12.5942 5.78872 8.45224C5.78872 4.31025 3.20246 0.947703 0 0.906638V0.90625Z"
                    fill="#171717"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6884 8.45223C14.6884 12.5943 11.9515 15.9568 8.5625 15.9978V15.9982H13.3938C17.5613 15.9982 20.9398 12.6198 20.9398 8.45223C20.9398 4.2847 17.5613 0.90625 13.3938 0.90625H8.5625V0.906629C11.9515 0.947635 14.6884 4.31021 14.6884 8.45223ZM14.6884 23.5442C14.6884 27.6862 11.9515 31.0488 8.5625 31.0898V31.0902H13.3938C17.5613 31.0902 20.9398 27.7117 20.9398 23.5442C20.9398 19.3767 17.5613 15.9982 13.3938 15.9982H8.5625V15.9986C11.9515 16.0396 14.6884 19.4022 14.6884 23.5442Z"
                    fill="#171717"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.9326 8.45223C23.9326 12.5943 21.1957 15.9568 17.8066 15.9978V15.9982H22.6379C26.8055 15.9982 30.1839 12.6198 30.1839 8.45223C30.1839 4.2847 26.8055 0.90625 22.6379 0.90625H17.8066V0.906629C21.1957 0.947635 23.9326 4.31021 23.9326 8.45223ZM23.9326 23.5442C23.9326 27.6862 21.1957 31.0488 17.8066 31.0898V31.0902H22.6379C26.8055 31.0902 30.1839 27.7117 30.1839 23.5442C30.1839 19.3767 26.8055 15.9982 22.6379 15.9982H17.8066V15.9986C21.1957 16.0396 23.9326 19.4022 23.9326 23.5442Z"
                    fill="#171717"
                  />
                </svg>
                <svg
                  width="78"
                  height="22"
                  viewBox="0 0 78 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69.3651 11.618H66.3307C66.305 8.48077 68.6884 6.38281 72.2628 6.38281C75.8372 6.38281 77.9796 8.37791 77.9796 11.7466L78.0003 16.4233L77.9796 21.1006H74.8424V20.0011C73.7367 20.6954 72.4151 21.1006 71.0779 21.1006C67.9921 21.1006 65.9707 19.2811 65.9707 16.581C65.9707 13.9067 67.9765 12.158 71.448 11.7723L73.7366 11.5151C74.1995 11.4637 74.5595 11.4123 74.8167 11.3094C74.6367 9.97225 73.8652 9.3808 72.2195 9.3808C70.3423 9.3808 69.468 10.1008 69.3651 11.618ZM71.268 18.0725C73.4538 18.0725 74.7653 16.6839 74.8424 14.2409C73.8395 14.421 72.6566 14.5238 71.7566 14.601C69.9565 14.8324 69.1079 15.4753 69.1079 16.5553C69.1079 17.5582 69.8022 18.0725 71.268 18.0725Z"
                    fill="#171717"
                  />
                  <path
                    d="M57.732 21.1003C56.292 21.1003 54.9647 20.6437 53.8846 19.8208V21.1003H50.7988V0.894531H53.9361V7.52901C54.9647 6.78328 56.2663 6.38252 57.732 6.38252C61.7178 6.38252 64.4021 9.3805 64.4021 13.7263C64.4021 18.0722 61.7178 21.1003 57.732 21.1003ZM57.6133 18.0465C59.8505 18.0465 61.2391 16.4264 61.2391 13.7263C61.2391 11.0263 59.8505 9.3805 57.6133 9.3805C55.3761 9.3805 53.9618 11.0263 53.9618 13.7263C53.9618 16.4264 55.3504 18.0465 57.6133 18.0465Z"
                    fill="#171717"
                  />
                  <path
                    d="M33.0454 12.0037V21.1006H29.9082V6.38281H32.994V7.09216C33.7912 6.62929 34.7683 6.39785 35.7969 6.39785C37.4427 6.39785 38.9085 7.04073 39.8342 8.12076C40.8114 7.01501 42.2514 6.39785 43.9229 6.39785C47.1373 6.39785 49.2716 8.60935 49.2716 11.8494V21.1006H46.1858V12.0037C46.1858 10.3323 45.3115 9.3808 43.82 9.3808C42.2514 9.3808 41.1714 10.4865 41.1714 12.0294V21.1006H38.0599V11.978C38.0599 10.2808 37.2113 9.3808 35.6941 9.3808C34.0998 9.3808 33.0454 10.4608 33.0454 12.0037Z"
                    fill="#171717"
                  />
                  <path
                    d="M19.7692 11.6244H16.7437C16.7181 8.47429 19.0769 6.38281 22.6409 6.38281C26.2048 6.38281 28.3586 8.371 28.3586 11.7535V21.1006H25.2305V20.042C24.128 20.7391 22.846 21.1006 21.5127 21.1006C18.436 21.1006 16.3848 19.319 16.3848 16.6078C16.3848 13.9225 18.3847 12.1666 21.846 11.7793L24.128 11.5211C24.5895 11.4695 24.9485 11.4178 25.2049 11.3146C25.0254 9.97189 24.2562 9.37801 22.6152 9.37801C20.7435 9.37801 19.8718 10.101 19.7692 11.6244ZM21.6666 18.1054C23.846 18.1054 25.1536 16.7111 25.2305 14.2581C24.2305 14.4389 23.0511 14.5421 22.1537 14.6196C20.3589 14.852 19.5128 15.4975 19.5128 16.582C19.5128 17.589 20.2051 18.1054 21.6666 18.1054Z"
                    fill="#171717"
                  />
                  <path
                    d="M8.36359 21.1003H0.169922V0.894531H7.90125C11.9596 0.894531 14.4767 3.09309 14.4767 6.705C14.4767 8.32774 13.9117 9.76727 12.8842 10.8142C14.1428 11.835 14.862 13.4054 14.8877 15.2637C14.862 18.7709 12.2421 21.1003 8.36359 21.1003ZM7.97831 3.98298H3.35492V9.42702H7.97831C10.1616 9.42702 11.2661 8.51096 11.2661 6.705C11.2661 4.89904 10.1873 3.98298 7.97831 3.98298ZM8.44065 12.5155H3.35492V18.0119H8.44065C10.4955 18.0119 11.6 17.0696 11.677 15.2637C11.6 13.4577 10.5212 12.5155 8.44065 12.5155Z"
                    fill="#171717"
                  />
                </svg>
              </a>

              <SelectMenu />

              <div className="hidden md:flex flex-row items-center justify-center space-x-5">
                <div className="flex flex-row items-center justify-center space-x-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6128_2737)">
                      <path
                        d="M8.00065 14.6654C11.6825 14.6654 14.6673 11.6806 14.6673 7.9987C14.6673 4.3168 11.6825 1.33203 8.00065 1.33203C4.31875 1.33203 1.33398 4.3168 1.33398 7.9987C1.33398 11.6806 4.31875 14.6654 8.00065 14.6654Z"
                        stroke="#171717"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.33398 8H14.6673"
                        stroke="#171717"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.00065 1.33203C9.66817 3.1576 10.6158 5.52672 10.6673 7.9987C10.6158 10.4707 9.66817 12.8398 8.00065 14.6654C6.33313 12.8398 5.38548 10.4707 5.33398 7.9987C5.38548 5.52672 6.33313 3.1576 8.00065 1.33203Z"
                        stroke="#171717"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6128_2737">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>English</p>
                </div>
                <svg
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="80"
                    height="40"
                    rx="20"
                    fill="#171717"
                  />
                  <g clip-path="url(#clip0_5868_3558)">
                    <rect
                      x="44"
                      y="4"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M60 11C58.8134 12.1949 58.1488 13.8114 58.1518 15.4954C58.1547 17.1794 58.825 18.7935 60.0157 19.9843C61.2065 21.175 62.8206 21.8453 64.5046 21.8482C66.1886 21.8512 67.8051 21.1866 69 20C69 21.78 68.4722 23.5201 67.4832 25.0001C66.4943 26.4802 65.0887 27.6337 63.4442 28.3149C61.7996 28.9961 59.99 29.1743 58.2442 28.8271C56.4984 28.4798 54.8947 27.6226 53.636 26.364C52.3774 25.1053 51.5202 23.5016 51.1729 21.7558C50.8257 20.01 51.0039 18.2004 51.6851 16.5558C52.3663 14.9113 53.5198 13.5057 54.9999 12.5168C56.4799 11.5278 58.22 11 60 11Z"
                      stroke="#222222"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5868_3558">
                      <rect
                        x="44"
                        y="4"
                        width="32"
                        height="32"
                        rx="16"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center rounded-lg font-semibold p-2 text-sm md:hidden"
              >
                {!isSidebarOpen ? (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12.0938H20"
                      stroke="#171717"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 6.09375H20"
                      stroke="#171717"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 18.0938H20"
                      stroke="#171717"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 8L8 24"
                      stroke="#171717"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 8L24 24"
                      stroke="#171717"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed right-0 top-0 z-40 h-screen w-full bg-white pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-6 gap-6 flex flex-col ">
          {menu.map((item) => (
            <Link
              key={item.name}
              className="block rounded-full px-4 py-2 hover:bg-azure text-dim-gray text-center"
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>

      <div className="relative">
        <div className="mt-14 min-h-screen pt-5">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Template;
