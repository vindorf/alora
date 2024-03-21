import { cn } from "@/utils/cn";

import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;




const CustomButton = ({ className, ...props}: Props) => {
  return (
    <div className="mt-14 w-[500px] p-2 border">
      <h1>Button Component cn</h1>
     <button
     {...props}
     className={cn('w-full bg-black text-white rounded', className)}
     ></button>
    </div>
  )
}

export default CustomButton