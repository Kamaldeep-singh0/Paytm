import React from 'react'

function Signup() {
  return (
     <div className='h-screen flex items-center justify-center bg-gray-300'>
    <div className=' w-1/4 h-3/4 bg-white rounded-xl shadow-xl'>
        <div className='mt-5 w-full' >
       <div className='font-bold text-3xl text-center mb-2'>Sign Up</div>
       <div className='text-gray-700 text-center'>Enter your infomation to create an account</div>
       </div>
       
       <div className=' mx-7 mt-5'>
        <div className='font-medium'>First Name</div>
        <input type="text" placeholder='John' className='w-full mt-1 mb-3 h-10 pl-3 border border-solid border-gray-300 rounded-lg'/>
        <div className='font-medium'>Last Name</div>
        <input type="text" placeholder='Doe' className='w-full mt-1 mb-3 h-10 pl-3 border border-solid border-gray-300 rounded-lg'/>
        <div className='font-medium'>UserName</div>
        <input type="text" placeholder='Johndoe@mail.com..' className='w-full mt-1 mb-3 h-10 pl-3 border border-solid border-gray-300 rounded-lg'/>
        <div className='font-medium'>Password</div>
        <input type="text" placeholder='Secret' className='w-full mt-1 mb-3 h-10 pl-3 border border-solid border-gray-300 rounded-lg'/>
        <button className='w-full mt-1 mb-2 h-10 pl-3 border border-solid border-gray-300 rounded-lg bg-black text-white font-medium'>Submit</button>  
        <div className='text-black text-center'>Already have an account? Signin</div>
       </div>
    </div>
    </div>
  )
}

export default Signup
