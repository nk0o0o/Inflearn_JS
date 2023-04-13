import React from 'react'
import { Outlet } from 'react-router-dom';


export default function About() {
  return (
    <div>
        <h2>회사안내</h2>
        <Outlet/>
    </div>
  )
}
