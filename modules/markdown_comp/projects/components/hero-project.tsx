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
    <section className="lg:flex">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} tags={techs} />
      </div>
      <div className="md:grid md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          className="hover:underline lg:hover:no-underline"
        >
          <div className="lg:ml-[-100px] lg:mt-4 md:p-4 lg:bg-slate-100 z-10 lg:opacity-60 max-w-fit">
            <h3 className="mb-4 text-4xl lg:text-5xl z-20">{title}</h3>
            <div className="mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} /> •
              <span className="ml-1 italic text-sm">
                {readingTime} min lecture
              </span>
            </div>
          </div>
        </Link>
        <div>
          <p className="text-lg leading-relaxed mb-4 md:ml-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroProject;
