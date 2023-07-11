

import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import Reveals from '../../components/Pages/Reveals/Reveals';
import { motion } from 'framer-motion'

const ClientCard = ({ slide }) => {
    const { image, name, title, descriptions } = slide;

    return (
        <motion.div whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px #ED3E3E',
            boxShadow: '0px 00px 8px #ED3E3E ',
        }} className="bg-white py-[43px] px-[36px] w-[374px] h-[352px] " style={{ borderRadius: '50px 50px 0 50px' }}>
            <Reveals>
                <img className="h-[72px] w-[72px]" src={image} alt="" />
            </Reveals>
            <Reveals>
                <h3 className="tex-[22px] font-normal text-[#2D2D2D] mt-[22px]">{name}</h3>
            </Reveals>
            <Reveals>
                <p className="text-[#2D2D2D] text-[18px] font-normal mt-[5px]">{title}</p>
            </Reveals>
            <Reveals>
                <p className='mt-[10px] text-[#FAA920] flex items-center gap-1'> <FaStar /><FaStar /><FaStar /><FaStar /><BsStarHalf /> </p>
            </Reveals>
            <Reveals>
                <p className="text-[18px] font-normal mt-[20px]">{descriptions}</p>
            </Reveals>
        </motion.div>
    );
};

export default ClientCard;