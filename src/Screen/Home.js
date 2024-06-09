import React, { useState } from "react";
import "./Home.css";
import BgImg from "../Img/Emirates-airlines.jpg";

import {
  ArrowRightOutlined,
  RetweetOutlined,
  DragOutlined,
  CaretDownOutlined,
  CheckOutlined,
  PlusSquareOutlined,
  MinusOutlined,
  CaretUpOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";

export default function Home() {
  const [page, setPage] = useState(1);
  const [flightsPage, setFlightsPage] = useState(1);
  const [passengerDropdownOpen, setPassengerDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [flightType, setFlightType] = useState("Any Flight");
  const [flightClass, setFlightClass] = useState("Economy");

  const totalPassengers = adults + children + infants;

  return (
    <div className="home-body">
      <img src={BgImg} alt="bg" className="home-img" />
      <div className="home-box">
        <div className="home-main-box">
          <div className="home-top-box">
            <button
              className={`home-button ${page === 1 ? "active" : ""}`}
              onClick={() => setPage(1)}
            >
              <span
                className={`icon ${
                  page === 1 ? "flights-icon-active" : "flights-icon"
                }`}
              >
                &#9992;
              </span>
              Flights
            </button>

            <button
              className={`home-button ${page === 2 ? "active" : ""}`}
              onClick={() => setPage(2)}
            >
              <span className="icon">&#127976;</span>
              Hotels
            </button>
          </div>

          <div style={{ width: "100%" }}>
            {page === 1 ? (
              // Flights
              <div className="home-bottom-box">
                <div className="home-Flights-box">
                  <div className="home-Flights-box2">
                    <button
                      onClick={() => {
                        setFlightsPage(1);
                      }}
                      className={`home-Flights-button ${
                        flightsPage === 1 ? "active" : ""
                      }`}
                    >
                      <ArrowRightOutlined />
                      One-way
                    </button>

                    <button
                      className={`home-Flights-button ${
                        flightsPage === 2 ? "active" : ""
                      }`}
                      onClick={() => {
                        setFlightsPage(2);
                      }}
                    >
                      <RetweetOutlined />
                      Round-trip
                    </button>

                    <button
                      className={`home-Flights-button ${
                        flightsPage === 3 ? "active" : ""
                      }`}
                      onClick={() => {
                        setFlightsPage(3);
                      }}
                    >
                      <DragOutlined />
                      Multi-city
                    </button>
                  </div>

                  <div className="home-Flights-box2">
                    <div className="dropdown">
                      <button className="dropdown-button">
                        {flightType}{" "}
                        <CaretDownOutlined className="dropdown-button-icon1" />
                        <CaretUpOutlined className="dropdown-button-icon2" />
                      </button>
                      <div className="dropdown-content">
                        <button
                          onClick={() => setFlightType("Any Flight")}
                          className={
                            flightType === "Any Flight" ? "active" : ""
                          }
                        >
                          Any Flight{" "}
                          {flightType === "Any Flight" && <CheckOutlined />}
                        </button>
                        <button
                          onClick={() => setFlightType("Non-Stop")}
                          className={flightType === "Non-Stop" ? "active" : ""}
                        >
                          Non-Stop{" "}
                          {flightType === "Non-Stop" && <CheckOutlined />}
                        </button>
                      </div>
                    </div>

                    <div className="dropdown">
                      <button
                        className="dropdown-button"
                        onClick={() =>
                          setPassengerDropdownOpen(!passengerDropdownOpen)
                        }
                      >
                        {totalPassengers} Passenger
                        <CaretDownOutlined className="dropdown-button-icon1" />
                        <CaretUpOutlined className="dropdown-button-icon2" />
                      </button>
                      {passengerDropdownOpen && (
                        <div className="dropdown-content">
                          <div className="passenger-count">
                            <p>
                              Adult
                              <br />
                              <RightOutlined /> 12 Years
                            </p>
                            <div>
                              <button onClick={() => setAdults(adults + 1)}>
                                <PlusSquareOutlined />
                              </button>
                              <p>{adults}</p>
                              <button
                                onClick={() =>
                                  setAdults(adults > 0 ? adults - 1 : 0)
                                }
                              >
                                <MinusOutlined />
                              </button>
                            </div>
                          </div>

                          <div className="passenger-count">
                            <p>
                              Children
                              <br />
                              2-12 Years
                            </p>
                            <div>
                              <button onClick={() => setChildren(children + 1)}>
                                <PlusSquareOutlined />
                              </button>
                              <p>{children}</p>
                              <button
                                onClick={() =>
                                  setChildren(children > 0 ? children - 1 : 0)
                                }
                              >
                                <MinusOutlined />
                              </button>
                            </div>
                          </div>

                          <div className="passenger-count">
                            <p>
                              Infants
                              <br />
                              12 Years <LeftOutlined />
                            </p>
                            <div>
                              <button onClick={() => setInfants(infants + 1)}>
                                <PlusSquareOutlined />
                              </button>
                              <p>{infants}</p>
                              <button
                                onClick={() =>
                                  setInfants(infants > 0 ? infants - 1 : 0)
                                }
                              >
                                <MinusOutlined />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="dropdown">
                      <button className="dropdown-button">
                        {flightClass}
                        <CaretDownOutlined className="dropdown-button-icon1" />
                        <CaretUpOutlined className="dropdown-button-icon2" />
                      </button>
                      <div className="dropdown-content">
                        <button
                          onClick={() => setFlightClass("Any class")}
                          className={
                            flightClass === "Any class" ? "active" : ""
                          }
                        >
                          Any class{" "}
                          {flightClass === "Any class" && <CheckOutlined />}
                        </button>
                        <button
                          onClick={() => setFlightClass("Economy")}
                          className={flightClass === "Economy" ? "active" : ""}
                        >
                          Economy{" "}
                          {flightClass === "Economy" && <CheckOutlined />}
                        </button>
                        <button
                          onClick={() => setFlightClass("Premium Economy")}
                          className={
                            flightClass === "Premium Economy" ? "active" : ""
                          }
                        >
                          Premium Economy{" "}
                          {flightClass === "Premium Economy" && (
                            <CheckOutlined />
                          )}
                        </button>
                        <button
                          onClick={() => setFlightClass("Business Class")}
                          className={
                            flightClass === "Business Class" ? "active" : ""
                          }
                        >
                          Business Class{" "}
                          {flightClass === "Business Class" && (
                            <CheckOutlined />
                          )}
                        </button>
                        <button
                          onClick={() => setFlightClass("First Class")}
                          className={
                            flightClass === "First Class" ? "active" : ""
                          }
                        >
                          First Class{" "}
                          {flightClass === "First Class" && <CheckOutlined />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>ggg</div>
              </div>
            ) : page === 2 ? (
              // Hotels
              <div className="home-bottom-box">Hotels</div>
            ) : (
              <h2>Error page</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
