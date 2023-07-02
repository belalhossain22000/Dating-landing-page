import { useState } from 'react';
import { FaHeart,FaBars  } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="">
            <div className="w-full mx-auto   pt-[56px] text-[20px]">
                <div className="flex items-center justify-between ">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-[10px] text-[18px] font-bold">
                        <FaHeart className='text-red-500 '/>
                        <h1> Lovelli</h1>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:text-orange-500 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        >
                            {isMenuOpen ? 'x' : <FaBars/>}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="ml-[293px] flex items-baseline space-x-[50px] text-[20px] font-normal  ">
                            <a
                                href="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden ml-[118px] md:flex items-center ">
                        <button className=" hover:text-orange-500  px-3 py-2 rounded-md text-sm font-medium">
                            Login
                        </button>
                        <button className=" ">
                            Sign Up
                        </button>

                    </div>

                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 sm:px-3 bg-red-500">
                                <a
                                    href="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Services
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </a>
                            </div>
                            <div className="px-2 pt-2 pb-3 sm:px-3 flex justify-end">
                                <button className=" hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium">
                                    Login
                                </button>
                                <button className=" hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
