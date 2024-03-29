import Link from "next/link";
import { FormattedMessage } from "react-intl";

function About() {
  return (
    <section className="container flex flex-col items-center justify-between w-full mx-auto my-6 md:my-16">
      <div className="px-5">
        <h2 className="text-xl font-main sm:text-3xl mb-3 text-center font-semibold mx-auto max-w-6xl">
          <FormattedMessage id="index.about.presentation" defaultMessage={"I'm a freelance web developer that loves provide solutions and see ideas become real. I care a lot about conception and user experience."}></FormattedMessage>
        </h2>
      </div>
    </section>
  );
}

export default About;
