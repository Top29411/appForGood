import { useEffect ,Fragment , useState } from "react" ;
import { Link, useNavigate } from 'react-router-dom' ;
import { useParams } from "react-router-dom" ;
import PriceCap from '../../Components/PriceCap' ;
import Spinner from "../../Components/Spinner" ;
import { useProduct } from "../../Context/ProductContext" ;
import { useCrum } from "../../Context/CrumContext" ;
import moment from "moment/moment" ;

import cn from 'classnames' ;
import styles from './styles.module.css' ;
import { useAuth } from "../../Context/AuthContext";


const ProductDetail = () => {
  const { updateCrumPath , crumList} = useCrum() ;
  const { product, loading, setProductID , priceList} = useProduct() ;
  const {loggedIn} = useAuth() ;

  
  const { product_id } = useParams() ;

  useEffect(() => {
    updateCrumPath(window.location.pathname) ;
    setProductID(product_id);
  }, []);

  const navigate = useNavigate()


  useEffect(()=>{
    !loggedIn && navigate("/signin") ;
  },[loggedIn]) ;


  return (
    <>
      {!loading && priceList && product?.productID ? (
          <div className="flex flex-wrap   mb-4 bg-[white]">
            <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 flex flex-wrap justify-center">
              <div className="w-1/2 max-w-[600px] max-h-[550px] border border-[#D8D4D2] px-[15px] rounded-[12px] ">
                <img
                  alt="ecommerce"
                  className="inset-0 max-h-max w-full py-4 my-auto px-4object-scale-down shadow-sm"
                  src={`/Assets/product/${product.imgUrl}.png`} 
              

                />
              </div>
              <div className="lg:w-1/2 lg:max-w-[500px] lg:pl-[40px] lg:py-6 max-w-[600px] my-auto">
                
                <h1 className={cn(styles.head_title ,'pb-[28px] lg:text-left text-center')}>
                  {product.productName}
                </h1>
                
                <div className={(styles.gridCssDesktop)}>
                  {
                    priceList?.map((list , index)=>(
                      <PriceCap size={list.productSize} price={list.productPrice} key={index} />

                    ))
                  }
                 
                   
                </div>

               

                  <div tabIndex={0} className="collapse collapse-arrow  border-t-[1px] mt-[28px] ">
                  <input type="checkbox" className="peer" />
                    <div className={cn("collapse-title text-xl font-medium" , styles.collapse_head_title)}>
                      Dettagli prodotto
                    </div>
                    <div className="collapse-content">
                      <div className="flex flex-col">
                        <div className="flex flex-row w-[100%] mb-[16px] ">
                          <div className="flex flex-col w-1/2 mb-[4px]">
                            <div className={cn(styles.title)}>Prezzo retail</div>
                            <div className={cn(styles.detail_info)}>{product.price}€</div>
                          </div>
                          <div className="flex flex-col w-1/2">
                            <div className={cn(styles.title)}>Colorway</div>
                            <div className={cn(styles.detail_info)}>{product.colorWay}</div>
                          </div>
                        </div>
                        <div className="flex flex-row w-[100%] mb-[16px] ">
                          <div className="flex flex-col w-1/2 mb-[4px]">
                            <div className={cn(styles.title)}>ID Prodotto</div>
                            <div className={cn(styles.detail_info)}>{product.productID}</div>
                          </div>
                          <div className="flex flex-col w-1/2">
                            <div className={cn(styles.title)}>relase Date</div>
                            <div className={cn(styles.detail_info)}>{moment(product.relateDate).format('l')}</div>
                          </div>
                        </div>
                        <div className="flex flex-row w-[100%] mb-[16px] ">
                          <div className="flex flex-col w-[100%] mb-[4px]">
                            <div className={cn(styles.title)}>Descrizione prodotto</div>
                            <div className={cn(styles.detail_info)}>
                              {product.description}
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  */} 
                
                </div>
              </div>
            </div>
          // </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProductDetail;
