import React from 'react'


const Card = ({iconImage,image,name}) => {
  return (
    <div className='w-[400px] relative pt-20 flex items-center justify-center '>
        <img src={image} className='h-[320px] w-[360px] object-cover absolute'></img>

        <div className='relative flex flex-col items-center justify-center py-2 ' >

          <div className='rounded-full bg-amber-200 text-white duration-500 ease-in-out '></div>

          <div className='text-white hover:animate-pulse duration-500 hover:text-blue-500 hover:scale-90'>
            {iconImage}
          </div>

          <div className='mt-8 text-blue-300 font-bold text-3xl'>
            {name}
          </div>

          <button className='text-white py-2 px-6 text-xl rounded-full mt-14 bg-blue-400 font-medium '> 
            KNOW MORE 
          </button>

        </div>
        
    </div>
  )
}

export default Card