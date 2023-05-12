import React, { useState, useEffect } from "react";
import "./ticket.scss";
const Ticket = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1234/superhero")
      .then((res) => res.json())
      .then((infos) => setValue(infos));
  }, []);

  return (
    <div className="box">
      <div className="main">
        <div className="card_main">
          <div className="card_top">
            <h1>All tickets</h1>
            <div className="icon">
              <p>
                <i className="fa-solid fa-arrow-up-wide-short"></i> Sort
              </p>
              <p>
                <i className="fa-solid fa-filter"></i>Filter
              </p>
            </div>
          </div>
          <div className="card_down">
            <p>Ticket details</p>
            <p>Customer name</p>
            <p>Date</p>
            <p>Priority</p>
          </div>
        </div>
        {value.map((item) => (
          <div className="card" key={item.id}>
            <div className="card_title">
              <img src={item.image} alt="" />
              <div className="title">
                <h3>{item.title}</h3>
                <p>{item.county}</p>
              </div>
            </div>
            <div className="card_name">
              <h3>
                {item.name} <span>{item.lastname}</span>
              </h3>
              <p>{item.movie}</p>
            </div>
            <p className="date">{item.date}</p>
            <h3 className={`status `}>
              <span
                className={` normal ${
                  item.status === "NORMAL"
                    ? "normal"
                    : item.status === "HIGH"
                    ? "high"
                    : item.status === "LOW"
                    ? "low"
                    :{}
                    
                }`}
              >
                {item.status}
              </span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
