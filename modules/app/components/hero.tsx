import Image from "next/image";
import mountain from "../../../public/assets/15022022.jpg";

function Hero() {
  return (
    <section className="overflow-hidden flex items-center justify-center">
      <div className="relative w-[85%] sm:w-[80%] md:w-[60%] xl:w-[40%]">
        <Image
          src={mountain}
          alt="Fougere palm"
          className="object-cover"
          priority
        />
        <div className="absolute top-[15%] left-8 sm:left-[-10%] flex flex-col items-left sm:items-center sm:w-[120%] font-main">
          <h2 className="sm:text-[#313d41] text-white sm:whitespace-nowrap text-4xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl sm:text-center
           dark:text-slate-100">
            Développeur passionné
          </h2>
        </div>
        <p className="text-center text-xl mt-3">
          Tout commence par une idée,
        </p>
        <p className="text-center text-xl">
          je peux vous aider à lui faire prendre vie.
        </p>
      </div>
    </section>
  );
}

export default Hero;
