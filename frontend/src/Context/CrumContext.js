import { useState, createContext, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useAuth } from './AuthContext';
import { useProduct } from './ProductContext' ;

const CrumContext = createContext() ;


const CrumProvider = ({children}) => {
  const [crumLink, setLink] = useState([])
  const [crumList , setList] = useState([]) ;
  
  const {currentItem , setCurrentItem} = useProduct() ;


  const updateCrumPath =(url)=>{
    let pathname = url.split('/') ;
    if(pathname.length == 2) {
      let currentPath =['Home' , 'Esplora'] ;
      setList(currentPath);
      let currentLink = ['/' , ''] ;
      setLink(currentLink) ;
    }
    if(pathname.length == 3) {
      let currentPath =['Home' , 'Esplora',currentItem] ;
      setList(currentPath) ;
      let currentLink = ['/' , '/', ''] ;
      setLink(currentLink) ;
      
    }

  }
   

  const values = {
    crumList,
    crumLink ,
    updateCrumPath
    
  }

  return <CrumContext.Provider value={values}>{children}</CrumContext.Provider>
}

const useCrum = () => useContext(CrumContext) ;

export { CrumProvider, useCrum }