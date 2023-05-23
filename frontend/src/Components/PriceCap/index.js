import { useState } from "react";
import { Link } from 'react-router-dom' ;
import cn from 'classnames' ;

const PriceCap =({size , price })=>{
    const [isHover , setIsHover] = useState(false) ;
    return(
        <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)} 
            className={cn('flex flex-wrap justify-center align-middle cursor-pointer text-[14px] font-semibold leading-normal rounded-[4px] w-[91px] h-[56px] py-[8px] px-[16px] border-[1px] border-[#C5BEBB] m-[6px] ' , isHover && 'bg-[#3D261C]')}
        >
            <p className={cn('text-[#3D261C]' , isHover && 'text-[white]')}>{size}</p>
            <p className={cn('text-[#9E938D]' , isHover && 'text-[#D3C4AD]')}>{price}€</p>
            
        </div>
    )
}

export default PriceCap ;