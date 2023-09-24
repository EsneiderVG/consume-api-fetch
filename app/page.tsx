import React from 'react'
import Link from "next/link";
import Header from '../components/Header'


function HomePage() {
  return (
    <div className='container'>
      <div>Home Page</div>
      <Link href="/post">Post data</Link>
      
    </div>
  )
}

export default HomePage