import { useState } from "react";
import Switcher from "./switcher";

export default function Navbar() {
    const [show, isShow] = useState(false)
    return (
        <>
            <header className={` ${show ? 'flex fixed' : 'hidden sm:flex sticky'}  h-screen sm:h-auto  top-0 z-50 w-full flex flex-row items-center justify-center  bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-50 py-4 px-2`}>
                <nav className={` basis-11/12 flex sm:flex-row flex-col justify-center  items-center gap-8 text-2xl font-semibold py-2 `}>
                    <a href={`introduction`} className="border-b-4 border-transparent py-2 hover:border-b-4 hover:border-b-gray-900 dark:hover:border-b-4 dark:hover:border-b-gray-200 transition-all duration-300 delay-75 ease-linear">Introduction</a>
                    <a href={`works`} className="border-b-4 border-transparent py-2 hover:border-b-4 hover:border-b-gray-900 dark:hover:border-b-4 dark:hover:border-b-gray-200 transition-all duration-300 delay-75 ease-linear">Experiences</a>
                    <a href={`contact`} className="border-b-4 border-transparent py-2 hover:border-b-4 hover:border-b-gray-900 dark:hover:border-b-4 dark:hover:border-b-gray-200 transition-all duration-300 delay-75 ease-linear">Contact Me!</a>
                    <Switcher />
                </nav>
            </header>
            <button
                onClick={() => isShow(!show)}
                className={`fixed m-4 right-0 bottom-0 z-50 dark:bg-gray-200 bg-gray-800 p-4 rounded-full block sm:hidden transition-all duration-300 delay-75 ease-linear`}>
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-gray-200 hover:stroke-gray-200 dark:stroke-gray-800" d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                    <path className="stroke-gray-200 hover:stroke-gray-200 dark:stroke-gray-800" d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
                    <path className="stroke-gray-200 hover:stroke-gray-200 dark:stroke-gray-800" d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </>
    )
}