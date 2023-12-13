import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TlComp({ data }) {
  const iconStyles = [
    { background: "#0ae0e5", color: "#fff" },
    { background: "white", color: "#fff" },
  ];
  const contentStyles = [
    { background: "#2f363e", color: "#0ae0e5" },
    { background: "white", color: "#2f363e" },
  ];
  const arrowStyles = [
    { borderRight: "7px solid  #0ae0e5" },
    { borderRight: "7px solid  #0aacfc" },
  ];
  return (
    <VerticalTimeline>
      {data.map((index, i) => (
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={contentStyles[i % 2]}
          contentArrowStyle={arrowStyles[i % 2]}
          date={data[i].date}
          iconStyle={iconStyles[i % 2]}
          key={index}
        >
          <h3 className='vertical-timeline-element-title'>{data[i].txt}</h3>
        </VerticalTimelineElement>
      ))}
      {/* <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#2f363e", color: "#0ae0e5" }}
        contentArrowStyle={{ borderRight: "7px solid  #0ae0e5" }}
        date={data[0].date}
        iconStyle={{ background: "#0ae0e5", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "white", color: "#2f363e" }}
        contentArrowStyle={{ borderRight: "7px solid  #0aacfc" }}
        date='-'
        iconStyle={{ background: "white", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#2f363e", color: "#0ae0e5" }}
        contentArrowStyle={{ borderRight: "7px solid  #0ae0e5" }}
        date='-'
        iconStyle={{ background: "#0ae0e5", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "white", color: "#2f363e" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date='-'
        iconStyle={{ background: "white", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#2f363e", color: "#0ae0e5" }}
        contentArrowStyle={{ borderRight: "7px solid  #0ae0e5" }}
        date='-'
        iconStyle={{ background: "#0ae0e5", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "white", color: "#2f363e" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date='-'
        iconStyle={{ background: "white", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#2f363e", color: "#0ae0e5" }}
        contentArrowStyle={{ borderRight: "7px solid  #0ae0e5" }}
        date='-'
        iconStyle={{ background: "#0ae0e5", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "white", color: "#2f363e" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date='-'
        iconStyle={{ background: "white", color: "#fff" }}
      >
        <h3 className='vertical-timeline-element-title'>{data[0].txt}</h3>
      </VerticalTimelineElement> */}
    </VerticalTimeline>
  );
}

export default TlComp;
