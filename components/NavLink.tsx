import Link from 'next/link'
import React from 'react'

type Props = {
    href: string;
    label: string;
}


const NavLink = ({href, label}: Props) => {
  return (
    <Link
    className='flex justify-end items-center text-right rounded  px-2 m-2 shadow-md hover:text-zinc-600 text-zinc-500 hover:shadow-lg' 
    href={href}>
        {label}
    </Link>
  )
}

export default NavLink