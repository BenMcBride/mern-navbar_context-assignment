import React, { useContext } from 'react'
import MyContext from '../context/Context'

const Navbar = (props) => {
  const { name } = useContext(MyContext)

  return (
    <nav className="navbar">
      {name ? <p className='navbar-content'>Hi {name}!</p> : <p className='navbar-content'>Welcome!</p>}
    </nav>
  )
}
export default Navbar