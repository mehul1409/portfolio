'use client';
import './project.css';
import data from './project.js'
import { useState } from 'react';

const projects = () => {
  const [domain, setDomain] = useState('all');

  const handleall = () => {
    setDomain('all');
  }
  const handlefrontend = () => {
    setDomain('frontend');
  }
  const handlebackend = () => {
    setDomain('backend');
  }
  const handlecpp = () => {
    setDomain('cpp');
  }
  const handleblock = () => {
    setDomain('blockchain');
  }

  const filterdata = domain === 'all' ? data : data.filter((item) => item.type == domain);

  return (
    <section id="projects">
      <div className="projectContainer">

        <div className="heading">
          <div className="bgheading">PORTFOLIO</div>
          <div className="frontheading">PROJECTS</div>
        </div>

        <div className="domainbuttons">
          <button className={domain == 'all' ? 'highlight' : ''} onClick={handleall}>All</button>
          <button className={domain == 'frontend' ? 'highlight' : ''} onClick={handlefrontend}>Frontend</button>
          <button className={domain == 'backend' ? 'highlight' : ''} onClick={handlebackend}>Backend</button>
          <button className={domain == 'cpp' ? 'highlight' : ''} onClick={handlecpp}>C++</button>
          <button className={domain == 'blockchain' ? 'highlight' : ''} onClick={handleblock}>Bockchain</button>
        </div>

        <div className="contents">
          {
            filterdata.map((item, index) => (
              <div className='productBox'>
                <div className="product" key={index}>
                  <img src={item.thumbnail} alt={item.name} />
                  <div className="text">
                    <a target="blank" href={item.github} >Github</a>
                    <a target="blank" href={item.demo} >Demo</a>
                  </div>
                </div>
                <div className='projectName'>
                  <div>{item.name}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default projects
