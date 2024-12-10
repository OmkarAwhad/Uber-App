import React from 'react'
import { Link } from 'react-router-dom'
import UberLogoWhite from '../assets/UberLogoWhite.png'
import UberLogoBlack from '../assets/UberLogoBlack.png'

const Start = () => {
   return (
      <div className=' bg-[url(https://images.unsplash.com/photo-1658744796948-b11ae1b52f3f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-right-bottom bg-cover h-screen w-full flex flex-col justify-between'>
         <img className='w-20 ml-6 pt-6 ' src={UberLogoWhite} alt="UberLogoWhite" />
         <div className='bg-white py-6 px-7 flex flex-col text-center gap-5 '>
            <h2 className=' font-extrabold text-3xl '>Get started with Uber</h2>
            <Link to='/login' className=' bg-black px-4 py-2 text-white font-semibold rounded-md w-full hover:scale-95 duration-200 transition-all ' >Continue</Link>
         </div>
      </div>
   )
}

export default Start