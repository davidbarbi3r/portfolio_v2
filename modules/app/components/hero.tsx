import Image from "next/image";
import davidCafe from "../../../public/assets/david-cafe-light.svg";
import davidCafeEye from "../../../public/assets/david-cafe-eye.svg";
import userInterfaceIcon from "../../../public/assets/user-interface-icon.svg";
import { FormattedMessage } from "react-intl";

function Hero() {
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
          <Image
              src={userInterfaceIcon}
              alt="An UI icon"
              className="absolute bottom-0 -left-[5em] lg:-left-2 -rotate-12 hidden xl:block"
              height={150}
              width={150}
              priority
          />
        </div>
        <div className="relative h-[60vh] w-1/2 md:h-[90vh]">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
