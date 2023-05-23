import { useState, createContext, useContext, useEffect } from 'react' ;
import { Link, useNavigate } from 'react-router-dom' ;


import {useCrum} from '../../Context/CrumContext' ;
import { useAuth } from '../../Context/AuthContext' ;
import { useProduct } from '../../Context/ProductContext' ;

import cn from 'classnames' ;


const Navbar = () => {
  const { crumList } = useCrum() ;
  const { loggedIn } = useAuth() ;
  const {currentItem} = useProduct() ;
  const navigate = useNavigate() ;

  const link_url =()=>{
    navigate('/signin') ;
  }

  useEffect(()=>{
    console.log(currentItem , 'currentItem') ;
  },[currentItem]) ;

  return (
    <div className={cn("px-[20px] pt-[30px] pb-[30px] bg-[white] " ,crumList.length > 2 ? " bg-[white] pl-[80px]" :" bg-[#f5f5f5]")}>
     {
      loggedIn ? 
      <div className="text-sm breadcrumbs">
      <ul>
        {
          crumList?.map((item ,inx)=>(
            inx < crumList.length 
              ? <li key={inx}><a  onClick={link_url}>{item}</a></li>
              : <li key={inx}>{item}</li>
          ))
        }

      </ul>
    </div>
    : <></>
     }
    </div>
  );
};

export default Navbar;
