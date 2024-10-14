import { useState, useEffect } from "react";

const Countdown = ({ duration = 24 * 60 * 60 * 1000 }) => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    setTargetDate(new Date(Date.now() + duration));
  }, [duration]);

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        setIsTimeUp(true);
      }

      return newTimeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div
      key={interval}
      className="w-24 h-24 flex flex-col items-center justify-center m-2 bg-white rounded-lg shadow-md"
    >
      <div className="text-4xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-500">{interval}</div>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-center items-center p-4 rounded-xl">
      {!isTimeUp ? (
        timeComponents
      ) : (
        <div className="animate-bounce">
          <span className="text-4xl text-red-600 font-bold">Time's up!</span>
        </div>
      )}
    </div>
  );
};

export default Countdown;
