import React from 'react'
import { Link } from 'react-router-dom'
import Aside from '../../Components/Aside/Aside'
import Navbar from '../../Components/Navbar/Navbar'
import "./overview.scss"
const Overview = ({title, setTitle}) => {
  return (
    <div>
      {/* <Aside/> */}
      <div className="total">
        {/* <Navbar/> */}
      <section className="overview">
        <div className="card">
          <h4>Unresolved</h4>
          <h1>60</h1>
        </div>
        <div className="card">
          <h4>Overdue</h4>
          <h1>16</h1>
        </div>
        <div className="card">
          <h4>Open</h4>
          <h1>43</h1>
        </div>
        <div className="card">
          <h4>On hold</h4>
          <h1>64</h1>
        </div>
      </section>
      <div className="trends">
        <div className="trends-left">
          <div className="">
            <h1>Today’s trends</h1>
            <p>as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="">
            <p>Today</p>
            <p>Yesterday</p>
          </div>
        </div>
        <div className="trends-right ">
          <div className="card h-0">
            <h4>Resolved</h4>
            <h1> 449</h1>
          </div>
          <div className="card">
            <h4>Received</h4>
            <h1> 426</h1>
          </div>
          <div className="card">
            <h4>Average first response time</h4>
            <h1> 33m</h1>
          </div>
          <div className="card">
            <h4>Average response time</h4>
            <h1> 3h 8m</h1>
          </div>
          <div className="card">
            <h4>Resolution within SLA</h4>
            <h1>94%</h1>
          </div>
        </div>
      </div>
      <div className="data">
        <div className="data-left">
          <div className="view">
            <div className="">
            <h1>Unresolved tickets</h1>
            <p>Group: Support</p>
            </div>
            <Link to={"#"}>View details</Link>
          </div>
          <ul>
            <li>Waiting on Feature Request <p>4238</p></li>
            <li>Awaiting Customer Response <p>1005</p></li>
            <li>Awaiting Developer Fixp <p>914</p></li>
            <li>Pending <p>281  </p></li>
          </ul>
        </div>
        <div className="data-right">
        <div className="view">
            <div className="">
            <h1>Task</h1>
            <p>Today</p>
            </div>
            <Link to={"#"}>View all</Link>
          </div>
        <ul>
            <li>   <p><input type="radio" name="" id="" />  Waiting on Feature Request</p> <p>4238</p></li>
            <li><p><input type="radio" name="" id="" /> Awaiting Customer Response</p> <p>1005</p></li>
            <li><p><input type="radio" name="" id="" /> Awaiting Developer Fixp</p> <p>914</p></li>
            <li><p><input type="radio" name="" id="" /> Pending</p> <p>281  </p></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Overview