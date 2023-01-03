import Image from "next/image"
import heroPalm from "../../../public/assets/23062019.jpg"

function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[55vh] overflow-hidden drop-shadow-xl">
        <Image
            src={heroPalm}
            alt="Fougere palm"
            className="object-cover h-[80vh] sm:h-[55vh] mix-blend-darken"
            priority
        />
        <div className="absolute flex flex-col items-center justify-center h-full w-full bg-zinc-900 bg-opacity-20 text-white bottom-0 backdrop-blur-[2px]">
            <h2 className="text-2xl sm:text-3xl mb-3 font-semibold text-center mx-auto px-8">Hello</h2>
            <p className="text-lg sm:text-xl text-center mx-auto px-16">I'm a passionate developer based in Ajaccio, France.</p>
            <p className="hidden sm:block text-lg sm:text-xl md:max-w-[50%] mx-auto px-16 text-center">I am eager to take on any software development projects, whether they be front-end or back-end, local or remote. My passion for coding drives me to consistently deliver high-quality work</p>
        </div >
    </section>
  )
}

export default Hero