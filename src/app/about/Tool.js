import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";

const Tool = {
    FrontendTools: [
        {
            tool: 'HTML',
            experience: 'Experienced',
            logo: <FaHtml5 />,
        },
        {
            tool: 'CSS',
            experience: 'Experienced',
            logo: <SiCss3 />,
        },
        {
            tool: 'SASS',
            experience: 'Intermediate',
            logo: <SiSass />,
        },
        {
            tool: 'Bootstrap',
            experience: 'Experienced',
            logo: <SiBootstrap />,
        },
        {
            tool: 'Tailwind',
            experience: 'Intermediate',
            logo: <SiTailwindcss />,
        },
        {
            tool:'React JS',
            experience:'Intermediate',
            logo:<SiReact/>
        }
    ],
    BackendTools: [
        {
            tool: 'Node JS',
            experience: 'Intermediate',
            logo: <FaNodeJs />,
        },
        {
            tool: 'Express JS',
            experience: 'Intermediate',
            logo:<FaNodeJs/>
        },
        {
            tool: 'GIT',
            experience: 'Experienced',
            logo: <FaGitAlt />,
        },
    ],
    Databases: [
        {
            tool: 'MySQL',
            experience: 'Experienced',
            logo: <DiMysql />,
        },
        {
            tool: 'Mongodb',
            experience: 'Intermediate',
            logo: <DiMongodb />,    
        },
    ],
    Languages:[
        {
            tool:'C/CPP',
            experience:'Experienced',
            logo:<TbBrandCpp/>
        },
        {
            tool: 'Javascript',
            experience: 'Experienced',
            logo: <TbBrandJavascript/>
        },
        {
            tool: 'Solidity',
            experience: 'Beginner',
            logo: <SiSolidity/>,
        },
    ]
}

export default Tool;