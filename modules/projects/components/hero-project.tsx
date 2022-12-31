import DateFormatter from "../../app/utils/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Project from "../interfaces/project";

const HeroProject = ({
  title,
  coverImage,
  date,
  excerpt,
  techs,
  slug,
}: Project) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} techs={techs}/>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/projects/${slug}`}
              href="/projects/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroProject;
