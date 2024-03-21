import { toCap } from '@/utils/cap';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


const Admin = () => {
    const {data: session} = useSession();
    const router = useRouter()
    
useEffect(() => {
    if(!session) {
        router.replace('/')
    }
},[session]);

  return (
    <div>
        {session?. user?.role !== 'admin' ? <div> Access only for Admin</div>
    : <div>Welcome {toCap(`${session?.user?.role}`)}</div>    
    }
    </div>
  )
}

export default Admin
