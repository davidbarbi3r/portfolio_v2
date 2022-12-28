import Container from './container'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold tracking-tighter leading-tight text-center mb-3 lg:mb-3 ">
            Built with love by {" "}
            <strong className='text-5xl'>Gnark</strong>
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href="https://twitter.com/gnark_eth"
              className="m-3 bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600 text-white font-bold py-3 px-12 duration-200 transition-colors max-w-xs"
            >
              <TwitterIcon className='mr-2' />
              Twitter
            </a>
            <a
              href="https://github.com/davidbarbi3r"
              className="m-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 duration-200 transition-colors min-w-max"
            >
              <GitHubIcon className='mr-2' />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dbarbier/"
              className='m-3 bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600 text-white font-bold py-3 px-12 duration-200 transition-colors min-w-xs'
            >
              <LinkedInIcon className='mr-2' />
              LinkedIn
            </a>
          
              </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
