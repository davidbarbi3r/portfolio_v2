import Image from "next/image"
import Link from "next/link"

function About() {
  return (
    <section className="relative container flex flex-col md:flex-row items-center justify-between w-full mx-auto my-6 md:my-16">
        <div className="bg-zinc-800 h-[50vh] w-[800px] md:w-[40%] md:bottom-[-10px] lg:bottom-[-40px] xl:w-[25%] absolute bottom-[-40px] right-[-30px] -z-10"></div>
        <div className="md:max-w-[50%] px-5">
            <h2 className="text-2xl sm:text-3xl mb-3 font-semibold text-center mx-auto px-8">
                About me
            </h2>

            <p className="text-center">
            I am a tech and finance enthusiast with a background in financial audit. After spending nine years in the industry, I decided to expand my skillset to include software development.
            </p>
            <p className="mt-5 text-center">
            As a freelance developer, I am always on the lookout for new opportunities to showcase my skills.
            </p>
            <p className="mt-5 text-center">
            I believe that combining diverse skillsets is a powerful way to create value, and I am using my knowledge of finance and development to develop solutions that are useful for end users. 
            </p>    
            <p className="mt-5 text-center">
            My long-term goal is to specialize in blockchain development, as this is a rapidly growing and impactful technology. Thank you for considering me for your project or opportunity.
            </p>
            <div className="flex w-full justify-center">
                <Link href="/blog" className="mt-5 text-center p-3 text-slate-100 hover:text-zinc-800 bg-zinc-800 hover:bg-zinc-100 block border-zinc-800 border">
                    <p className="text-center font-bold ">Come read my articles</p>
                </Link>
            </div>
                <p className="mt-5 text-center">or</p>
            <div className="flex w-full justify-center">
                <Link href="/projects" className="mt-5 text-center p-3 text-slate-100 block hover:text-zinc-800 bg-zinc-800 hover:bg-zinc-100 border-zinc-800 border">
                    <p className="text-center font-bold">Discover my lasts projects</p>
                </Link>
            </div>
        </div>
        <div>
            <Image
                src="/assets/cottonbro.jpg"
                alt="Cottonbro"
                width={500}
                height={800}
                className="object-cover px-5 mt-6"
            />
        </div>
    </section>
  )
}

export default About