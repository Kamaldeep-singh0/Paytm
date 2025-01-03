import React from 'react'

function Sendmoney() {
  return (
     <div className='h-screen flex items-center justify-center bg-gray-300'>
    <div className=' w-1/4 h-auto bg-white rounded-xl shadow-xl'>
        <div className='mt-5 w-full' >
       <div className='font-bold text-3xl text-center mb-2'>Send Money</div>

       <div className='flex content-between mx-7'>
        <div className="flex items-center justify-center 
        h-12 w-12 rounded-full bg-green-600">
        <p className="text-white font-bold text-2xl">
            A
        </p>
        </div>
            <div className='text-2xl font-semibold ml-5 p-2'>Friend's Name</div>
        </div>
       
       <div className=' mx-7 mt-2'>
        <div className='font-medium'>Amount (in Rs)</div>
        <input type="text" placeholder='Secret' className='w-full mt-1 mb-3 h-10 pl-3 border border-solid border-gray-300 rounded-lg'/>
        <button className='w-full mt-1 mb-6 h-10 pl-3 border border-solid border-gray-300 rounded-lg bg-green-600 text-white font-medium'>Initiate Tranfer</button>  

       </div>
    </div>
    </div>
    </div>
  )
}

export default Sendmoney;
