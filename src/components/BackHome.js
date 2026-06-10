'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const BackHome = () => {

    const router = useRouter();

    const handleOnClick = () => {
        router.push('/');
    }


  return (
    <div>
        <button className='group bg-gradient-to-r from-cyan-500 to-blue-500  w-fit flex justify-center items-center mt-5 text-center p-3 rounded-lg hover:scale-110 shadow-md shadow-slate-950 duration-300 ' onClick={handleOnClick}> Home </button>
    </div>
  )
}

export default BackHome
