import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

export function Navbar() {

  const counter = useSelector(state => state.counter.counter)
  return (
    <div>
      <Link to="/card">Card</Link>
      <div style={{background: "red", width: "25px", position: "relative", bottom: "40px", left: "100px", borderRadius: "50px"}}>{counter}</div>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}
