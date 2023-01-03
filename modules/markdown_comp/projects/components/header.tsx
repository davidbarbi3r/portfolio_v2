import Link from 'next/link'

interface Props {
  type: string
}

const Header = ({type}: Props) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href={type === "blog" ? "/blog" : "/projects"} className="hover:underline">
        {type === "blog" ? "Blog 🖊" : "Projects 🛠"}
      </Link>
    </h2>
  )
}

export default Header
