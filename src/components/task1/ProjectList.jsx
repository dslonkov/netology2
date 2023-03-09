import React from 'react';
import { data } from "../../data/tabsData";

const ProjectList = (props) => {

  const web = data.filter(item => item.category === "Websites")
  const flay = data.filter(item => item.category === "Flayers")
  const bus = data.filter(item => item.category === "Business Cards")

  return (
    <ul className='imgList'>
      {props.picture === '0' && data.map((item, key) => (
        <li
          className='imgItem'
          key={item.img}
        >
          <img src={item.img} />
        </li>
      ))}

      {props.picture === '1' && web.map((item, key) => (
        <li
          className='imgItem'
          key={item.img}
        >
          <img src={item.img} />
        </li>
      ))}

      {props.picture === '2' && flay.map((item, key) => (
        <li
          className='imgItem'
          key={item.img}
        >
          <img src={item.img} />
        </li>
      ))}

      {props.picture === '3' && bus.map((item, key) => (
        <li
          className='imgItem'
          key={item.img}
        >
          <img src={item.img} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
