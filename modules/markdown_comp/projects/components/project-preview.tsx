import DateFormatter from "../../../app/utils/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Project from "../interfaces/project";
import getReadingTime from "../../utils/getAverageTime";

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  techs,
  slug,
  content
}: Project) => {
  const readingTime = getReadingTime(content);

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          className="hover:underline font-main"
        >
          {title}
        </Link>
      </h3>
      <div className="mt-[-10px] mb-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="text-xs md:text-sm mr-2 text-slate-800 bg-slate-200 py-1 px-2 rounded-lg font-bold shadow-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} /> • 
        <span className="ml-1 italic text-sm">{readingTime} min lecture</span>
      </div>
    </div>
  );
};

export default ProjectPreview;
