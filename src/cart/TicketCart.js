import React from "react";
import "./TicketCart.css";

import Img from "../Img/PK.png";

export default function TicketCart({
  airline,
  details,
  departure,
  departureTime,
  arrival,
  duration,
  baggage,
  price,
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
            <p className="ticketCart-top-text3">
              Pakistan International Airlines
            </p>
          </div>

          <div className="ticketCart-div2">
            <p className="ticketCart-top-text1">PK-213</p>
          </div>

          <div className="ticketCart-div2">
            <h3>KHI</h3>
            <p>
              16-Jun-24
              <br />
              16:40
            </p>
          </div>

          <div className="ticketCart-div2">
            <h3>DXB</h3>
            <p>
              16-Jun-24
              <br />
              18:00
            </p>
          </div>

          <div className="ticketCart-div2">
            <p>2H 20M Economy (V)</p>
          </div>

          <div className="ticketCart-div2">
          <p className="ticketCart-top-text1">ADT-30 kg</p>
          </div>
        </div>
      </div>
      <div className="ticket-cart-Right">Right side</div>
    </div>
  );
}
