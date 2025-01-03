import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [ balance , setBalance] = useState(0);

    useEffect(()=>{
       showBalance();
    },[]);

    const showBalance = async()=>{
         const token= localStorage.getItem("token")
         console.log(token)
         const res = await fetch("http://localhost:3000/api/v1/account/balance",{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            }
         });
         const data = await res.json();
         console.log(data)
         setBalance(data.balance.toFixed(2));
    }


  return (
    <div>
      <div className='flex justify-between pl-7 pr-10 pt-4 border border-2 pb-4'>
        <div className='font-bold text-3xl'>Payments Bank</div>
        <div className='flex '>
        <div className='flex text-xl font-medium mt-1 '>Hello, User </div>
            <div className='ml-4 bg-slate-400 text-lg pt-1 px-3 rounded-full  '>U</div>
        </div>
      </div>
     
    <div className='pl-7 py-7 text-2xl font-semibold'>Your Balance ${balance}</div>

    <div className='mr-7 ml-7'>
    <div className=' text-3xl font-bold'>Users</div>

    <input type="text" placeholder='Search....' className=' h-10 mt-7 w-full border pl-3 rounded-lg '/>

    <div className='flex justify-between my-7  '>
        <div className='flex content-between'>
        <div className="flex items-center justify-center 
        h-12 w-12 rounded-full bg-gray-200">
        <p className="text-black font-bold text-2xl">
            A
        </p>
        </div>
            <div className='text-2xl font-semibold ml-5'>User 1</div>
        </div>
        <button className='h-full bg-gray-900 text-white font-medium px-3 p-2 rounded-lg'>Send Money</button>
    </div>

    <div className='flex justify-between my-7  '>
        <div className='flex content-between'>
        <div className="flex items-center justify-center 
        h-12 w-12 rounded-full bg-gray-200">
        <p className="text-black font-bold text-2xl">
            A
        </p>
        </div>
            <div className='text-2xl font-semibold ml-5'>User 1</div>
        </div>
        <button className='h-full bg-gray-900 text-white font-medium px-3 p-2 rounded-lg'>Send Money</button>
    </div>

    <div className='flex justify-between my-7  '>
        <div className='flex content-between'>
        <div className="flex items-center justify-center 
        h-12 w-12 rounded-full bg-gray-200">
        <p className="text-black font-bold text-2xl">
            A
        </p>
        </div>
            <div className='text-2xl font-semibold ml-5'>User 1</div>
        </div>
        <button className='h-full bg-gray-900 text-white font-medium px-3 p-2 rounded-lg'>Send Money</button>
    </div>

    <div className='flex justify-between my-7  '>
        <div className='flex content-between'>
        <div className="flex items-center justify-center 
        h-12 w-12 rounded-full bg-gray-200">
        <p className="text-black font-bold text-2xl">
            A
        </p>
        </div>
            <div className='text-2xl font-semibold ml-5'>User 1</div>
        </div>
        <button className='h-full bg-gray-900 text-white font-medium px-3 p-2 rounded-lg'>Send Money</button>
    </div>
    
    </div>
    </div>

  )
}

export default Dashboard
