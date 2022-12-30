import Image from "next/image"
import Link from "next/link"

function About() {
  return (
    <section className="container flex flex-col md:flex-row items-center justify-between w-full mx-auto my-6 md:my-16">
        <div className="md:max-w-[50%] px-5">
            <h2 className="text-2xl sm:text-3xl mb-3 font-semibold text-center mx-auto px-8">
                About me
            </h2>

            <p className="text-center">
                Tech and finance passionate, after having worked for 9 years in financial audit, I decided to evolve and add software development to my skills.
            </p>
            <p className="mt-5 text-center">
                I'm now working as a freelance developer and I'm looking for new opportunities.
            </p>
            <p className="mt-5 text-center">
                I'm convinced that one of the best way to create value is to merge different skillsets, in my case: <strong className="block">finance and developement</strong>
            </p>    
            <p className="mt-5 text-center">
                I'm using my knowledge of processes & needs to develop useful solutions for end users. My goal is to evolve into blockchain development which is a powerful and fast-growing technology.
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