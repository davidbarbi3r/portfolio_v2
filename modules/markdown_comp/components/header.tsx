import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  type: string
}

const Header = ({type}: Props) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-0 mt-8">
      <Link href={type === "blog" ? "/blog" : "/projects"} className="hover:underline">
        <ArrowBackIcon className="mr-2" />
        {type === "blog" ? "Blog" : "Projects"}
      </Link>
    </h2>
  )
}

export default Header
