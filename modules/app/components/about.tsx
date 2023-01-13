import Link from "next/link";

function About() {
  return (
    <section className="relative container flex flex-col items-center justify-between w-full mx-auto my-6 md:my-16">
      <div className="px-5">
        <h2 className="text-xl font-main sm:text-3xl mb-3 text-center font-semibold mx-auto px-8 max-w-6xl">
          Je suis un développeur web freelance qui aime apporter des solutions
          et voir les idées devenir réalité.
          J'apporte un soin particulier à la conception et à l'expérience utilisateur.
        </h2>
        <div className="flex items-center flex-col md:flex-row w-[450px] m-auto justify-between">
          <div>
            <Link
              href="/projects"
              className="mt-5 mb-5 md:mb-0 text-center p-3 text-slate-100 block hover:text-zinc-800 bg-[#122530] dark:hover:bg-slate-100 transition-all duration-200 hover:bg-slate-100 border-zinc-800 border w-[140px]"
            >
              <p className="text-center font-bold">Projets</p>
            </Link>
          </div>
          <div className="h-[1px] bg-slate-800 dark:bg-white w-[100px] sm:hidden"></div>

          <div>
            <Link
              href="/blog"
              className="mt-5 text-center p-3 text-slate-100 hover:text-zinc-800 bg-[#122530] dark:hover:bg-slate-100 transition-all duration-200 hover:bg-slate-100 block border-zinc-800 border w-[140px]"
            >
              <p className="text-center font-bold ">Articles</p>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
