import Image from "next/image";
import mountain from "../../../public/assets/15022022.jpg";
import { FormattedMessage } from "react-intl";

function Hero() {
  return (
    <section className="overflow-hidden flex items-center justify-center">
      <div className="relative w-[95%] sm:w-[80%] md:w-[60%] xl:w-[40%]">
        <Image
          src={mountain}
          alt="Alps mountain"
          className="object-cover"
          sizes="95vw, (min-width: 768px) 80vw, (min-width: 1024px) 60vw, (min-width: 1280px) 40vw"
          priority
        />
        <div className="absolute top-[15%] left-8 sm:left-[-10%] flex flex-col items-left sm:items-center sm:w-[120%] font-main">
          <h2 className="sm:text-main-text text-white sm:whitespace-nowrap text-4xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl sm:text-center
           dark:text-slate-100">
            <FormattedMessage id="index.hero.title" defaultMessage="Fullstack developer"></FormattedMessage>
          </h2>
        </div>
        <p className="text-center text-xl mt-3">
        <FormattedMessage id="index.hero.subtitle1" defaultMessage="All start with an idea"></FormattedMessage>       
        </p>
        <p className="text-center text-xl">
        <FormattedMessage id="index.hero.subtitle2" defaultMessage="I can help you making your idea live."></FormattedMessage>
        </p>
        <p>
        <FormattedMessage id="index.hero.subtitle3" defaultMessage=""></FormattedMessage>
        </p>
      </div>
    </section>
  );
}

export default Hero;
