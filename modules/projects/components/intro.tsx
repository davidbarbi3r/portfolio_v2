const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className='flex items-center'>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          Projects
        </h1>
      </div>
      <div>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Welcome to my portfolio's projects page! 
        </h4>
        <p className="text-center md:text-left md:pl-8">
          On this page, you will find an overview of all the projects that I have completed. These projects showcase my skills.
        </p>
        <p className="text-center md:text-left md:pl-8">
          Thank you for visiting!
        </p>
      </div>
    </section>
  )
}

export default Intro
