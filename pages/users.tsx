import useCurrentUser from "@/hooks/useCurrentUser";
import useUsers from "@/hooks/useUsers";
import User from "@/models/user.model";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const Users = () => {
  const currentUser = useCurrentUser() as typeof User | null;
  const [data, error, isLoading] = useUsers();
  const router = useRouter();
  const { data: session, status } = useSession();
  
  

  useEffect(() => {
    if (status != "authenticated") {
      router.replace("/");
    }
  }, []);



  if (error) return <div>Error fetching Data</div>;
  if (isLoading) return <div>...Loading</div>;

  type Props = {
    _id: string;
    name: string;
    email: string;
  };

  return (
    <div className="flex flex-col items-center mt-24 gap-4">
      <b>Users</b>
      <div>Current User:  {currentUser != null  && currentUser?.name}</div>

      {data.length > 0 &&
        data.map((us: Props) => (
          <div key={us.name} className="font-thin border p-3">
            <p  className="text-xs">
              Id: {us._id}
            </p>
            <div
              className="grid w-56 grid-cols-2 font-thin  text-left"
              key={us._id}
            >
              <p className="mr-3">Name:</p>
              <p>{us.name} </p>
              <p className="mr-3">Email:</p>
              <p>{us.email} </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
