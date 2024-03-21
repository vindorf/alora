import { toCap } from '@/utils/cap';
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'




const Profile = () => {
    const { data: session } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (!session) { 
      router.replace('/')
    }
  }, [session]);

const deletUser = async () => {

  try{
    const res = await axios.get(`/api/user/${session?.user?.email}`);
    console.log('User Deleted', res.data)
if(res.status == 200) {
  signOut()
}

  } catch(error) {
    console.log(error)
  }
}

const confirmHandler = () => {
  const confirmed = confirm('Are you sure to delet your accout?');
  if(confirmed) {
    deletUser();
  }
};


  return (
    <div className='mt-24'>
        <b className='text-xl'>Welcome {toCap(`${session?.user?.role}`)}</b>
 <div className='flex gap-6  mt-8  justify-center'>
        <div className='grid grid-cols-2  gap-2 text-right font-extralight pr-6 border-r'>
            <p className='mr-5'>Name:</p>
            <p>{session?.user?.name} </p>
            <p className='mr-5'>Email:</p>
            <p>{session?.user?.email} </p>
            <p className='mr-5'>Role:</p>
            <p>{session?.user?.role} </p>
        </div>
        <div className='w-[100px] border-[1px] rounded-[50%] shadow-lg'>
            <img src={session?.user?.image} alt="Profile Image" />
        </div>
    </div>
    <button 
    className='border m-5 font-extralight px-2 text-center items-center rounded hover:bg-white'
    onClick={confirmHandler}
    >delete account</button>
    </div>
   
  )
}

export default Profile