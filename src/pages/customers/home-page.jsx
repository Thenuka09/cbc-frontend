import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/nav-bar'

export default function HomePage() {
  return (
    <div>
      {/* nav-bar */}
      <NavBar/>

      <div className="mt-4 px-4">
        <h1 className="text-start">Home Page</h1>
      </div>
    </div>
  )
}
