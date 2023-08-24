import Reveals from "../../components/Pages/Reveals/Reveals";








const Card2 = ({ card }) => {
    const { name, image, } = card || {};

    return (
        <div

            className="text-white relative rounded-[50px]  ">
            <img className="" src={image} alt="" />
            <div className="bg-[#FF3D4F] text-center w-full h-[50px] px-2 py-3 md:px-[66px] md:py-[9px] absolute bottom-0 right-0" style={{ borderRadius: '0px 0px 50px 0px' }}>
                <Reveals>
                    <h3 className="text-[22px] font-medium">{name}</h3>
                </Reveals>
            </div>
        </div>
    );
};

export default Card2;
