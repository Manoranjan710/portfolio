import React from 'react'
import SocialMedia from '../components/SocialMedia'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
      navigate('/projects')
  }

  return (
    <div className= "bg-[#4d4c4c]  h-screen text-white">
      <div className='flex flex-col-reverse md:flex-row justify-center items-center md:max-w-screen-lg md:mx-auto md:h-full px-5 md:px-4'>
        <div className='flex flex-col justify-center h-full md:mt-0 mt-6'>
            <h1 className=' text-white md:text-5xl text-xl font-semibold'> Aspiring Frontend developer</h1>
            <p className=' text-gray-200 py-2 md:py-4 max-w-3xl text-lg md:text-xl' > Ambitious and versatile Front-End Developer with a passion for creating visually appealing and user-friendly interfaces. Proficient in HTML, CSS, JavaScript, and React, I am driven by a genuine enthusiasm for crafting seamless web experiences. </p>
            <button className='group bg-gradient-to-r from-cyan-500 to-blue-500  w-fit flex text-center p-3 rounded-lg hover:scale-110 shadow-md shadow-slate-950 duration-300 ' onClick={handleOnClick}>
              Projects
              <span>
              <img width="18" height="18" className=' mt-1 mx-2  group-hover:rotate-90 duration-300 ' src="https://img.icons8.com/fluency-systems-filled/48/long-arrow-right.png" alt="long-arrow-right"/>
              </span>
              </button>
              <SocialMedia/>
              <div className=' flex flex-row mt-5'>
                <div>
                    <p>Ph  </p>
                    <p>Mail </p>
                </div>
                <div className=' ml-2'>
                    <p> : 7019650790 / 9482207429</p>
                    <p> : manoranjan710@gmail.com </p>
                </div>
              </div>
              
        </div>
        <div className='md:mr-0 mr-48'>
            <img src="../../images/profile_image.jpg" alt="" className=' h-[10rem] w-[9rem] md:mt-0 mt-3 md:h-[24rem] md:w-[21rem] md:mx-auto md:ml-10 md:rounded-3xl rounded-lg shadow-md shadow-white'  />
        </div>
      </div>
    </div>
  )
}

export default Home