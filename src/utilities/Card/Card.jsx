import Reveals from "../../components/Pages/Reveals/Reveals";








const Card = ({ card }) => {
    const { name, image, location } = card || {};

    return (
        <div

            className="text-white relative rounded-[50px]  ">
            <img className="" src={image} alt="" />
            <div
                className="bg-[#FF3D4F] text-center w-full px-[54px] py-[24px] absolute bottom-0" style={{ borderRadius: '0px 0px 50px 0px' }}>
                <Reveals>
                    <h3>{name}</h3>
                </Reveals>
                <Reveals>
                    <p>{location}</p>
                </Reveals>
            </div>
        </div>
    );
};

export default Card;
