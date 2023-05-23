import { useAuth } from '../../Context/AuthContext' ;
import cn from 'classnames' ;
import styles from './styles.module.css' ;

const Footer=()=>{

  const { loggedIn } = useAuth() ;
    

    return (
       <>
        {
            loggedIn ? 
            <>
                <footer className="footer p-10 text-[14px] text-[#3D261C] flex max-[374px]:flex-wrap max-[374px]:flex-col ">
                    <div className="min-w-[150px]">
                        <span className={cn(styles.title)}>Support</span> 
                        <a className={cn("link link-hover ", styles.subtitle)}>FAQ</a>
                        <a className={cn("link link-hover ", styles.subtitle)}>Ordini e regi</a>
                        <a className={cn("link link-hover ", styles.subtitle)}>Condizioni di spedizioni</a>
                        <a className={cn("link link-hover ", styles.subtitle)}>Condizioni generali</a>
                        <a className={cn("link link-hover ", styles.subtitle)}>Privacy</a>
                    </div> 
                    <div className="min-w-[150px] min-[472px]:ml-[60px] ml-0">
                        <span className={cn(styles.title)}>Seguici</span> 
                        <a className={cn("link link-hover flex ", styles.subtitle)}><img width={18} height={15} className='mr-[8px]' src="/Assets/footer/facebook.png" />Facebook</a>
                        <a className={cn("link link-hover flex ", styles.subtitle)}><img width={18} height={15} className='mr-[8px]' src="/Assets/footer/instagram.png" />Instagram</a>
                        <div className="flex justify-center align-middle">
                            <a className={cn("link link-hover flex ", styles.subtitle)}><img width={18} height={15} className='mr-[8px]' src="/Assets/footer/twitter.png" />Twitter</a>
                        </div>
                        <a className={cn("link link-hover flex ", styles.subtitle)}><img width={18} height={15} className='mr-[8px]' src="/Assets/footer/likedin.png" />Linkedin</a>
                        <a className={cn("link link-hover flex ", styles.subtitle)}><img width={18} height={15} className='mr-[8px]' src="/Assets/footer/tiktok.png" />Tiktok</a>
                    </div> 
                </footer>
                <footer className="footer p-10  ">
                    <div className={cn("flex flex-wrap " ,styles.subtitle)}>
                        <p className="">Tutti i diritti riservati</p>
                        <p className="">Privacy</p>
                    </div>
                </footer>
            </>
            : <></>
        }
       </>
    )
}

export default Footer ;