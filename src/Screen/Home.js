import React, { useState, useEffect } from "react";
import "./Home.css";
import BgImg from "../Img/Emirates-airlines.jpg";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

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
  SearchOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const options2 = [
  { value: "Galileo PK", label: "Galileo PK" },
  { value: "Sabre Aed", label: "Sabre Aed" },
  { value: "Sabre AED", label: "Sabre AED" },
];

const options = [
  { value: "carrier1", label: "Carrier 1" },
  { value: "carrier2", label: "Carrier 2" },
  { value: "carrier3", label: "Carrier 3" },
  { value: "carrier4", label: "Carrier 4" },
];

export default function Home() {
  const [page, setPage] = useState(1);
  const [flightsPage, setFlightsPage] = useState(1);
  const [passengerDropdownOpen, setPassengerDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [flightType, setFlightType] = useState("any");
  const [flightClass, setFlightClass] = useState("Economy");

  const totalPassengers = adults + children + infants;

  // Leaving From
  const [data, setData] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    axios
      .get(
        "https://devapi.innotraveltech.com/tools/airport-autosuggetion-data",
        {
          headers: {
            apikey: "ITT88534696524514",
            secretecode: "BOUINpK3g7kUI9TJ9eVgaK8l1stXNzz4YC5KiOBotf9",
          },
        }
      )
      .then((response) => {
        // Assuming response.data is an array of airport data
        const formattedData = response.data.map((item) => ({
          value: item.code,
          label: item.airport_name,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Going From
  const [selectedOption2, setSelectedOption2] = useState(null);
  const handleChange2 = (selectedOption2) => {
    setSelectedOption2(selectedOption2);
  };

  // Preferred Carrier
  const [selectedOption3, setSelectedOption3] = useState(null);
  const handleChange3 = (selectedOption3) => {
    setSelectedOption3(selectedOption3);
  };

  // Galileo PK
  const [selectedOption4, setSelectedOption4] = useState(null);
  const handleChange4 = (selectedOption4) => {
    setSelectedOption4(selectedOption4);
  };

  // Departure Date
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //Return Date
  const [selectedDate2, setSelectedDate2] = useState(null);
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const [data2, setData2] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(
        "https://devapi.innotraveltech.com/flight/search",
        {
          journey_type: "OneWay", // OneWay, RoundTrip, MultiCity
          segment: [
            {
              departure_airport_type: "CITY", // CITY or AIRPORT
              departure_airport: selectedOption.value,
              arrival_airport_type: "AIRPORT", // CITY or AIRPORT
              arrival_airport: selectedOption2.value,
              departure_date: new Date(selectedDate)
                .toLocaleString()
                .split(",")[0]
                .split("/")
                .reverse()
                .join("-"),
            },
          ],
          travelers_adult: adults,
          travelers_child: children,
          travelers_child_age: 0,
          travelers_infants: infants,
          travelers_infants_age: [""],
          preferred_carrier: [null],
          non_stop_flight: flightType, // any or non-stop,
          baggage_option: "any", // any or only-baggage
          booking_class: flightClass, // Economy , Premium-Economy, Business, First-Class
          supplier_uid: "all", //all
          partner_id: "", //ftm_partner_id / mark blank
          language: "en",
        },
        {
          headers: {
            apikey: "ITT88534696524514",
            secretecode: "BOUINpK3g7kUI9TJ9eVgaK8l1stXNzz4YC5KiOBotf9",
          },
        }
      )
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  console.log(data2);
  console.log(selectedOption);
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
                          onClick={() => setFlightType("any")}
                          className={flightType === "any" ? "active" : ""}
                        >
                          Any Flight {flightType === "any" && <CheckOutlined />}
                        </button>
                        <button
                          onClick={() => setFlightType("non-stop")}
                          className={flightType === "non-stop" ? "active" : ""}
                        >
                          Non-Stop{" "}
                          {flightType === "non-stop" && <CheckOutlined />}
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

                {flightsPage === 1 ? (
                  <form onSubmit={onSubmit}>
                    <div className="home-line" />
                    <div className="select-container">
                      <div className="select-container2">
                        <Select
                          value={selectedOption}
                          onChange={handleChange}
                          options={data}
                          isSearchable
                          placeholder="Leaving From"
                          className="home-Select1"
                        />

                        <Select
                          value={selectedOption2}
                          onChange={handleChange2}
                          options={data}
                          isSearchable
                          placeholder="Going To"
                          className="home-Select1"
                        />
                      </div>

                      <div className="select-container2">
                        <div className="calendar-container">
                          <p className="home-DatePicker-text">Departure Date</p>
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date"
                            isClearable
                            className="home-DatePicker"
                          />
                        </div>

                        <div className="calendar-container">
                          <p className="home-DatePicker-text">Return Date</p>
                          <DatePicker
                            selected={selectedDate2}
                            onChange={handleDateChange2}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date"
                            isClearable
                            className="home-DatePicker"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="select-container2">
                      <Select
                        isMulti
                        value={selectedOption3}
                        onChange={handleChange3}
                        options={options}
                        isSearchable
                        placeholder="Preferred Carrier"
                        className="home-Select1"
                      />

                      <Select
                        value={selectedOption4}
                        onChange={handleChange4}
                        options={options2}
                        isSearchable
                        placeholder="Galileo PK"
                        className="home-Select1"
                      />
                    </div>
                    <div className="home-line" />
                    <button type="submit" className="home-search-button">
                      <SearchOutlined />
                      SEARCH
                    </button>
                  </form>
                ) : flightsPage === 2 ? (
                  <form onSubmit={onSubmit}>
                    <div className="home-line" />
                    <div className="select-container">
                      <div className="select-container2">
                        <Select
                          value={selectedOption}
                          onChange={handleChange}
                          options={data}
                          isSearchable
                          placeholder="Leaving From"
                          className="home-Select1"
                        />

                        <Select
                          value={selectedOption2}
                          onChange={handleChange2}
                          options={data}
                          isSearchable
                          placeholder="Going To"
                          className="home-Select1"
                        />
                      </div>

                      <div className="select-container2">
                        <div className="calendar-container">
                          <p className="home-DatePicker-text">Departure Date</p>
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date"
                            isClearable
                            className="home-DatePicker"
                          />
                        </div>

                        <div className="calendar-container">
                          <p className="home-DatePicker-text">Return Date</p>
                          <DatePicker
                            selected={selectedDate2}
                            onChange={handleDateChange2}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date"
                            isClearable
                            className="home-DatePicker"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="select-container2">
                      <Select
                        isMulti
                        value={selectedOption3}
                        onChange={handleChange3}
                        options={options}
                        isSearchable
                        placeholder="Preferred Carrier"
                        className="home-Select1"
                      />

                      <Select
                        value={selectedOption4}
                        onChange={handleChange4}
                        options={options2}
                        isSearchable
                        placeholder="Galileo PK"
                        className="home-Select1"
                      />
                    </div>
                    <div className="home-line" />
                    <button type="submit" className="home-search-button">
                      <SearchOutlined />
                      SEARCH
                    </button>
                  </form>
                ) : flightsPage === 3 ? (
                  <form onSubmit={onSubmit}>
                    <div className="home-div">
                      <button className="home-search-button3">
                      <PlusOutlined /> Add
                      </button>
                    </div>
                    <div className="select-container3">
                      <div className="select-container2">
                        <Select
                          value={selectedOption}
                          onChange={handleChange}
                          options={data}
                          isSearchable
                          placeholder="Leaving From"
                          className="home-Select1"
                        />

                        <Select
                          value={selectedOption2}
                          onChange={handleChange2}
                          options={data}
                          isSearchable
                          placeholder="Going To"
                          className="home-Select1"
                        />
                      </div>

                      <div className="select-container2">
                        <div className="calendar-container">
                          <p className="home-DatePicker-text">Departure Date</p>
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy" // Change the format as needed
                            placeholderText="Select a date"
                            isClearable
                            className="home-DatePicker"
                          />
                        </div>

                        <button className="home-search-button2">
                          <CloseOutlined />
                        </button>
                      </div>
                    </div>

                    <div className="home-line2"/>

                    <div className="select-container3">
                      <div className="select-container2">
                        <Select
                          value={selectedOption}
                          onChange={handleChange}
                          options={data}
                          isSearchable
                          placeholder="Leaving From"
                          className="home-Select1"
                        />

                        <Select
                          value={selectedOption2}
                          onChange={handleChange2}
                          options={data}
                          isSearchable
                          placeholder="Going To"
                          className="home-Select1"
                        />
                      </div>

                      <div className="select-container2">
                        <div className="calendar-container">
                          <p className="home-DatePicker-text">Departure Date</p>
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy" // Change the format as needed
                            placeholderText="Select a date"
                            isClearable
                            className="home-DatePicker"
                          />
                        </div>

                        <button className="home-search-button2">
                          <CloseOutlined />
                        </button>
                      </div>
                    </div>

                    <div className="home-line2"/>

                    <div className="select-container2">
                      <Select
                        isMulti
                        value={selectedOption3}
                        onChange={handleChange3}
                        options={options}
                        isSearchable
                        placeholder="Preferred Carrier"
                        className="home-Select1"
                      />

                      <Select
                        value={selectedOption4}
                        onChange={handleChange4}
                        options={options2}
                        isSearchable
                        placeholder="Galileo PK"
                        className="home-Select1"
                      />
                    </div>
                    <div className="home-line" />
                    <button type="submit" className="home-search-button">
                      <SearchOutlined />
                      SEARCH
                    </button>
                  </form>
                ) : (
                  <p>Error</p>
                )}
              </div>
            ) : page === 2 ? (
              // Hotels
              <div className="home-bottom-box">Hotels</div>
            ) : (
              <h2>Error page</h2>
            )}
          </div>

          {/* {data2?.data?.length > 0 && (
            <div>
              {data2.data.map((flight, index) => (
                <div key={index}>
                  <h3>Airline: {flight.airline}</h3>
                  <h3>Details: {flight.details}</h3>
                  <h3>Departure: {flight.departure}</h3>
                  <p>{flight.departure_time}</p>
                  <h3>Arrival: {flight.arrival}</h3>
                  <h3>Duration: {flight.duration}</h3>
                  <h3>Baggage: {flight.baggage}</h3>
                  <h1>Price: {flight.price}</h1>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
