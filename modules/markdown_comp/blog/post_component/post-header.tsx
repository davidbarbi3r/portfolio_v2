import Avatar from "../../utils/avatar";
import DateFormatter from "../../../app/utils/date-formatter";
import CoverImage from "../../projects/components/cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import getReadingTime from "../../utils/getAverageTime";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  tags?: string[];
  content: string;
};

const PostHeader = ({ title, coverImage, date, author, tags, content }: Props) => {
  const readingTime = getReadingTime(content);
  
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} tags={tags} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} /> • 
          <span className="ml-1 italic text-sm">{readingTime} min read</span>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
