import Tool from './Tool.js';
import './about.css';
import { LuProjector } from "react-icons/lu";
import Terminal from '../terminal/page.jsx';

const About = () => {
    return (
        <>
            <section className="aboutMe">
                <div className="mainheading">
                    <div className="mainbgheading">RESUME</div>
                    <div className="mainfrontheading">ABOUT <span className="me">ME</span></div>
                </div>
                <div className='terminalandpersonalinfo'>
                    <Terminal />

                    <div className="intro">
                        <div className="headingintro">PERSONAL INFOS:-</div>
                        <div className="row">
                            <div className="col">
                                <div>Name: <span>Mehul</span></div>
                                <div>Age: <span>19 Years</span></div>
                                <div>Freelance: <span>Available</span></div>
                            </div>
                            <div className="col">
                                <div>Address: <span>Noida,sector 62</span></div>
                                <div>Phone: <span>+918595139817</span></div>
                                <div>Language: <span>English,Hindi</span></div>
                            </div>
                        </div>
                        <div className='emailbox'>Email: <span>mehulbansalswm1234@gmail.com</span></div>
                    </div>
                </div>
            </section>
            <section className="skills">
                <div className="experiencesection">
                    <div className="sectionHeading">MY SKILLS</div>
                    <div className="box">
                        {
                            Object.keys(Tool).map((category, categoryindex) => (
                                <div key={categoryindex} className="toolbox">
                                    <div className="heading">{category}</div>
                                    <div className="item">
                                        {
                                            Tool[category].map((item, index) => (
                                                <div key={index} className="itembox">
                                                    <div className="tick">{item.logo}</div>
                                                    <div className="right">
                                                        <div className="toolname">{item.tool}</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className='educationexperience'>
                    <div className="heading">EXPERIENCE</div>
                    <div className="experiencecontainer">
                        <div className="detailbox d-flex">
                            <div className="left">
                                <span className='icon d-flex justify-content-center align-items-center'><LuProjector /></span>
                            </div>
                            <div className="right">
                                <span className='duration'>2022-PRESENT</span>
                                <h4 className=''>WEB DEVELOPER - <span></span></h4>
                                <p>Designed and implemented responsive front-end interfaces with HTML, CSS, and JavaScript, React JS delivering seamless user experiences.</p>
                                <p>Developed and deployed robust web applications using React, Node.js, and MongoDB/MySQL, ensuring scalability and performance.</p>
                            </div>
                        </div>
                        <div className="detailbox d-flex">
                            <div className="left">
                                <span className='icon d-flex justify-content-center align-items-center'><LuProjector /></span>
                            </div>
                            <div className="right">
                                <span className='duration'>2024-PRESENT</span>
                                <h4 className=''>EVENT COORDINATOR - <span>DSC-62</span></h4>
                                <p>As Event Coordinator at DSC 62, I’m dedicated to crafting memorable experiences that inspire and engage our community. Together, we’ll transform ideas into unforgettable events that spark creativity and collaboration!</p>
                            </div>
                        </div>
                        <div className="detailbox d-flex">
                            <div className="left">
                                <span className='icon d-flex justify-content-center align-items-center'><LuProjector /></span>
                            </div>
                            <div className="right">
                                <span className='duration'>2024-PRESENT</span>
                                <h4 className=''>TECH VICE HEAD - <span>CICE</span></h4>
                                <p>I am the Vice Tech Head at CICE, where I manage the technical work alongside other team members.</p>
                            </div>
                        </div>
                        <div className="detailbox d-flex">
                            <div className="left">
                                <span className='icon d-flex justify-content-center align-items-center'><LuProjector /></span>
                            </div>
                            <div className="right">
                                <span className='duration'>2023-PRESENT</span>
                                <h4 className=''>CORE TEAM MEMBER - <span>OSDC</span></h4>
                                <p>Active member of OSDC (Open Source Developers Community).</p>
                                <p>Organize hackathons like CodeJam and RIDEHack within OSDC.</p>
                                <p>Contribute to web development projects in OSDC.</p>
                            </div>
                        </div>
                        <div className="detailbox d-flex">
                            <div className="left">
                                <span className='icon d-flex justify-content-center align-items-center'><LuProjector /></span>
                            </div>
                            <div className="right">
                                <span className='duration'>2023-2024</span>
                                <h4 className=''>VOLUNTEER - <span>OPTICA</span></h4>
                                <p>I successfully developed and deployed a web application. Additionally, I took an active role in organizing the JSCOP Optica event, contributing to its smooth execution and supporting Optica's community engagement initiatives.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="freelance-section">
                <div className="freelance-heading">FREELANCING WORK</div>
                <div className="freelance-card">
                    <div className="freelance-content">
                        <strong>Admin Dashboard:</strong> Created a complete admin dashboard using APIs to display relevant information with features like exporting orders as PDFs and sending WhatsApp messages.
                    </div>
                </div>
                <div className="freelance-card">
                    <div className="freelance-content">
                        <strong>School Website:</strong> Designed and developed a website to showcase the school's work, past activities, and cultural highlights.
                    </div>
                </div>
            </section>

            <section className="achievment">
                <div className="heading">ACHIEVEMENT</div>
                <p>Runners Up, Hackathon BitBox 4.0 hosted by JIIT 128.</p>
                <div className="outer">
                    <div className="inner">
                        Developed a pioneering platform bridging creators and supporters, enabling direct support through cryptocurrency donations.
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;