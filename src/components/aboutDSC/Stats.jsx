// import { stats } from "../../constants";
// import styles from "../../style";
import Count from "./Count";
import "./AboutDSC.css";
const stats = [
  {
    id: "stats-1",
    title: "Members",
    value: "6000",
    text: "+",
  },
  {
    id: "stats-2",
    title: "Events",
    value: "20",
    text: "+",
  },
  {
    id: "stats-3",
    title: "Days",
    value: "2",
    text: "",
  },
];

const Stats = () => (
  <section className='flex justify-center items-center flex-row flex-wrap  '>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-center items-center flex-row m-3`}
      >
        <h4 className='font-poppins font-semibold xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white'>
          {/* {stat.value} */}
          <Count start={stat.value} text={stat.text} />
        </h4>
        <p className='font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white uppercase ml-3 p-0'>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
