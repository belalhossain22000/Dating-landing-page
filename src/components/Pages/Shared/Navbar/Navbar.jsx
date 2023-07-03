import { useState } from 'react';
import { FaBars, FaHeart } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import icon from '../../../../assets/Frame.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="  ">
            <div className="w-full px-5 md:mx-auto md:w-[1172px]  pt-[56px] text-[20px]">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to='/'> <div className="flex-shrink-0 flex items-center gap-[10px] text-[18px] font-bold">
                        <FaHeart className='text-red-500 ' />
                        <h1> Lovelli</h1>
                    </div></Link>

                    {/* Mobile menu button */}
                    <div className=" md:hidden ">
                        <button
                            type="button"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <HiX /> : <FaBars />}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center text-[#676767] text-[20px]  ">
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
                    <div className="hidden ml-[118px] md:flex items-center  ">
                        <button className=" hover:text-orange-500 text-[20px] text-[#676767]  px-3 py-2 rounded-md text-sm font-medium">
                            Login
                        </button>
                        <button className="flex items-center gap-[9px] text-[15px] rounded-[30px] bg-[#FF3D4F] px-[32px] py-[22px] ">

                            <img className='h-4 w-4' src={icon} alt="" />
                            Sign Up
                        </button>

                    </div>

                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className="text-white md:hidden h-[100vh]  absolute z-10 w-full top-28"  style={{ backgroundColor: "rgba(239, 68, 68, 0.5)" }}>
                            <div className="px-2 pt-2 pb-3 sm:px-3 ">
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
                            {/* button  */}
                            <div className="px-2 pt-2 pb-3 sm:px-3 flex ">
                                <button className=" hover:text-orange-500 text-[20px] text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Login
                                </button>
                                <button className="flex items-center gap-[9px] text-[15px] rounded-[30px]  px-[32px] py-[22px] hover:text-orange-500">

                                    <img className='h-4 w-4' src={icon} alt="" />
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
