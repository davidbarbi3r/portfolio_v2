import DateFormatter from "../../../app/utils/date-formatter";
import CoverImage from "../components/cover-image";
import ProjectTitle from "./project-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  techs?: string[];
};

const ProjectHeader = ({ title, coverImage, date, techs }: Props) => {
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
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;