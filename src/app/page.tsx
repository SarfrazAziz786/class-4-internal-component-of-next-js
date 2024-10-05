"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

    
//import route function "use client" for userouter function 


export default function Homepage() {
  
  const route = useRouter()
       //call nextjs internal  route function
  
  return (
    <div>
      {/* <h1>HOMEPAGE</h1> */}
      <h2 className='m-2'>Recent Class Topic Teacher <em>"Sir Mubashir Ali"</em></h2>
      <button className='m-2 bg-purple-800 rounded border p-2 hover:text-red-200' onClick={()=>route.push('class-4-topic') }>Next.js Internal Components
      </button>
  
    </div>
  )
}


