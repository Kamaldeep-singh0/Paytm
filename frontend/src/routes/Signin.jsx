import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
     const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const navigate = useNavigate();
    const sendInfo = async()=>{
          console.log("hi");
         const res = await fetch("http://localhost:3000/api/v1/user/signin",{
               method: "POST",
               headers: {
                "Content-Type": "application/json", 
              },
               body: JSON.stringify({ username,
                      password
                })
              });
              const data = await res.json();
              localStorage.setItem("token",data.token)
              navigate("/dashboard");
    }


  return (
     <div className='h-screen flex items-center justify-center bg-gray-300'>
    <div className=' w-1/4 h-auto bg-white rounded-xl shadow-xl'>
        <div className='mt-5 w-full' >
       <div className='font-bold text-3xl text-center mb-2'>Sign in</div>
       <div className='text-gray-700 text-center'>Enter your credentails to access your account</div>
       </div>
       
       <div className=' mx-7 mt-5'>
        <div className='font-medium'>UserName</div>
        <input type="text" placeholder='Johndoe@mail.com..' className='w-full mt-1 mb-3 h-10 pl-3 border border-solid border-gray-300 rounded-lg' onChange={(e)=>{setUsername(e.target.value)}}/>
        <div className='font-medium'>Password</div>
        <input type="text" placeholder='Secret' className='w-full mt-1 mb-3 h-10 pl-3 border border-solid border-gray-300 rounded-lg' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className='w-full mt-1 mb-2 h-10 pl-3 border border-solid border-gray-300 rounded-lg bg-black text-white font-medium' onClick={()=>sendInfo()}>Submit</button>  
        <div className='text-black text-center mb-5'> Don't have an account ?  <Link className="pointer underline pl-1 cursor-pointer" to="../">
        SignUp
      </Link></div>
       </div>
    </div>
    </div>
  )
}

export default Signin
