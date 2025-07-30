"use client";

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

const CountdownTimer = () => {
  // Sets initial 3-day countdown from now
  const getNextTargetDate = () => new Date(Date.now() + THREE_DAYS_IN_MS);

  const [targetDate, setTargetDate] = useState<Date>(getNextTargetDate());

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      // Countdown complete → restart new cycle
      const newTarget = getNextTargetDate();
      setTargetDate(newTarget);
      return {
        days: 3,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-2 ">
      <div className="py-1 px-4 rounded-md bg-primary/10 flex flex-col items-center gap-0 w-fit">
        <h6 className="text-base font-semibold text-subtleprimary">
          {timeLeft.days}
        </h6>
        <p className="text-sm font-medium text-subtlegray">Days</p>
      </div>
      <div className="py-1 px-4 rounded-md bg-primary/10 flex flex-col items-center gap-0 w-fit">
        <h6 className="text-base font-semibold text-subtleprimary">
          {timeLeft.hours.toString().padStart(2, "0")}
        </h6>
        <p className="text-sm font-medium text-subtlegray">Hours</p>
      </div>
      <div className="py-1 px-4 rounded-md bg-primary/10 flex flex-col items-center gap-0 w-fit">
        <h6 className="text-base font-semibold text-subtleprimary">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </h6>
        <p className="text-sm font-medium text-subtlegray">Min</p>
      </div>
      <div className="py-1 px-4 rounded-md bg-primary/10 flex flex-col items-center gap-0 w-fit">
        <h6 className="text-base font-semibold text-subtleprimary">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </h6>
        <p className="text-sm font-medium text-subtlegray">Sec</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
