//import image frame love
import { Link } from 'react-router-dom';
import frame1 from '../../../../assets/Frame (1).png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import icon
import { FaGooglePlusG, FaFacebookF, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    useEffect(() => {
        AOS.init({}); // Initialize AOS

        return () => {
            AOS.refresh(); // Refresh AOS on component unmount
        };
    }, []);

    return (
        <div className='bg-[#ED3E3E] text-white mt-[80px] md:mt-[251px] relative'>
            <div className=" grid grid-cols-2 md:grid-cols-4 max-w-[1172px] w-full space-y-10 md:space-y-0  text-center md:mx-auto pb-[55px] pt-[226px]  gap-[18px] px-5 md:px-0">
                <div className='space-y-5'>

                    <div className='flex items-center justify-center gap-5'>
                        <img src={frame1} alt="" />
                        <h1 className='text-[32px] tex-white font-bold '>Lovelli</h1>
                    </div>
                    <p className='subText'>Dating is a stage of romantic</p>
                    {/* logo div */}
                    <div className='text-[32px] tex-white font-bold flex items-center justify-center gap-5'>

                        <Link> <FaGooglePlusG /></Link>
                        <Link> <FaFacebookF /></Link>
                        <Link> <FaTwitter /></Link>


                    </div>

                </div>
                <div>
                    <h1 className='font-medium text-[24px] capitalize mb-[43px]'>Service</h1>
                    <div className='subText space-y-5 flex flex-col'>
                        <Link>Marriage</Link>
                        <Link>Research</Link>
                        <Link>Aura Air-Com</Link>
                        <Link>pette Air-Com</Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-medium text-[24px] capitalize mb-[43px]'>Category</h1>
                    <div className='subText space-y-5 flex flex-col'>
                        <Link>Support</Link>
                        <Link>Refund policy</Link>
                        <Link>Accessbility</Link>
                        <Link>Non Product</Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-medium text-[24px] capitalize mb-[43px]'>Support</h1>
                    <div className='subText space-y-5 flex flex-col'>
                        <Link>Terms of policy </Link>
                        <Link>Terms of policy </Link>
                        <Link>IR</Link>
                    </div>
                </div>
            </div>
            <div className='text-center bg-[#EE2B2B] py-[30px] text-[16px] font-normal'>
                <p>© 2023 Creative Peoples. All rights reserved.
                </p>
            </div>
            <div className='px-[134px] flex justify-center' style={{ boxShadow: '0px 20px 100px 0px rgba(0, 0, 0, 0.15)' }}>
                <div  data-aos='fade-right' data-aos-delay="50" data-aos-duration='2000'  className='bg-white px-12 md:px-0 md:w-[772px] rounded-[20px] text-center py-[45px] absolute md:top-[-121px] top-[-80px]' style={{ boxShadow: '0px 20px 100px 0px rgba(0, 0, 0, 0.15)' }}>
                    <h1 data-aos='fade-left' data-aos-delay="50" data-aos-duration='1000' className='text-[#2D2D2D] font-[700px] text-[24px]'>Ready To Get Started</h1>
                    <p  data-aos='fade-left' data-aos-delay="50" data-aos-duration='2000' className='text-[#5B5B5B] font-normal text-[18px] pt-[11px]'>Dating is a stage of romantic</p>
                    <div className=' pt-[20px] flex items-center gap-[24px] justify-center'>
                        <button data-aos='fade-left' data-aos-delay="50" data-aos-duration='1000' className='hover:bg-white  hover:text-[#FF6E7B] hover:border-[1px] hover:border-[#FF6E7B]  bg-[#ED3E3E] py-[11px] px-[23px] md:py-[21px] md:px-[46px] rounded-[30px]'>Sign Up</button>
                        <button data-aos='fade-left' data-aos-delay="50" data-aos-duration='2000' className='hover:bg-white  hover:text-[#33357D] hover:border-[1px] hover:border-[#33357D]  bg-[#33357D] py-[11px] px-[23px] md:py-[21px] md:px-[46px] rounded-[30px]'>Vew Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;