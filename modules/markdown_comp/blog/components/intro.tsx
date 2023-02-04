import { FormattedMessage } from "react-intl";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog
        </h1>
      </div>
      <div>
        <h2 className="text-center md:text-left text-xl mt-5 md:pl-8">
          <FormattedMessage
            id="blog.intro.welcome1"
            defaultMessage="Welcome on this portfolio projects page!"
          ></FormattedMessage>
        </h2>
        <p className="text-center md:text-left md:pl-8">
          <FormattedMessage
            id="blog.intro.welcome2"
            defaultMessage="Welcome on this portfolio projects page!"
          ></FormattedMessage>
        </p>
        <p className="text-center md:text-left md:pl-8">
          <FormattedMessage
            id="blog.intro.welcome3"
            defaultMessage="Welcome on this portfolio projects page!"
          ></FormattedMessage>
        </p>
      </div>
    </section>
  );
};

export default Intro;
