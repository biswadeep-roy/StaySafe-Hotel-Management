import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Error from "../components/Error";
import Loader from "../components/Loader";
import moment from "moment";
import { DatePicker } from "antd";

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleDateChange = (dates) => {
    
    setDateRange(dates);
  };

  return (
    <div className="container">
      <style>
        {`
          /* Your custom CSS styles */
          .date-picker {
            margin-bottom: 16px;
          }
        `}
      </style>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <div className="date-picker">
            <DatePicker.RangePicker
              format="MM/DD/YYYY"
              onChange={handleDateChange}
              value={dateRange}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        {loading ? (
          <Loader />
        ) : rooms.length > 0 ? (
          rooms.map((room) => (
            <div className="col-md-9 mt-2" key={room.id}>
              <Room room={room} />
            </div>
          ))
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default Homescreen;
