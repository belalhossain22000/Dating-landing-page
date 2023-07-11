import Reveals from "../../components/Pages/Reveals/Reveals";
import { motion} from 'framer-motion'







const Card = ({ card }) => {
    const { name, image, location } = card || {};

    return (
        <motion.div whileHover={{
            scale:1.1,
            textShadow: '0px 0px 15px #ED3E3E',
            boxShadow: '0px 00px 15px #ED3E3E ',
        }} 

            className="text-white relative rounded-[50px]  ">
            <Reveals>
                <img className="" src={image} alt="" />
            </Reveals>

            <div
                className="bg-[#FF3D4F] text-center w-full px-[54px] py-[24px] absolute bottom-0" style={{ borderRadius: '0px 0px 50px 0px' }}>
                <Reveals>
                    <h3>{name}</h3>
                </Reveals>
                <Reveals>
                    <p>{location}</p>
                </Reveals>
            </div>
        </motion.div>
    );
};

export default Card;
