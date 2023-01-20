import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import gsap from "gsap";
import { FormattedMessage } from "react-intl";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = ({currentTarget}) => {
    gsap.to(currentTarget, {scale: 1.1, duration: 0.2})};

  const onClose = ({currentTarget}) => {
    gsap.to(currentTarget, {scale: 0, duration: 0.2})};

  return (
    <header className="dark:bg-[#01375b] transition-all duration-300 p-3">
      <div className="py-3 flex justify-between items-baseline container mx-auto px-5 border-">
        <Link href="/">
          <div className="flex items-baseline">
            {/* <Image
                        className='rounded-full md:object-cover max-w-[60px] max-h-[60px] object-contain mr-3'
                        src="/assets/blog/authors/gnark.jpg"
                        alt='Gnark Logo'
                        width={100}
                        height={100}
                    /> */}
            <h1 className="text-3xl font-main">David Barbier</h1>
          </div>
        </Link>
        <nav className="flex">
          <div className="flex items-baseline">
            <div className="hidden sm:block">
              <ul className="flex font-main items-baseline">
                <a href="/" className="p-2 py-4">
                  <li className="text-center"><FormattedMessage id="index.navbar.div1" defaultMessage="Home" key="index.navbar.div1"></FormattedMessage></li>
                </a>
                <a href="/projects" className="p-2 py-4">
                  <li className="text-center"><FormattedMessage id="index.navbar.div2" defaultMessage="Projects" key="index.navbar.div2"></FormattedMessage></li>
                </a>
                <a href="/blog" className="p-2 py-4">
                  <li className="text-center"><FormattedMessage id="index.navbar.div3" defaultMessage="Blog"></FormattedMessage></li>
                </a>
              </ul>
            </div>
            <ThemeSwitch />
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

      {isOpen && (
        <div
          className="sm:hidden min-w-full h-full fixed bg-white shadow-md z-10 left-0 top-0"
          id="mobile-menu"
        >
          <CloseIcon
            className="absolute top-8 right-8 text-3xl hover:cursor-pointer hover:bg-gray-700 rounded-md hover:text-white"
            onClick={() => setIsOpen(prev => !prev)}
          />
          <div className="px-2 pt-2 pb-3 space-y-8 h-full flex flex-col items-center justify-center text-left text-3xl font-main font-bold w-full">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700"
            >
              Accueil
            </a>
            <a
              href="/projects"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700"
            >
              Projets
            </a>
            <a
              href="/blog"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
