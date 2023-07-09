import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
// import icon from '../../../../assets/Frame.png';
import icon2 from '../../../../assets/Frame (2).png';
import loveli from '../../../../assets/Lovelli.png';
import signUp from '../../../../assets/Group 10.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="  ">
            <div className="w-full px-5 mx-auto xl:w-[1280px]   pt-[56px] text-[20px]">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to='/'> <div className="flex-shrink-0 w-[83px] h-[27px] flex items-center gap-[10px] text-[18px] font-bold">
                        <img className='h-[19px] w-15px ' src={icon2} alt="" />
                        <img src={loveli} alt="" />
                    </div></Link>

                    {/* Mobile menu button */}
                    <div className=" lg:hidden ">
                        <button
                            type="button"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <HiX /> : <FaBars />}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex items-center text-[#676767]   ">
                        <div className="xl:ml-[293px] flex items-baseline lg:gap-[25px] text-[20px] font-normal  ">
                            <Link
                               to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-medium "
                            >
                                Home
                            </Link>
                            <Link
                               to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-medium"
                            >
                                About
                            </Link>
                            <Link
                               to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-medium"
                            >
                                Services
                            </Link>
                            <Link
                               to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-medium"
                            >
                                Contact
                            </Link>




                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden xl:ml-[118px] lg:flex items-center  gap-[50px] ">
                        <Link>
                            <button className=" hover:text-orange-500  text-[#676767] text-xl  px-3 py-2 rounded-md font-medium">
                                Login
                            </button>
                        </Link>
                        <Link>
                            <button className="flex items-center justify-center gap-[9px] text-[15px] rounded-[30px] bg-[#FF3D4F]  text-white
                        hover:bg-white border-1 text-xl border hover:border-[#FF3D4F] hover:text-[#FF3D4F] w-[160px] h-[60px]  ">

                                <img className='h-5 w-5 bg-[#FF3D4F] ' src={signUp} alt="" />
                                Sign Up
                            </button>
                        </Link>

                    </div>

                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className={` text-white lg:hidden h-[] w-[200px]  absolute z-10 top-24 right-5 rounded-lg bg-[#33357D] ${isMenuOpen?' transition-all duration-300 ease-in-out':''}`} >
                            <div className="px-2 pt-2 pb-3 sm:px-3 ">
                                <Link
                                   to="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                   to="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                   to="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Services
                                </Link>
                                <Link
                                   to="#"
                                    className="hover:text-orange-500  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                            {/* button  */}
                            <div className="px-2 pt-2 pb-3 sm:px-3  ">
                                <button className=" hover:text-orange-500 text-[20px] text-white px-3 py-2 rounded-md text-xl font-medium">
                                    Login
                                </button>
                                <button className="-ml-5 flex items-center gap-[9px] text-[15px] rounded-[30px]  px-[32px] py-[22px] hover:text-orange-500">

                                    <img className='h-4 w-4' src={signUp} alt="" />
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
