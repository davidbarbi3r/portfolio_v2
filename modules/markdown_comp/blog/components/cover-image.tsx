import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-all duration-200 hover:scale-105': slug,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0 overflow-hidden">
      {slug ? (
        <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
