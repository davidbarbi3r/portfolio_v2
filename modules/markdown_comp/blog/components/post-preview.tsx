import Avatar from "../../utils/avatar";
import DateFormatter from "../../../app/utils/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import getReadingTime from "../../utils/getAverageTime";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  themes?: string[];
  content: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  themes,
  content
}: Props) => {
  const readingTime = getReadingTime(content);

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/blog/posts/${slug}`}
          href="/blog/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mt-[-10px] mb-2">
        {themes.map((theme) => (
          <span
            key={theme}
            className="text-xs md:text-sm mr-2 text-slate-800 bg-slate-200 py-1 px-2 rounded-lg font-bold shadow-md"
          >
            {theme}
          </span>
        ))}
      </div>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} /> • 
          <span className="ml-1 italic text-sm">{readingTime} min read</span>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
