import React,{useState,useEffect} from "react";
// import { Link, } from "react-router-dom";
// import Aside from "../../Components/Aside/Aside";
// import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import "./ticket.scss";
const Ticket = () => {
  const [value, setValue] = useState([]);
useEffect(() => {
 fetch("http://localhost:2000/superhero")
 .then(res=>res.json() )
 .then(infos=> setValue(infos))
}, []);


  return (
    <div className="box">

      <div className="main">
        
      </div>
    </div>
  );
};

export default Ticket;
