import useUsers from "@/hooks/useUsers";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, error, isLoading] = useUsers();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (status != "authenticated") {
      router.replace("/");
    }
  }, []);

  useEffect(() => {
    const currentUser = async () => {
      if (!session) return null;
      if (data.length > 0) {
        const user = await data.find(
          (e: any) => e.email === session.user.email
        );
        setCurrentUser(user.name);
      }
    };
    currentUser();
  }, [data]);

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
      <div>Current User: {currentUser} </div>

      {data.length > 0 &&
        data.map((us: Props) => (
          <div className="font-thin border p-3">
            <p key={us.name} className="text-xs">
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
