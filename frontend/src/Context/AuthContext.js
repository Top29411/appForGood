import { createContext, useState, useEffect, useContext } from "react" ;
import axios from 'axios' ;
import {toast } from 'react-toastify' ;

const AuthContext = createContext() ;
const defaultUser = JSON.parse(localStorage.getItem("user")) || {
  userName: "",
  password: "",
  accessToken:""
}
const defaultUsers = JSON.parse(localStorage.getItem("users")) || [] ;

const AuthProvider = ({ children }) => {

  const [user , setUser] = useState(defaultUser) ;
  const [users, setUsers] = useState(defaultUsers) ;
  const [currentUser, setCurrentUser] = useState(defaultUser) ;
  const [isSubmitting, setIsSubmitting] = useState(false) ;
  const [loggedIn, setLoggedIn] = useState(false) ;
  const [errors, setErrors] = useState({}) ;

  const [toastTitle , setToastTitle] = useState("") ;
  const [toastVisible , setToastVisible] = useState(false) ;

  const API_URL = 'http://localhost:8080/auth/' ;


  const show_Toast =(msg)=>{
    toast(msg) ;
  }

  const authHeader =()=>{
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken }; 
    } else {
      return {};
    }
  }

  const login = async (userName, password) => {
    
    
      await axios.post(API_URL + 'login', 
          {
            userName:userName ,
            password:password
          })
        .then((res)=>{
          if(res.data.error == false) {
            setLoggedIn(true) ;
            defaultUser.userName = userName ;
            defaultUser.password = password ;
            defaultUser.accessToken = res.data.token ;
            setUser(defaultUser) ;
            localStorage.setItem("user" , JSON.stringify(defaultUser)) ;
          }
          
        })
        .catch((err)=>{
          if(err.response.status == '401') setToastTitle('Invalid Credentials. Try again please!') ;
          else setToastTitle('User is disabled/Something went wrong , Try again please!') ;
          setToastVisible(true) ;
        })
    
  }

  const register = (userName , password)=> {
    
    try{
      axios.post(API_URL + 'register', 
          {
            userName:userName ,
            password:password
          })
          .then((res)=>{
            setToastTitle('Congrate! Please signin to continue! ') ;
            setToastVisible(true) ;
            setIsSubmitting(true) ;

          })
      }catch(e){
        setToastTitle('Error!! Please try to signup again. ') ;
        setToastVisible(true) ;
    }
  }

  const logout = () => {
    localStorage.removeItem("user") ;
    localStorage.removeItem("currentItem") ;
    setCurrentUser({
      userName: "",
      password: "",
      accessToken: ""
      
    })
    setLoggedIn(false)
  }



  const value = {
    currentUser,
    setCurrentUser,
    user,
    users,
    setLoggedIn,
    errors,
    loggedIn,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    logout,
    login,
    register,
    authHeader,
    show_Toast ,
    toastTitle,
    toastVisible,
    setToastVisible
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }