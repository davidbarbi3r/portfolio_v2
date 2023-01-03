import Project from "../../projects/interfaces/project";
import PostType from "../../blog/interfaces/post";
import Image from "next/image";
import DateFormatter from "../utils/date-formatter";
import Link from "next/link";

type Props = {
    lastProject: Project;
    lastPost: PostType;
}

function lastOnes({ lastProject, lastPost }: Props) {
  
  
  return (
    <section className="mt-8 bg-zinc-100">
      <div className="container flex flex-col mx-auto md:flex-row justify-between my-8">
        <div className="flex flex-col w-full md:w-1/2 px-4">
          <h2 className="my-8 text-2xl md:text-3xl font-bold tracking-tighter leading-tight text-center">
            My Last project
          </h2>
          <div className="overflow-hidden">
            <Link
              as={`/projects/${lastProject.slug}`}
              href="/projects/[slug]"
            >
              <Image 
                src={lastProject.coverImage}
                alt={lastProject.title}
                width={500}
                height={500}
                className="shadow-sm w-full hover:scale-105 hover:shadow-lg transition hover:cursor-pointer"
                />
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
            <h3 className="mb-0 text-xl lg:text-2xl leading-tight mt-4">
                <a
                  href={`/projects/${lastProject.slug}`}
                  className="hover:underline"
                >
                  {lastProject.title}
                </a>
              </h3>
              <div className="mb-4 text-lg">
                <DateFormatter dateString={lastProject.date}/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 px-4">
          <h2 className="my-8 text-2xl md:text-3xl font-bold tracking-tighter leading-tight text-center">
            My Last Article
          </h2>
          <div className="overflow-hidden">
            <Link
              as={`/blog/posts/${lastPost.slug}`}
              href="/blog/posts/[slug]">
                <Image 
                  src={lastPost.coverImage}
                  alt={lastPost.title}
                  width={500}
                  height={500}
                  className="shadow-sm w-full hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer"
                />
              </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h3 className="mb-0 text-xl lg:text-2xl leading-tight mt-4">
                <a
                  href={`/blog/posts/${lastPost.slug}`}
                  className="hover:underline"
                >
                  {lastPost.title}
                </a>
              </h3>
              <div className="mb-4 text-lg">
                <DateFormatter dateString={lastPost.date}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default lastOnes