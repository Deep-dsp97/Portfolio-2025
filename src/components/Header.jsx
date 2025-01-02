import { useState } from "react"
import Button from './LetsTalkButton';
import SocialMedia from "./SocialMedia";

const Header = () => {

  const [ openMobileMenu, setOpenMobileMenu ] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setOpenMobileMenu(!openMobileMenu);
  }

  return (
    <header className="pt-3 sticky top-0 z-50">
        <nav className="grid grid-cols-3 gap-4 items-center border rounded-full pr-3 pl-8 py-2 bg-white relative">
            <a href="/" className="col-span-2 xl:col-span-1" aria-label="Header logo">
                <img className="max-w-12" src="/images/Logo_dark.svg" alt="Deep Patel Brand Logo" />
            </a>
            <ul className={`flex xl:flex-row flex-col items-center justify-center xl:justify-evenly xl:relative absolute bg-white xl:bg-transparent border-x xl:border-x-0 ${!openMobileMenu ? 'inActiveMobileMenu' : 'activeMobileMenu'}`}>
                <li className="xl:me-2"><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 transitoin-all">Home</a></li>
                <li className="xl:me-2"><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 transitoin-all">About</a></li>
                <li className="xl:me-2"><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 transitoin-all">Services</a></li>
                <li className="xl:me-2"><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 transitoin-all">Contact</a></li>
                <li className="xl:hidden flex flex-col items-center justify-center mt-6">
                    <Button customClass="sm:hidden inline-flex mt-4 text-white bg-indigo-600 border-transparent hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Lets Talk</Button>
                    <SocialMedia/>
                </li>
            </ul>
            <div className="flex flex-row justify-end">
                <Button customClass="hidden sm:inline-flex text-white bg-indigo-600 border-transparent hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Lets Talk</Button>
                <a href="/" className={`block xl:hidden hanburger-icon p-3 sm:p-4 border border-indigo-600 ${ !openMobileMenu ? 'rounded-full' : 'rounded-3xl'} ms-2 transition-all`} onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-6 w-6 stroke-indigo-500 ${ !openMobileMenu ? '' : 'rotate-45'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Header