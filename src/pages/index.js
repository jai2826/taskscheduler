import Image from 'next/image'
import Link from 'next/link';
import { useContext, useState } from 'react'
import AppContext from './../components/AppContext'

export default function Home() {
  const context = useContext(AppContext)

  return (
    <main className='flex flex-col border h-screen  bg-white items-center'>
      <div className='flex flex-col w-full h-40 items-center justify-center '>
        <h1 className='text-3xl font-bold'> Schedule</h1>
        <Link href={'#'} className='underline text-blue-500'>Learn More about our agenda...</Link>
      </div>
      <div className='flex flex-col w-4/5  h-full items-center  p-10 border'>
        <ul className='space-y-2 '>
          {context.task && context.tasks.map(item =>{
          return (
           <li key={item.id} >
            <Link href={`/task/${item.id}`}>
              <div className='flex md:flex-row flex-col px-5 py-2  border-b hover:bg-blue-200'>
                <p className="w-32 text-gray-400" >{item.time}</p>
                <p className="" >{item.msg}</p>
              </div>
            </Link>
          </li>
            )
          })}
        </ul>
      </div>


    </main>
  )
}
