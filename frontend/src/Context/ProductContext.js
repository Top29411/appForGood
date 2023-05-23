import axios from 'axios' ;
import { createContext, useContext, useEffect, useState, useMemo } from 'react' ;
import { useAuth } from './AuthContext' ;
import { useCrum } from './CrumContext';

const ProductContext = createContext() ;


export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]) ;
  const [productID, setProductID] = useState() ;
  const [product, setProduct] = useState({}) ;
  const [priceList, setPriceList] = useState({}) ;
  const [loading, setLoading] = useState(false) ;
  const [isAuthrization , SetAuthrization] = useState(true) ;
  const [currentItem , setCurrentItem] = useState('') ;



  // const {setCurrentItem} = useCrum() ;
  const {authHeader , user , setLoggedIn} = useAuth() ;

  const API_URL = 'http://localhost:8080/auth/' ;
  const API_URL_ = 'http://localhost:8080/product/' ;

  const getProductList = async ()=>{
    setLoading(true) ;
    await axios.get(API_URL_+'list' , {headers:authHeader()} )
          .then((res)=>{
              setProductList(res.data) ;
              // console.log(res.data) ;
              setLoading(false) ;
          })
          .catch((error)=>{
            setLoading(false) ;
            console.log(error) ;
            if(error.response.status === 401 && error.response.data.message == 'Unauthorized' ) {SetAuthrization(false) ; setLoggedIn(false)}

          })
  }

  

  useEffect(() => {
    
    if(authHeader() == {} || authHeader == '' || authHeader === null) {SetAuthrization(false) ; setLoggedIn(false) ;return ;}
    getProductList() ;

  }, [authHeader])


  const getPriceList = async ()=>{
    setLoading(true) ;
    
    await axios.get(API_URL_+'price_list' , {headers:authHeader()})
      .then((res)=>{
          setLoading(false) ;
          setPriceList(res.data) ;
          
      })
      .catch((error)=>{
        if(error.response.status === 401 && error.response.data.message == 'Unauthorized' ) {SetAuthrization(false) ; setLoggedIn(false)}
        setLoading(false) ;

      })
  }
  
  const getProductDetail = async () => {   
      
    productID && productID.length > 0 && await axios.get( API_URL_+'list_detail' , {params:{productName:productID} , headers:authHeader()} )
    .then((res) => {
      setLoading(false)
        setProduct(res.data[0]) ;
        localStorage.setItem('currentItem' , res.data[0].productName) ;
        setCurrentItem(res.data[0].productName) ;
      }
    ).catch((error)=>{
      setLoading(false) ;
      if(error.response.status === 401 && error.response.data.message == 'Unauthorized' ) {SetAuthrization(false) ; setLoggedIn(false)}
    })
  }


  useEffect(() => {
    setLoading(true)
    
    getPriceList() ;
    getProductDetail() ;
    setLoading(false) ;


  }, [productID ])

  const values = {
    product,
    productList,
    productID,
    setProductID,
    loading,
    priceList ,
    isAuthrization ,
    currentItem ,
    setCurrentItem
  }

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)