import React from 'react'
import {Link} from 'react-router-dom';
import "./aside.scss"
const Aside = () => {
  return (
    <div>
         <aside className='aside'>
            <h1><span>D</span> Dashboard</h1>
            <ul>
                <li><i className="fa-solid fa-chart-pie"></i><Link to={'/overview'}>Overview</Link></li>
                <li><i className="fa-solid fa-ticket"></i><Link to={'/'}>Tickets</Link></li>
                <li><i className="fa-solid fa-lightbulb"></i><Link to={'/ideas'}>Ideas</Link></li>
                <li><i className="fa-solid fa-users"></i><Link to={'/contacts'}>Contacts</Link></li>
                <li><i className="fa-solid fa-user-secret"></i><Link to={'/agents'}>Agents</Link></li>
                <li><i className="fa-solid fa-book"></i><Link to={'/articles'}>Articles</Link></li>
            </ul>
        </aside>
    </div>
  )
}

export default Aside