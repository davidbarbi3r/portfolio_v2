import Project from "../../markdown_comp/projects/interfaces/project";
import PostType from "../../markdown_comp/blog/interfaces/post";
import Image from "next/image";
import DateFormatter from "../utils/date-formatter";
import Link from "next/link";
import getReadingTime from "../../markdown_comp/utils/getAverageTime";
import { FormattedMessage } from "react-intl";

type Props = {
  lastProject: Project;
  lastPost: PostType;
};

function lastOnes({ lastProject, lastPost }: Props) {
  const projectReadingTime = getReadingTime(lastProject.content);
  const postReadingTime = getReadingTime(lastPost.content);

  return (
    <section className="mt-8 bg-[#dee7eb] dark:bg-[#001828] pb-2">
      <div className="container flex flex-col mx-auto md:flex-row justify-between my-8">
        <div className="flex flex-col w-full md:w-1/2 px-4">
          <h2 className="my-8 text-2xl md:text-3xl font-bold tracking-tighter leading-tight text-center">
            <FormattedMessage id="index.last.project" defaultMessage="Last Project"></FormattedMessage>
          </h2>
            <div className="group">
              <div className="overflow-hidden">
                <Link as={`/projects/${lastProject.slug}`} href="/projects/[slug]">
                  <Image
                    src={lastProject.coverImage}
                    alt={lastProject.title}
                    width={500}
                    height={500}
                    className="shadow-sm w-full group-hover:scale-105 hover:shadow-lg transition group-hover:cursor-pointer"
                  />
                </Link>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h3 className="mb-0 text-xl lg:text-2xl leading-tight mt-4">
                    <a
                      href={`/projects/${lastProject.slug}`}
                      className="group-hover:underline"
                    >
                      {lastProject.title}
                    </a>
                  </h3>
                  <div className="mb-4 text-lg">
                    <DateFormatter dateString={lastProject.date} /> • 
                    <span className="ml-1 italic text-sm">{projectReadingTime} min read</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 px-4">
          <h2 className="my-8 text-2xl md:text-3xl font-bold tracking-tighter leading-tight text-center">
            <FormattedMessage id="index.last.blog" defaultMessage="Last post"></FormattedMessage>
          </h2>
          <div className="group">
            <div className="overflow-hidden">
              <Link as={`/blog/posts/${lastPost.slug}`} href="/blog/posts/[slug]">
                <Image
                  src={lastPost.coverImage}
                  alt={lastPost.title}
                  width={500}
                  height={500}
                  className="shadow-sm w-full group-hover:scale-105 transition duration-300 ease-in-out group-hover:cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h3 className="mb-0 text-xl lg:text-2xl leading-tight mt-4">
                  <a
                    href={`/blog/posts/${lastPost.slug}`}
                    className="group-hover:underline"
                  >
                    {lastPost.title}
                  </a>
                </h3>
                <div className="mb-4 text-lg">
                  <DateFormatter dateString={lastPost.date} /> • 
                  <span className="ml-1 italic text-sm">{postReadingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default lastOnes;
