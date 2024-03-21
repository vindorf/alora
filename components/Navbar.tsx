import React from "react";
import NavLink from "./NavLink";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
const Switch = dynamic(() => import("@/components/Switch"), { ssr: false })

const Navbar = () => {
  const {data: session} = useSession();
  return (
    <div className="flex flex-col gap-2 h-screen fixed top-0 left-0 shadow-md ">
      <Switch />
      <NavLink href="/" label="Home" />
      {session?
    ( <div>
       <NavLink href="/profile" label="Profile" />
     <NavLink href="/admin" label="Admin" />
     <NavLink href="/users" label="Users" />
     <button
       className="flex justify-end items-center text-right rounded  px-2 m-2 shadow-md hover:text-zinc-600 text-zinc-500 hover:shadow-xl"
       onClick={() => signOut()}
     >
       Logout
     </button>
    </div> ) :(
      <NavLink href="/register" label="Account" />
     ) 
    }
     
    </div>
  );
};

export default Navbar;
