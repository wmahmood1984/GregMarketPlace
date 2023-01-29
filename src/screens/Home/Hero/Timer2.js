import React, { useEffect, useState } from "react";

export default function Timer2({styles,start}) {
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
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);





  return (
    <div className="flex aic jc t-c">
      {differenceTimeinSeconds>0 ? (
        <div style={{marginLeft:"50px"}}>
          <div className={styles.info}>Auction ending in</div>
          <div className={styles.timer}>
        <div className={styles.box}>
          <div className={styles.number}>{HoursRemaining}</div>
          <div className={styles.time}>Hrs</div>
        </div>
        <div className={styles.box}>
          <div className={styles.number}>{MinutesRemaining}</div>
          <div className={styles.time}>mins</div>
        </div>
        <div className={styles.box}>
          <div className={styles.number}>{SecondsRemaining}</div>
          <div className={styles.time}>secs</div>
        </div>
      </div>
        </div>
 
      ) : (
        <strong style={{marginLeft:"50px"}} className={styles.number}>
            Auction ended
        </strong>
      )}
    </div>
  );
}
