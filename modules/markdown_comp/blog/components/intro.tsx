const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className='flex items-center'>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog 
        </h1>
      </div>
      <div>
        <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
          You can find here all the latest news about Gnark, learnings and discovery.
        </h2>
        <p className="text-center md:text-left md:pl-8">
        I am always exploring new technologies and techniques, and I enjoy sharing my insights and experiences with others. 
        </p>
      </div>
    </section>
  )
}

export default Intro
