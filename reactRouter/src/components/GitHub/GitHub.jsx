import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hatimchharchhoda')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])

  return (
    <div className='bg-gray-900 text-white text-3xl p-4'>GitHub Followers : {data.followers}
    <img src={data.avatar_url} alt="Git-picture" width={300} /></div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hatimchharchhoda')
  return response.json()
}