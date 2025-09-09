export default function Sidebar() {
    // add a photo of me and adjust for mobile
    return (
        <div className="sidebar bg-slate-900 text-blue-100 w-1/3 space-y-6 py-24 px-2 relative inset-y-0 left-0 transition duration-200 ease-in-out flex flex-col justify-between">
            <div>
                <h1 className="text-5xl ms-5 mb-3">Hi there 👋,</h1>
                <h2 className="text-3xl ms-5 text-gray-400" >i'm 
                    <span className="text-white"> marcus </span>
                    a
                    <span className="text-white"> full stack developer </span>
                    based out of 
                    <span className="text-white"> Toronto, Ontario, Canada.</span>
                </h2>
            </div>
            <nav className="nav flex justify-center">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-slate-900 md:dark:bg-slate-900 dark:border-gray-700">
                    <li>
                        <a href="#" className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline decoration-2 decoration-sky-500 underline-offset-8 md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            about
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline decoration-2 decoration-sky-500 underline-offset-8 md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            experience
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline decoration-2 decoration-sky-500 underline-offset-8 md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            case studies
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline decoration-2 decoration-sky-500 underline-offset-8 md:p-0 dark:text-white md:dark:hover:underline dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            resume
                        </a>
                    </li>
                </ul>
            </nav>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <footer className="footer flex flex-row justify-center">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://github.com/MJdesigns96" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            <span className="sr-only">gitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/marcus-jeong-b513b6190/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                            <span className="sr-only">Linkedin</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}