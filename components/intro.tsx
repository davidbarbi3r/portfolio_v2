const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className='flex items-center'>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog.
        </h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        You can find here all the latest news about Gnark, learnings and discovery.
      </h4>
    </section>
  )
}

export default Intro
