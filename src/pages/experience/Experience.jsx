import { IoIosCheckmarkCircle } from "react-icons/io";
import Tool from './Tool.js'
import './Experience.css'

const Experience = () => {
    return (
        <div className="experiencesection">
        <div className="sectionHeading">EXPERIENCE</div>
            <div className="box">
                {
                    Object.keys(Tool).map((category, categoryindex) => (
                        <div key={categoryindex} className="toolbox">
                            <div className="heading">{category}</div>
                            <div className="item">
                                {
                                    Tool[category].map((item, index) => (
                                        <div key={index} className="itembox">
                                            <div className="tick"><IoIosCheckmarkCircle/></div>
                                            <div className="right">
                                                <div className="toolname">{item.tool}</div>
                                                <div className="experience">{item.experience}</div>
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
    )
}

export default Experience;