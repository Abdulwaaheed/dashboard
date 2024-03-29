import React from 'react'
import "./navbar.scss"

const Navbar = ({title, setTitle}) => {
  console.log(title);
  return (  
    <div>
       <div className="nav">
       <h1>{title}</h1>
        <ul>
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <li><i className="fa-solid fa-bell"></i></li>
            |
            <li><h3>Jones Ferdinand</h3> <img src="../header/photo.svg" alt="" /></li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar