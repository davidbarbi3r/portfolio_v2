import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mt-2 md:mb-[-2rem] mb-2 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
