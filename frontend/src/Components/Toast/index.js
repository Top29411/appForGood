import React , {useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast =({title , isVisible , setVisible})=>{

    // const notify = () => toast("Wow so easy!") ;

    useEffect(()=>{
        if(!isVisible) return ;
        // console.log(title , isVisible, 'errr') ;
         toast(title) ;
         setVisible(false) ;

    },[isVisible]) ;
    // useEffect(()=>{
    //     toast('title') ;
    // },[]) ;
    

    return (
        <>
            <div>
                
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                >
                
                </ToastContainer>
            </div>
        </>
    )
}

export default Toast ;
