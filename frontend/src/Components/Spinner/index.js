// import Styles from './styles.module.css'
import React from 'react'

const Spinner = () => {
  return (
    <>
    <div className="flex  flex-col  justify-between  items-center  mx-auto  mt-44">
      <div className="relative  w-12 h-12 animate-spin  rounded-full  bg-gradient-to-l  from-blue-400  via-blue-600  to-blue-500">
        <div className="absolute  top-1/2  left-1/2  transform  -translate-x-1/2  -translate-y-1/2  w-9  h-9  bg-neutral-50  rounded-full  border-2  border-dashed  border-white"></div>
      </div>
      <h2 className="mt-5 text-lg font-semibold text-center mx-auto">Loading...</h2>
      <p className="font-light">This may take a few seconds, please don't close this page.</p>
    </div>
    </>

  )
}

export default Spinner