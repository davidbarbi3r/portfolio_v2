import DateFormatter from "../../../app/utils/date-formatter";
import getReadingTime from "../../utils/getAverageTime";
import CoverImage from "../components/cover-image";
import ProjectTitle from "./project-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  techs?: string[];
  content: string;
};

const ProjectHeader = ({ title, coverImage, date, techs, content }: Props) => {
  const readingTime = getReadingTime(content)
  
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <div className="hidden md:block md:mb-12"></div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} tags={techs} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6"></div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} /> • 
          <span className="ml-1 italic text-sm">{readingTime} min read</span>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
