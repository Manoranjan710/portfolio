import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackHome = () => {

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    }


  return (
    <div>
        <button className='group bg-gradient-to-r from-cyan-500 to-blue-500  w-fit flex justify-center items-center mt-5 text-center p-3 rounded-lg hover:scale-110 shadow-md shadow-slate-950 duration-300 ' onClick={handleOnClick}> Home </button>
    </div>
  )
}

export default BackHome
