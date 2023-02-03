import Container from "../utils/container";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-[#01375b] text-main-text dark:text-white font-text">
      <Container>
        <div className="py-16 flex flex-col items-center justify-center">
          <h3 className="text-2xl tracking-tighter leading-tight text-center mb-3 lg:mb-3 ">
          <FormattedMessage id="footer.made" defaultMessage="Made with love by "></FormattedMessage><strong className="text-3xl font-normal">David</strong>
          </h3>
          <p><FormattedMessage id="footer.socials" defaultMessage="Let's connect: "></FormattedMessage></p>
          <div className="flex flex-row justify-center items-center">
            <a
              href="https://twitter.com/gnark_eth"
              className="m-3 hover:text-[#85b5d2] hover:scale-125 font-bold p-3 duration-200 transition-all max-w-xs"
            >
              <TwitterIcon/>
            </a>
            <a
              href="https://github.com/davidbarbi3r"
              className="m-3 hover:text-[#85b5d2] hover:scale-125 font-bold p-3 duration-200 transition-all min-w-max"
            >
              <GitHubIcon/>
            </a>
            <a
              href="https://www.linkedin.com/in/dbarbier/"
              className="m-3 hover:text-[#85b5d2] hover:scale-125 font-bold p-3 duration-200 transition-all min-w-xs"
            >
              <LinkedInIcon/>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
