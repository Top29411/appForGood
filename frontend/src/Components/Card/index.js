import styles from './styles.module.css' ;
import { Link } from 'react-router-dom';
import cn from 'classnames' ;

const Card = ({item }) => {



  return (
    <div key={`${item.id}-item`} className="w-[198px] h-[256px] mb-[28px] hover:bg-[white] px-[20px] " title={item.description}>
      <Link to={`/product/${item.productID}`}>
        <div className="  flex flex-col justify-around   overflow-hidden h-full rounded-[8px]">
          
          
            <div style={{'--image-url':`url("/Assets/product/${item.imgUrl}.png")`}}  className={cn('bg-[image:var(--image-url)] w-[158px] h-[120px] bg-contain' , styles.background_img)}>
              {/* <img className="  inset-0  w-[158px] h-[120px] object-contain   px-4" src={`/Assets/product/${index+1}.png`} alt="" /> */}
            </div>
          
          <div className="flex flex-col justify-between font-[400] text-[14px] text-[#3D261C] h-[88px] ">
            <div>
              <p className="mt-1 mb-2" title={item.productName}>
                {item.productName}
              </p>
            </div>
        
            <div>
              <div className="my-auto" title={`$${item.price}`}>
                <span className="tetx-[16px] text-[#3D261C] font-semibold ">{item.price}€</span>
                
              </div>
            </div>
          
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card