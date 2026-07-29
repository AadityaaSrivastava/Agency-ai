import React, { useState } from 'react'

export const ServiceCard = ({service, index}) => {

    const [Position, SetPosition]= useState({x:0, y:0})
    const [visible, setVisible] = useState(false)
  return (
    <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border
    border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100
    dark:shadow-white/10'>

        <div className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r
        from-blue-500 via-indigo-500 to-purple-500 w-75 h-125 absolute z-0
        transition-opacity duration-500 mix-blend-lighten opacity-70`}
        style={{top:Position.y -150, left:Position.x -150 }}/>

            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5
            transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

                <div className='rounded-full bg-gray-100 dark:bg-gray-700'>
                    <img src={service.icon} alt='' className='max-w-24 bg-white
                    dark:bg-gray-900 rounded-full m-2' />

                </div>
                <div className='flex-1'>
                    <h3 className='Font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.Description}</p>
                </div>

            </div>
    </div>
  )
}
