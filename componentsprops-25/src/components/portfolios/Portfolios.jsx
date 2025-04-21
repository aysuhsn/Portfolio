import React from 'react'
import Portfolio from '../portfolio/Portfolio'
import './portfolios.css'

const Portfolios = () => {
    let portfolios = [{
        id:1,
        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg',
        title: 'Threads',
        desc: 'Illustration',
    },
    {
        id:2,
        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg',
        title: 'Explore',
        desc: 'Graphic Design',
    },
    {
        id:3,
        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg',
        title: 'Finish',
        desc: 'Identity',
    },
    {
        id:4,
        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg',
        title: 'Lines',
        desc: 'Branding',
    },
    {
        id:5,
        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg',
        title: 'Southwest',
        desc: 'Website Design',
    },
    {
        id:6,
        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg',
        title: 'Window',
        desc: 'Photography',
    }]
  return (
    <div className="portfolios">
        <h1>Portfolio</h1>
        <p className='portfolios-name'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='portfolios-content'>
                {portfolios.map((portfolio) =>(
                    <Portfolio
                    key={portfolio.id}
                    image={portfolio.image}
                    title={portfolio.title}
                    desc={portfolio.desc}/>
                ))}
            </div>
    </div>
  )
}

export default Portfolios