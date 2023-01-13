import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mt-2 mb-[-2rem] text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
