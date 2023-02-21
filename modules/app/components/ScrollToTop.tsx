function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <div className="hover:text-[#85b5d2] hover:scale-125 fixed bottom-0 right-0 m-8 cursor-pointer md:text-3xl transition-all text-main-text dark:text-white" onClick={scrollToTop}>
            <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Chevron Up</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 328l144-144 144 144"/></svg>
        </div>
        )
}

export default ScrollToTop