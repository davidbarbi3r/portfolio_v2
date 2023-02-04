import DateFormatter from "../../../app/utils/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Project from "../interfaces/project";
import getReadingTime from "../../utils/getAverageTime";

const HeroProject = ({
  title,
  coverImage,
  date,
  excerpt,
  techs,
  slug,
  content,
}: Project) => {
  const readingTime = getReadingTime(content);

  return (
    <section className="lg:flex group">
      <div className="mb-8 md:mb-16 z-0">
        <CoverImage title={title} src={coverImage} slug={slug} tags={techs} />
      </div>
      <div className="md:grid md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 z-10">
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          className="group-hover:underline lg:hover:no-underline"
        >
          <div className="lg:ml-[-100px] lg:mt-4 xl:mt-20 md:p-4 lg:bg-slate-100 lg:bg-opacity-80 z-10 max-w-fit lg:shadow-sm lg:rounded-2xl dark:bg-sky-800 font-main">
            <h3 className="mb-4 text-4xl lg:text-5xl group-hover:underline">{title}</h3>
            <div className="mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} /> •
              <span className="ml-1 italic text-sm">
                {readingTime} min lecture
              </span>
            </div>
          </div>
        </Link>
        <div className="lg:max-w-lg">
          <p className="text-lg leading-relaxed mb-4 md:ml-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroProject;
