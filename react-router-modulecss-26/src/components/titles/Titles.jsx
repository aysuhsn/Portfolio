import React from 'react';
import Title from '../title/Title';
import style from './Titles.module.css' ;
import { FiMonitor } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBusinessSharp } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";

const Titles = () => {
    let titles = [{
    id: 1,
    icon: <FiMonitor />,
    name: 'Featured title',
    text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.',
    desc: 'Call to action',
    right: <FaArrowRightLong />
},
{   id: 2,
    icon: <IoBusinessSharp />,
    name: 'Featured title',
    text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.',
    desc: 'Call to action',
    right: <FaArrowRightLong />
},
{   id: 3,
    icon: <BsToggle2Off />,
    name: 'Featured title',
    text: 'Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.',
    desc: 'Call to action',
    right: <FaArrowRightLong />
}]
  return (
    <div className={style.titles}>
        {titles.map((title) => (
        <Title
            key={title.id}
            icon={title.icon}
            name={title.name}
            text={title.text}
            desc={title.desc}
            right={title.right}
            style={style.title}
            />
        ))}
    </div>
  )
}

export default Titles