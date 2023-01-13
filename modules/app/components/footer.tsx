import Container from "../utils/container";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-[#01375b] font-text">
      <Container>
        <div className="py-28 flex flex-col items-center justify-center">
          <h3 className="text-2xl tracking-tighter leading-tight text-center mb-3 lg:mb-3 ">
            Fait avec passion par <strong className="text-3xl font-normal">David</strong>
          </h3>
          <p>Rejoins moi sur les réseaux: </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href="https://twitter.com/gnark_eth"
              className="m-3 hover:text-[#85b5d2] font-bold p-3 duration-200 transition-colors max-w-xs"
            >
              <TwitterIcon/>
              {/* Twitter */}
            </a>
            <a
              href="https://github.com/davidbarbi3r"
              className="m-3 hover:text-[#85b5d2] font-bold p-3 duration-200 transition-colors min-w-max"
            >
              <GitHubIcon/>
              {/* GitHub */}
            </a>
            <a
              href="https://www.linkedin.com/in/dbarbier/"
              className="m-3 hover:text-[#85b5d2] font-bold p-3 duration-200 transition-colors min-w-xs"
            >
              <LinkedInIcon/>
              {/* LinkedIn */}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
