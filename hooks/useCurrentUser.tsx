import { useSession } from "next-auth/react";
import useUsers from "./useUsers";
import { useEffect, useState } from "react";

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const {data:session} = useSession();
    const [ data, error, isLoading ] = useUsers();

if(!session) {
    console.log('Login first');
    return null;
}

    useEffect(() => {
     if(data && typeof data !== 'undefined') {
        const user =   data.find((e:any) => (e.email === session.user.email))
        setCurrentUser(user);
     }
    },[data,session]);
return currentUser;
}

export default useCurrentUser;