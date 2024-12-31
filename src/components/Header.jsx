import { useState } from "react"
import Button from './LetsTalkButton';
import SocialMedia from "./SocialMedia";

const Header = () => {

  const [ openMobileMenu, setOpenMobileMenu ] = useState(false);

//   const inActiveMobileMenu = {
//     'top': '-250px',
//     'opacity': '0'
//   }

//   const activeMobileMenu = {
//     'top': '90px',
//     'opacity': '1'
//   }

  const handleClick = (event) => {
    event.preventDefault();
    setOpenMobileMenu(!openMobileMenu);
  }

  return (
    <header className="pt-3 sticky top-0">
        <nav className="grid grid-cols-2 xl:grid-cols-3 gap-4 items-center border rounded-full px-8 py-2 bg-white relative">
            <a href="/" aria-label="Header logo">
                <img className="max-w-12" src="/images/Logo_dark.svg" alt="Deep Patel Brand Logo" />
            </a>
            <ul className={`flex xl:flex-row flex-col items-center justify-center xl:justify-evenly xl:relative absolute bg-white xl:bg-transparent border-x ${!openMobileMenu ? 'inActiveMobileMenu' : 'activeMobileMenu'}`}>
                <li><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 me-5 transitoin-all">Home</a></li>
                <li><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 me-5 transitoin-all">About</a></li>
                <li><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 me-5 transitoin-all">Services</a></li>
                <li><a href="/" className="block font-dmsans py-4 px-8 rounded-full border border-transparent focus:border-dashed focus:text-indigo-600 hover:border-indigo-600 hover:text-indigo-600 me-5 transitoin-all">Contact</a></li>
                <li className="xl:hidden flex flex-col items-center justify-center mt-6">
                    <Button customClass="sm:hidden">Lets Talk</Button>
                    <SocialMedia/>
                </li>
            </ul>
            <div className="flex flex-row justify-end">
                <Button customClass="hidden sm:inline-flex">Lets Talk</Button>
                <a href="/" className={`block xl:hidden hanburger-icon p-3 sm:p-4 border border-indigo-600 ${ !openMobileMenu ? 'rounded-full' : 'rounded-xl'} ms-2 transition-all`} onClick={handleClick}>
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