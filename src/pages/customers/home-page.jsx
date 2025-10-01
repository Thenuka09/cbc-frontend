import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import NavBar from '../../components/nav-bar'
import ProductOverview from './product-overview'

export default function HomePage() {
  return (
    <div>
      {/* nav-bar */}
      <NavBar/>

      <div className="w-full h-[calc(100vh-88px)]">
        <Routes path="/*">
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/productInfo/" element={<ProductOverview/>}/>
        </Routes>
      </div>
    </div>
  )
}
