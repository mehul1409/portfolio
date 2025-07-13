'use client';
import './project.css';
import data from './project.js'
import { useState } from 'react';

const projects = () => {
  const [domain, setDomain] = useState('all');
  const [expanded, setExpanded] = useState({});

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
  const handlebfullstack = () => {
    setDomain('fullstack');
  }

  const filterdata = domain === 'all' ? data : data.filter((item) => item.type == domain);

  return (
    <section id="projects">
      <div className="projectContainer">

        <div className="mainheading">
          <div className="mainbgheading">PORTFOLIO</div>
          <div className="mainfrontheading">PROJECTS</div>
        </div>

        <div className="domainbuttons">
          <button className={domain == 'all' ? 'highlight' : ''} onClick={handleall}>All</button>
          <button className={domain == 'fullstack' ? 'highlight' : ''} onClick={handlebfullstack}>Full Stack</button>
          <button className={domain == 'frontend' ? 'highlight' : ''} onClick={handlefrontend}>Frontend</button>
          <button className={domain == 'backend' ? 'highlight' : ''} onClick={handlebackend}>Backend</button>
          <button className={domain == 'cpp' ? 'highlight' : ''} onClick={handlecpp}>C++</button>
          <button className={domain == 'blockchain' ? 'highlight' : ''} onClick={handleblock}>Bockchain</button>
        </div>

        <div className="contents">
          {filterdata.map((item, index) => {
            const isExpanded = expanded[index] || false;
            const words = item.description.split(' ');
            const shortDescription = words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '');

            return (
              <div className='productBox' key={index}>
                <div className="product">
                  <img src={item.thumbnail} alt={item.name} />
                  <div className="text">
                    <a target="blank" href={item.github}>Github</a>
                    <a target="blank" href={item.demo}>Demo</a>
                  </div>
                </div>

                <div className='projectName'>
                  <div>{item.name}</div>
                </div>

                <div className="projectDescription">
                  {isExpanded ? item.description : shortDescription}
                  {words.length > 50 && (
                    <span
                    
                  onClick={() => setExpanded(prev => ({ ...prev, [index]: !isExpanded }))}
                      style={{ cursor: 'pointer', color: '#007bff', marginLeft: '5px' }}
                    >
                      {isExpanded ? '▲ Show Less' : '▼ Show More'}
                    </span>
                  )}
                </div>

                <div className='technologiesUsed'>
                  {item.tech?.map((tech, i) => <div key={i}>{tech}</div>)}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  )
}

export default projects
