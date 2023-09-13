import Image from "next/image";
import davidCafe from "../../../public/assets/david-cafe-light.svg";
import davidCafeEye from "../../../public/assets/david-cafe-eye.svg";
import { FormattedMessage } from "react-intl";
import {useState} from "react";

function Hero() {
  const [isImage1Visible, setImage1Visible] = useState(true);

  const toggleImage = () => {
    setImage1Visible(!isImage1Visible);
  };

  return (
    <section className="overflow-hidden flex flex-col items-center justify-center">
      <div className="flex font-main items-center justify-center xl:ml-8">
        <div className="h-fit relative w-3/5 ml-5 lg:ml-8 flex-grow">
          <h2 className="dark:text-slate-100 sm:text-center text-3xl md:text-7xl lg:text-8xl h-2/5 leading-[0.85em]">
            <FormattedMessage id="index.hero.title" defaultMessage="Passionate Fullstack developer"></FormattedMessage>
          </h2>
          <p className="sm:text-center text-xl mt-3">
            <FormattedMessage id="index.hero.subtitle1" defaultMessage="All start with an idea"></FormattedMessage>
          </p>
          <p className="sm:text-center text-xl">
            <FormattedMessage id="index.hero.subtitle2" defaultMessage="I can help you making your idea live."></FormattedMessage>
          </p>
          <div className="flex flex-row justify-center mt-5">
            <a href="#_" className="relative inline-block text-lg group mr-4"
              onMouseEnter={toggleImage} onMouseLeave={toggleImage}
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-main-text transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-main-text group-hover:-rotate-180 ease"></span>
              <span className="relative"><FormattedMessage id="index.navbar.div2" defaultMessage="Projects" key="index.navbar.div2"></FormattedMessage></span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-main-text rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            <a href="#_" className="relative inline-block text-lg group"
               onMouseEnter={toggleImage} onMouseLeave={toggleImage}
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-main-text">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-main-text"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-50 group-hover:-rotate-180 ease"></span>
              <span className="relative">Contact</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-main-text rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
          </div>

        </div>
        <div className="relative h-[60vh] w-1/2 md:h-[90vh]">
          {isImage1Visible ? (
              <>
                <Image
                    src={davidCafe}
                    alt="A digital illustration of David Barbier"
                    className="overflow-visible absolute -right-10 object-cover md:object-fill h-[60vh] md:h-[90vh] text-main-text hover:opacity-0"
                    sizes="95vh, (min-width: 768px) 80vh, (min-width: 1024px) 60vh, (min-width: 1280px) 40vh"
                    priority
                />
                <Image
                    src={davidCafeEye}
                    alt="A digital illustration of David Barbier"
                    className="overflow-visible absolute -right-10 object-cover md:object-fill h-[60vh] md:h-[90vh] text-main-text opacity-0 hover:opacity-100"
                    sizes="95vh, (min-width: 768px) 80vh, (min-width: 1024px) 60vh, (min-width: 1280px) 40vh"
                />
              </>
          ) : (
            <Image
                src={davidCafeEye}
                alt="A digital illustration of David Barbier"
                className="overflow-visible absolute -right-10 object-cover md:object-fill h-[60vh] md:h-[90vh] text-main-text hover:opacity-100"
                sizes="95vh, (min-width: 768px) 80vh, (min-width: 1024px) 60vh, (min-width: 1280px) 40vh"
            />)
          }
        </div>
      </div>
    </section>
  );
}

export default Hero;
