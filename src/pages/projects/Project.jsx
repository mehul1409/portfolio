import React from 'react'
import './Project.css'
import ProjectDetail from './ProjectDetail'
const Project = () => {
  return (
    <div className='projectsection'>
       <div className='projectheading'>PROJECTS</div>
       <div className='container'>
        {
          ProjectDetail.map((item,index)=>(
            <div className="project" key={index}>
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="title">{item.ProjectName}</div>
          <div className="description">{item.description}</div>
          <div className="button">
          <a href={item.github}>Github</a>
          <a href={item.demo}>Demo</a>
        </div>
        <div className="techStack">
          <div className="heading">TechStack Used</div>
          <div className="stacks">
            {
              item.tech.map((techitem,idx)=>(
                <div key={idx}>{techitem}</div>
              ))
            }
          </div>
        </div>
        </div>
          ))
        }
       </div>
    </div>
  )
}

export default Project
