import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';

const ClientCard = ({slide}) => {
    const {image,name,title,descriptions} =slide;
    const [rating, setRating] = useState(0)
    return (
        <div className="bg-white py-[43px] px-[36px] " style={{ borderRadius: '50px 50px 0 50px' }}>
           <img className="h-[72px] w-[72px]" src={image} alt="" />
           <h3 className="tex-[22px] font-normal text-[#2D2D2D] mt-[22px]">{name}</h3>
           <p className="text-[#2D2D2D] text-[18px] font-normal mt-[5px]">{title}</p>
           <p className='mt-[10px]'><Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} /></p>
           <p className="text-[18px] font-normal mt-[20px]">{descriptions}</p>
        </div>
    );
};

export default ClientCard;