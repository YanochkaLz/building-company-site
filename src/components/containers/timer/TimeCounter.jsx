import React, { useState, useEffect } from "react";
import Timer from "../../ui/Timer";
import "./index.scss";

const birthDay = new Date(2003, 9, 17);
const MS_IN_YEAR = 31536000000;
const MS_IN_MONTH = 2.6297 * 10 ** 9;
const MS_IN_DAY = 8.64 * 10 ** 7;

const TimeCounter = () => {

  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const calcCurrentAge = (current) => {
    let diff = current - birthDay;

    const year = Math.floor(diff / MS_IN_YEAR);
    diff -= year * MS_IN_YEAR;

    const month = Math.floor(diff / MS_IN_MONTH);
    diff -= month * MS_IN_MONTH;

    const day = Math.floor(diff / MS_IN_DAY);

    setAge({
      years: year.toString(),
      months: month.toString(),
      days: day.toString(),
    });
    console.log(1)
  };

  useEffect(() => {
    const currentDate = new Date();
    calcCurrentAge(currentDate);
  }, []);

  return (
    <div className="header-timer_con">
      <Timer value={age.years} prop={"лет"} />
      <Timer value={age.months} prop={"месяцев"} />
      <Timer value={age.days} prop={"дней"} />
    </div>
  );
};

export default TimeCounter;
