import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <>
      <h1 className="mt-2 md:mb-[-2rem] mb-2 text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left 2xl:max-w-[50%] xl:max-w-[75%]">
        {children}
      </h1>
    </>
  )
}

export default PostTitle
