import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Count(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {counterOn && (
          <CountUp
            className='account-balance'
            start={0}
            end={props.start}
            duration={2.5}
            useEasing={true}
            separator=','
          />
        )}
        {props.text}
      </ScrollTrigger>
    </>
  );
}
