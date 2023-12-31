import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
// import icon from '../../../../assets/Frame.png';
import icon2 from '../../../../assets/Frame (2).png';
import loveli from '../../../../assets/Lovelli.png';
// import signUp from '../../../../assets/Group 10.png';
import { BiLogIn } from 'react-icons/bi';


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
                    <div className=" xlg:hidden ">
                        <button
                            type="button"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <HiX /> : <FaBars />}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden xlg:flex items-center text-[#676767]   ">
                        <div className="xl:ml-[293px] flex items-baseline lg:gap-[25px] font-bold  ">
                            <Link
                                to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-bold transition duration-1000"
                            >
                                Home
                            </Link>
                            <Link
                                to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-bold transition duration-1000"
                            >
                                About
                            </Link>
                            <Link
                                to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-bold transition duration-1000"
                            >
                                Services
                            </Link>
                            <Link
                                to="#"
                                className="hover:text-orange-500  px-3 py-2 rounded-md text-xl font-bold transition duration-1000"
                            >
                                Contact
                            </Link>




                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden xl:ml-[118px] xlg:flex items-center  gap-[50px] ">
                        <Link>
                            <button className=" hover:text-orange-500 transition-all duration-1000 text-[#676767] text-xl  px-3 py-2 rounded-md font-bold">
                                Login
                            </button>
                        </Link>
                        <Link>
                            <button className="flex items-center justify-center gap-[9px] text-[15px] rounded-[30px] bg-[#FF3D4F]  text-white
                        hover:bg-white transition duration-700 text-xl border-1 font-bold border hover:border-[#FF3D4F] hover:text-[#FF3D4F] w-[160px] h-[60px]  ">

                                <BiLogIn className='font-bold ' /> {/* <img className='h-5 w-5' src={signUp} alt="" /> */}
                                Sign Up
                            </button>
                        </Link>

                    </div>

                    {/* Mobile navigation */}

                    <div className={`transition-all duration-700 text-white xlg:hidden h-[100vh] w-[60%] lsm:w-[40%]  absolute z-50 top-0 left-0 rounded-r-lg bg-[#33357D] ${isMenuOpen ? 'left-0' : 'left-[-400px]'} pt-10`} >
                        <Link to='/'> <div className="flex-shrink-0 w-[83px] h-[27px] flex items-center gap-[10px] text-[18px] font-bold px-4">
                            <img className='h-[19px] w-15px ' src={icon2} alt="" />
                            <img src={loveli} alt="" />
                        </div></Link>
                        <div className="px-2 pt-2  sm:px-3 ">
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
                        <div className="px-2 sm:px-3 pb-5 ">
                            <button className=" hover:text-orange-500 text-[20px] text-white px-3  rounded-md text-xl font-medium">
                                Login
                            </button>
                            <button className="hover:bg-white mt-3 hover:text-[#FF3D4F] border-[1px] border-[#FF3D4F] flex items-center gap-[9px] text-[15px] rounded-[30px]  px-[10px] py-[5px] text-white bg-[#FF3D4F]">

                                <BiLogIn className='font-bold ' /> {/* <img className='h-4 w-4 hover:bg-[#FF3D4F]' src={signUp} alt="" /> */}
                                Sign Up
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
