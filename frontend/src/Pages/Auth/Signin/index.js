import { useState, useEffect, useRef } from 'react' ;
import { Link, useNavigate } from 'react-router-dom' ;
import { useAuth } from '../../../Context/AuthContext' ;
import { LoginIcon } from '@heroicons/react/outline' ;
import Toast from '../../../Components/Toast' ;
import cn from 'classnames';
import styles from './styles.module.css' ;
const Signin = () => {

  const { currentUser, login, setCurrentUser, setIsSubmitting, loggedIn , toastTitle , toastVisible ,setToastVisible} = useAuth() ;

  const [name, setName] = useState("") ;
  const [password, setPassword] = useState("") ;

  const [isPasswordVisible, setIsPasswordVisible ] = useState(false) ;
  // const [toastTitle , setToastTitle] = useState("") ;
  // const [toastVisible , setToastVisible] = useState(true) ;


  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    login(name, password) ;
  }

  const navigate = useNavigate()
  
  const signup_navigate=()=>{
    navigate('/signup') ;
  }

  useEffect(() => {
    loggedIn && navigate('/') ;
  }, [loggedIn])

  return (
    <div className='flex justify-center'>
         <div className="min-h-full  flex items-center  justify-center  py-12  px-4 min-w-[384px]">
          <div className="max-w-md  w-full   pt-6 pb-12 my-auto  ">
            <div className=''>
              <h2 className={cn("mt-6  font-[#3D261C]   text-[32px]  font-semibold  tracking-wide " , styles.header_title)}>Accedi</h2>
            </div>
            <form
              autoComplete="off"
              onSubmit={handleSignIn}
              className="mt-8 space-y-6  ">
              <div className="rounded-md  relative ">
              <div className="relative mb-[12px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/Assets/Mail.png" />

                  
                </div>
                <input 
                  type="text" 
                  id="input-group-1" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Inserisci la tua name di utente" 

                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  // ref={nameRef}
                  required

                />
              </div>

              {/*  */}

              <div className="relative  container mx-auto mb-[20px] ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/Assets/Look.png" />
                </div>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Scrivi la tua Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  // ref={passwordRef}
                  className="w-full
                  pl-10
                  py-2
                  border border-gray-300
                  text-sm 
                  rounded-[4px]
                  outline-none
                  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <button
                  type='button'
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>


              {/*  */}

              

                <button type='submit' style={{'--image-url':`url("/Assets/login_button.png")`}}  className='bg-[image:var(--image-url)] h-[44px] w-[100%] bg-contain text-[white] flex justify-center items-center ' >
                    Accedi
                </button >
              </div>
            </form>

            <div className=' text-center '>
                <div className='px-[20px]  my-[20px] text-[#9E938D] font-[12px] cursor-pointer	divider '>
                  Oppure accedi con
                </div>  
                <div className='grid grid-cols-3 gap-2'>
                    <div className='h-[44px] bg-[#9E938D] rounded-[4px] flex justify-center items-center cursor-pointer	 ' ><img src="/Assets/GoogleIcon.png" /></div>
                    <div className='h-[44px] bg-[#9E938D] rounded-[4px] flex justify-center items-center cursor-pointer	 ' ><img src="/Assets/FacebookIcon.png" /></div>
                    <div className='h-[44px] bg-[#9E938D] rounded-[4px] flex justify-center items-center cursor-pointer	 ' ><img src="/Assets/AppleIcon.png" /></div>
                    
                </div>
            </div>

            <div className='text-center px-[20px]  my-[20px] text-[#9E938D] font-[12px] cursor-pointer	 '>
              To signup ,  click - 
              <Link to="/signup" className="text-blue-600 hover:underline">
                Here
              </Link>
            </div>          </div>
          <Toast title={toastTitle} isVisible={toastVisible} setVisible={setToastVisible} />
        </div>
    </div>
  )
}

export default Signin