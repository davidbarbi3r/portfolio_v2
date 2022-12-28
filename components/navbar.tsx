import Image from 'next/image'
import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


  return (
    <header>
        <div className='mt-3 flex justify-between items-center'>
            <div className='flex items-center'>
                <Image
                    className='rounded-full md:object-cover max-w-[60px] max-h-[60px] object-contain mr-3'
                    src="/assets/blog/authors/gnark.jpg"
                    alt='Gnark Logo'
                    width={100}
                    height={100}
                />
                <h1 className="text-3xl font-bold"><span className='text-4xl'>G</span>nark</h1>
            </div>
            <nav>
                <div className="hidden sm:block">
                    <ul className='flex mt-3 items-center'>
                        <li className='text-center'>
                            <a href='/'>Home</a>
                        </li>
                        <span className='bg-black h-[1px] w-5 rotate-90'></span>
                        <li className='text-center'>
                            <a href='/projects'>Projects</a>
                        </li>
                        <span className='bg-black h-[1px] w-5 rotate-90'></span>
                        <li className='text-center'>
                            <a href='/blog'>Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="sm:hidden">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => toggleMenu()}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
        
        {menuOpen && <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Home</a>
                <a href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
                <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Blog</a>
            </div>
        </div>}
    </header>
  )
}

export default Navbar