import Avatar from "../../utils/avatar";
import DateFormatter from "../../../app/utils/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import PostType from "../interfaces/post";
import getReadingTime from "../../utils/getAverageTime";

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  themes,
  content,
}: PostType) => {
  const readingTime = getReadingTime(content);
  
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} tags={themes} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/blog/${slug}`}
              href="/blog/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} /> • 
          <span className="ml-1 italic text-sm">{readingTime} min lecture</span>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
