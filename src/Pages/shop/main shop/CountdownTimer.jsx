import { useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("August 30, 2024 00:00:00").getTime(); // Updated the year to a future date

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  //     if (distance < 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerDays(String(days).padStart(2, "0"));
  //       setTimerHours(String(hours).padStart(2, "0"));
  //       setTimerMinutes(String(minutes).padStart(2, "0"));
  //       setTimerSeconds(String(seconds).padStart(2, "0"));
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // }, []);

  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[12px] font-semibold">
          <small>Days</small>
        </p>
        <span className="text-xl font-bold">{timerDays}</span>
      </div>
      <span className="text-sm font-bold">:</span>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[12px] font-semibold">
          <small>Hours</small>
        </p>
        <span className="text-xl font-bold">{timerHours}</span>
      </div>
      <span className="text-sm font-bold">:</span>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[12px] font-semibold">
          <small>Mins</small>
        </p>
        <span className="text-xl font-bold">{timerMinutes}</span>
      </div>
      <span className="text-sm font-bold">:</span>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[12px] font-semibold">
          <small>Secs</small>
        </p>
        <span className="text-xl font-bold">{timerSeconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
