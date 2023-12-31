const Footer = () => {
    return (
        <div>


            <footer className="shadow bg-[#00546a] text-white">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://i.ibb.co/WfvPCYn/Capture.png" className="h-10 rounded-md" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CareCamp</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm sm:text-center">© 2023 <a href="#" className="hover:underline">CareCamp™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;