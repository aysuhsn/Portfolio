import React from 'react'
import Service from '../service/Service'
import { SlBasket } from "react-icons/sl";
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import './services.css'


const Services = () => {
    let services = [{
        id: 1,
        title: 'E-Commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
        image: <SlBasket className="services-icon" />,
    },
    {
        id: 2,
        title: 'Responsive Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
        image: <GrPersonalComputer className="services-icon" />,
    },
    {
        id: 3,
        title: 'Web Security',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
        image: <MdOutlineSecurity className="services-icon" />,
    }];
  return (
    <div className="services">
        <h1>SERVICES</h1>
        <p className='services-name'>Lorem ipsum dolor sit amet consectetur.</p>
      <div className='services-text'>
        {services.map((service) => (
            <Service
            key={service.id}
            icon={service.image}
            title={service.title}
            desc={service.description}/>
        ))}
      </div>
    </div>
  )
}

export default Services