import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <div>
            <ArrowUpwardIcon className="hover:text-[#85b5d2] hover:scale-125 fixed bottom-0 right-0 m-8 cursor-pointer md:text-3xl transition-all text-main-text dark:text-white" onClick={scrollToTop} />
        </div>
        )
}

export default ScrollToTop