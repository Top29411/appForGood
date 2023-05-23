import React, {useEffect} from "react" ;
import { Link, useNavigate } from 'react-router-dom' ;
import { useProduct } from "../../Context/ProductContext" ;
import styles from "./styles.module.css" ;
import Spinner from "../../Components/Spinner" ;
import { useParams } from "react-router-dom" ; 
import { useCrum } from "../../Context/CrumContext" ;

import { useAuth } from "../../Context/AuthContext" ;
import Card from "../../Components/Card";

import cn from 'classnames' ;


const Products = () => {
  

  const { productList, loading} = useProduct() ;
  const {logout , loggedIn , isAuthrization } = useAuth() ;
  const { updateCrumPath } = useCrum() ;


  const navigate = useNavigate() ;

  const log_out=()=>{
    logout() ;
    navigate("/signin") ;
  }

  useEffect(()=>{
    updateCrumPath(window.location.pathname) ;
  },[]) ;

  useEffect(()=>{
    !loggedIn && navigate("/signin") ;
  },[loggedIn]) ;


  return (
    <div className=" px-[20px]">
      <div>
        <button type="button" onClick={log_out}>logout </button>
      </div>
      
      <div className={cn("sm:px-0 text-center sm:text-left md:px-[30px] px-[40px]" ,styles.head_title)}>Esplora</div>

      <div className={("",styles.gridCssDesktop)}>
        {!loading ? (
          productList?.map((item, index) => {
            return (
                <Card key={`product-${index}`} item={item}  />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Products;
