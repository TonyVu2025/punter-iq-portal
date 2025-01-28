import { useState, useEffect } from "react";

export const useCountdown = (startTimeISO?: string, endText = "Finished") => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    if (!startTimeISO) return;

    const updateCountdown = () => {
      const now = +new Date();
      const startTime = +new Date(startTimeISO);
      const timeDiff = startTime - now;

      if (timeDiff > 0) {
        if (timeDiff <= 3600000) {
          // Less than or equal to 1 hour
          const minutes = Math.floor(timeDiff / 60000);
          const seconds = Math.floor((timeDiff % 60000) / 1000);
          setTimeRemaining(
            `${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`,
          );
        } else {
          // More than 1 hour
          const hours = String(Math.floor(timeDiff / 3600000)).padStart(2, "0");
          const minutes = String(
            Math.floor((timeDiff % 3600000) / 60000),
          ).padStart(2, "0");
          setTimeRemaining(`${hours}h ${minutes}m`);
        }
      } else {
        setTimeRemaining(endText);
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, [endText, startTimeISO]);

  return timeRemaining;
};
