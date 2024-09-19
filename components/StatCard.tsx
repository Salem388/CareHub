import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import { count } from 'console'
import { number } from 'zod'

interface StatCardProps  {
    count:number;
    type:"appointments"|"pending"|"cancelled";
    icon:string;
    label:string
}


const StatCard = ({count,type,icon,label}:StatCardProps) => {
  return ( 
    <div className={clsx("stat-card",{
        "bg-appointments":type === "appointments",
        "bg-pending":type === "pending",
        "bg-cancelled":type === "cancelled",
    })}>
      
    <div className="flex items-center gap-4">
        <Image
        src={icon}
        height={32}
        width={32}
        alt='appointments'
        className='size-8 w-fit'
        />
        <h2 className='text-32-bold text-white'>{count}</h2>
    </div>
        <p className='text-14-regular'>{label}</p>
    </div>
  )
}

export default StatCard
