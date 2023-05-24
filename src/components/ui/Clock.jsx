import React, { useState, useEffect } from "react";
const Clock = () => {
  const [date, setdate] = useState();
  const [hour, sethour] = useState();
  const [minutes, setminutes] = useState();
  const [seconds, setseconds] = useState();
  let interval;
  const countDown = () => {
    const destination = new Date("may 30 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const date = Math.floor(different / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (different % (1000 * 60 * 60 )) / (1000 * 60 )
      );
      const seconds = Math.floor((different % (1000 * 60 )) / (1000 ));
      
      if (destination < 0) clearInterval(interval.current);
      else {
          setdate(date);
          sethour(hour);
          setminutes(minutes);
          setseconds(seconds);
        }
    });
  };
  useEffect(() => {
    countDown();
  });
  return (
    <div className="clock_wrapper d-flex align-items-center gap-3 ps-5 mt-4">
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center fs-6">
          <h3>{date}</h3>
          <h5>days</h5>
        </div>
        <span className="fs-1 mb-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h3>{hour}</h3>
          <h5>hours</h5>
        </div>
        <span className="fs-1 mb-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h3>{minutes}</h3>
          <h5>minutes</h5>
        </div>
        <span className="fs-1 mb-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h3>{seconds}</h3>
          <h5>seconds</h5>
        </div>
      </div>
    </div>
  );
};
export default Clock;
