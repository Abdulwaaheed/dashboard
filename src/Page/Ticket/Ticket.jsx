import React from "react";
import { Link } from "react-router-dom";
import Aside from "../../Components/Aside/Aside";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import "./ticket.scss";
const Ticket = () => {
  return (
    <div className="box">
      <Aside />

      <div className="main">
        <Navbar />
        <section>
          <div className="info">
            <p> Ticket details</p>
            <p>Customer name</p>
            <p>Date</p>
            <p>Priority</p>
          </div>
          <div>
            {Card.map((item) => (
              <div className="card d-flex  align-items-center justify-content-between flex-row">
                <img src={item.image} alt="" />
                <div className="details ">
                  <h4>{item.title}</h4>
                  <p>{item.update}</p>
                </div>
                <div className="customer">
                  <h4>{item.name}</h4>
                  <p>{item.signin}</p>
                </div>
                <div>{item.date}</div>
                <span
                  className={`${
                    item.status === "HIGH" ? "high" : item.status === "NORMAL" ? 'normal' : item.status==="LOW" ? "low":""
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <div className="pagination">
            <div className="row">
              <p>Rows per page: 8</p>
            </div>
            <div className="page">
              1-8 of 1240<i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ticket;
