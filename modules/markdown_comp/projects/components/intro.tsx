const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-16 md:mb-12">
      <div className='flex items-center'>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          Projets
        </h1>
      </div>
      <div>
        <h4 className="text-center md:text-left text-xl mt-5 md:pl-8">
          Bienvenue sur la page projets du portfolio! 
        </h4>
        <p className="text-center md:text-left md:pl-8">
          Sur cette page du trouveras les projets que j'ai réalisé avec amour. 
        </p>
        <p className="text-center md:text-left md:pl-8">
          Mes fidèles alliés pour réaliser les projets sont:
        </p>
        <p className="text-center md:text-left md:pl-8 ml-2">
          - <strong>Next.js et React.js</strong> pour le front-end,
        </p> 
        <p className="text-center md:text-left md:pl-8 ml-2">
          - <strong>Node.js</strong> pour le back-end,
        </p>
      </div>
    </section>
  )
}

export default Intro
