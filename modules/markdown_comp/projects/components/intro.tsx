import { FormattedMessage } from "react-intl";

const Intro = () => {
  return (
    <section className="flex-col flex items-baseline md:justify-between mt-16 mb-16 md:mb-12">
      <div className='flex items-center'>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        <FormattedMessage id="index.about.projects" defaultMessage="Projects"></FormattedMessage>
        </h1>
      </div>
      <div>
        <h4 className="text-center md:text-left text-xl mt-5">
          <FormattedMessage id="projects.intro.welcome1" defaultMessage="Welcome on this portfolio projects page!"></FormattedMessage>
        </h4>
        <p className="text-center md:text-left">
          <FormattedMessage id="projects.intro.welcome2" defaultMessage="You'll find on this page projects made with love"></FormattedMessage>
        </p>
        <p className="text-center md:text-left">
        <FormattedMessage id="projects.intro.welcome3" defaultMessage="My faithful ally to carry on projects is: "></FormattedMessage>
        </p>
        <p className="text-center md:text-left ml-2">
          - <strong>Typescript</strong>
        </p> 
      </div>
    </section>
  )
}

export default Intro
