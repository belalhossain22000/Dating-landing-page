






const Card = ({ card }) => {
    const { name, image, location } = card || {};
    
    return (
        <div
           
            className="text-white relative ">
            <img className="w-[300px] h-[400px]" src={image} alt="" />
            <div
                className="bg-[#FF3D4F] text-center w-full px-[54px] py-[24px] absolute bottom-0" style={{ borderRadius: '0px 0px 50px 0px' }}>
                <h3>{name}</h3>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default Card;
