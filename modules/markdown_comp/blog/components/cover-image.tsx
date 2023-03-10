import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
  tags?: string[]
}

const CoverImage = ({ title, src, slug, tags }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full max-h-[700px] object-cover', {
        'hover:shadow-lg transition-all duration-200 hover:scale-105': slug,
      })}
      width={1300}
      height={630}
      priority
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
      <div className='relative overflow-hidden'>
        <Link as={`/blog/${slug}`} href="/blog/[slug]" aria-label={title}>
          {image}
        </Link>
        <div className='absolute bottom-2 flex flex-wrap px-3 py-1 rounded-lg w-full font-bold'>
          {tags?.map((tag) => (
              <p key={tag} className="text-xs md:text-sm text-gray-600 bg-slate-50 spanx-3 py-1 px-2 rounded-lg mr-2 shadow-md">
                {tag}
              </p>
          ))}
        </div>
      </div>

      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
