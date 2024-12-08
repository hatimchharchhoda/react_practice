import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
   const {userId} = useParams()
  return (
    <div className='bg-gray-800 text-white p-4 text-3xl'>User: {userId}</div>
  )
}
