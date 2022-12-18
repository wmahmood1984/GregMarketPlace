import React, { useEffect, useState } from "react";

export default function Timer({start}) {
  const [seconds, setSeconds] = useState(60);
  const stakeTime = Number(start);
  var currentTimeinSeconds = new Date().getTime() / 1000;
  var differenceTimeinSeconds = Math.trunc(stakeTime - currentTimeinSeconds);

  var DaysRemaining = Math.trunc(differenceTimeinSeconds / 60 / 60 / 24);
  var HoursRemaining = Math.trunc(
    differenceTimeinSeconds / 60 / 60 - DaysRemaining * 24
  );
  var MinutesRemaining = Math.trunc(
    differenceTimeinSeconds / 60 - DaysRemaining * 24 * 60 - HoursRemaining * 60
  );
  var SecondsRemaining = Math.trunc(
    differenceTimeinSeconds -
      DaysRemaining * 24 * 60 * 60 -
      HoursRemaining * 60 * 60 -
      MinutesRemaining * 60
  );

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, [seconds]);

  const handleUnStake = () => {};

//  console.log("seconds",SecondsRemaining)

  return (
    <div className="flex aic jc t-c">
      {differenceTimeinSeconds>0 ? (
        <div>
          Time Remaining: 
          <div>
          <span style={{ color: "grey" }}>{DaysRemaining} Days | </span>{" "}
          <span style={{ color: "grey" }}>{HoursRemaining} Hours |</span>{" "}
          <span style={{ color: "grey" }}>{MinutesRemaining} Minutes </span>{" "}
          </div>
          
        </div>
      ) : (
        <strong style={{marginLeft:"100px",fontSize:"20px"}}>
            Auction ended
        </strong>
      )}
    </div>
  );
}
