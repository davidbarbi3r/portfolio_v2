import Link from "next/link";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import ThemeSwitch from "./ThemeSwitch";
import {useTheme} from "next-themes";
import LangSwitch from "./LangSwitch";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <header className="dark:bg-[#01375b] transition-all duration-300 p-3">
      <div className="py-3 flex justify-between container mx-auto px-5">
        <Link href="/" className="flex">
          <div className="flex self-center">
            <h1 className="text-2xl sm:text-3xl font-main">David Barbier</h1>
          </div>
        </Link>
        <nav className="flex">
          <div className="flex items-baseline">
            <div className="hidden sm:block">
              <ul className="flex font-main items-baseline">
                <Link href="/" className="p-2 py-4 text-xl hover:text-[#85b5d2]">
                  <li className="text-center"><FormattedMessage id="index.navbar.div1" defaultMessage="Home" key="index.navbar.div1"></FormattedMessage></li>
                </Link>
                <Link href="/projects" className="p-2 py-4 text-xl hover:text-[#85b5d2]">
                  <li className="text-center"><FormattedMessage id="index.navbar.div2" defaultMessage="Projects" key="index.navbar.div2"></FormattedMessage></li>
                </Link>
                <Link href="/blog" className="p-2 py-4 text-xl hover:text-[#85b5d2]">
                  <li className="text-center"><FormattedMessage id="index.navbar.div3" defaultMessage="Blog"></FormattedMessage></li>
                </Link>
                <LangSwitch/>
              </ul>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(prev => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <div className="w-5/6 border-b-2 mx-auto"></div>

      {isOpen && (
        <div
          className="sm:hidden min-w-full h-full fixed bg-white shadow-md z-20 left-0 top-0"
          id="mobile-menu"
        >
          <button className="absolute top-6 right-8 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"
                 onClick={() => setIsOpen(prev => !prev)} stroke={theme == "dark" ? "white" : "black"}
            >
              <mask id="mask0_109_7" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_109_7)">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#848484"/>
              </g>
            </svg>
          </button>
          <div className="px-2 pt-2 pb-3 space-y-8 h-full flex flex-col items-center justify-center text-left text-3xl font-main font-bold w-full">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700"
            >
              <FormattedMessage id="index.navbar.div1" defaultMessage="Home" key="index.navbar.div1"></FormattedMessage>
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700"
            >
              <FormattedMessage id="index.navbar.div2" defaultMessage="Projects" key="index.navbar.div2"></FormattedMessage>
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700"
            >
              <FormattedMessage id="index.navbar.div3" defaultMessage="Blog"></FormattedMessage>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
