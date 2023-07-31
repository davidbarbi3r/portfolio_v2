import Link from 'next/link'

interface Props {
  type: string
}

const Header = ({type}: Props) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-0 mt-8">
      <Link href={type === "blog" ? "/blog" : "/projects"} className="hover:underline">
      <svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" className="ionicon inline" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
        {type === "blog" ? "Blog" : "Projects"}
      </Link>
    </h2>
  )
}

export default Header
