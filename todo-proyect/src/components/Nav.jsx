import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to='/'> Home </Link> </li>
          <li> <Link to='/add-note'> Add </Link> </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Nav