import React from "react";
import "./TicketCart.css";

import Img from "../Img/PK.png";

import { Link } from "react-router-dom";

export default function TicketCart({
  airlineName,
  details,
  departure,
  departureTime,
  arrival,
  duration,
  sitType,
  baggageType,
  baggageWeight,
  price,
  priceType,
  totalPrice,
  seats,
}) {
  return (
    <div className="ticket-cart">
      <div className="ticket-cart-Left">
        <div className="ticketCart-top">
          <p className="ticketCart-top-text1">Airline</p>
          <p className="ticketCart-top-text2">Details</p>
          <p className="ticketCart-top-text2">Departure</p>
          <p className="ticketCart-top-text2">Arrival</p>
          <p className="ticketCart-top-text2">Duration</p>
          <p className="ticketCart-top-text2">Baggage</p>
        </div>

        <div className="ticketCart-top2">
          <div className="ticketCart-div1">
            <img src={Img} alt="Logo" className="ticket-img" />
            <div>
              <p className="ticketCart-top-text3">{airlineName}</p>
              <div className="ticketCart-Seat">Seat:{seats}</div>
            </div>
          </div>

          <div className="ticketCart-div2">
            <p className="ticketCart-top-text1">{details}</p>
          </div>

          <div className="ticketCart-div2">
            <h3 style={{ marginTop: "10px", marginBottom: "0px" }}>
              {departure}
            </h3>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "14px",
              }}
            >
              {departureTime}
            </p>
          </div>

          <div className="ticketCart-div2">
            <h3 style={{ marginTop: "10px", marginBottom: "0px" }}>
              {arrival}
            </h3>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "14px",
              }}
            >
              16-Jun-24
              <br />
              18:00
            </p>
          </div>

          <div className="ticketCart-div2">
            <p
              style={{
                marginTop: "10px",
                marginBottom: "0px",
                fontSize: "14px",
              }}
            >
              {duration}
              <br />
              {sitType}
            </p>
          </div>

          <div className="ticketCart-div2">
            <p
              style={{
                marginTop: "10px",
                marginBottom: "0px",
                fontSize: "14px",
              }}
            >
              <strong>{baggageType}</strong>-{baggageWeight}
            </p>
          </div>
        </div>
      </div>
      <div className="ticket-cart-Right">
        <p className="ticket-cart-text1">Per 1 Passenger</p>
        <p className="ticket-cart-text2">
          {priceType}:{price}
        </p>

        <Link className="ticket-cart-link" to="/login">
          Select Flight
        </Link>
        <p className="ticket-cart-text1">All Passenger</p>
        <p className="ticket-cart-text2">
          {priceType}: {totalPrice}
        </p>
      </div>
    </div>
  );
}
