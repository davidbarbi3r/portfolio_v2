const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-16 md:mb-12">
      <div className='flex items-center'>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog 
        </h1>
      </div>
      <div>
        <h2 className="text-center md:text-left text-xl mt-5 md:pl-8">
          Tu trouveras ici tous mes articles, apprentissages et découvertes.
        </h2>
        <p className="text-center md:text-left md:pl-8">
        J'explore toujours de nouvelles technologies et pratiques, 
        </p>
        <p className="text-center md:text-left md:pl-8">
        et apprécie partager et échanger avec d'autres développeurs. 
        </p>
      </div>
    </section>
  )
}

export default Intro
