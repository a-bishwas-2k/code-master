"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
    const session = useSession()
  return (
    <div>
        <h1 onClick={()=>signIn("google")}>Login {JSON.stringify(session)}</h1>
        <h1 onClick={()=>signOut()}>Logout</h1>
      
    </div>
  )
}

export default page
