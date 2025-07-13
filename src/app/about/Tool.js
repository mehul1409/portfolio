import { FaHtml5, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiCss3, SiSass, SiBootstrap, SiTailwindcss, SiReact, SiSolidity, SiDocker, SiAmazonaws, SiNginx, SiExpress, SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp, TbBrandJavascript } from "react-icons/tb";
import { SiGithubactions } from "react-icons/si";

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
            tool: 'React JS',
            experience: 'Intermediate',
            logo: <SiReact />
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
            logo: <SiExpress />,
        },
        {
            tool: 'Socket.IO',
            experience: 'Intermediate',
            logo: <FaNodeJs />, // no official Socket.io icon
        },
        {
            tool: 'Git',
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
            tool: 'MongoDB',
            experience: 'Intermediate',
            logo: <SiMongodb />,
        }
    ],
    CloudAndDevOps: [
        {
            tool: 'Docker',
            experience: 'Intermediate',
            logo: <SiDocker />,
        },
        {
            tool: 'GitHub Actions',
            experience: 'Intermediate',
            logo: <SiGithubactions />,
        },
        {
            tool: 'AWS',
            experience: 'Intermediate',
            logo: <SiAmazonaws />,
        },
        {
            tool: 'Nginx',
            experience: 'Beginner',
            logo: <SiNginx />,
        },
    ],
    Languages: [
        {
            tool: 'C/C++',
            experience: 'Experienced',
            logo: <TbBrandCpp />,
        },
        {
            tool: 'JavaScript',
            experience: 'Experienced',
            logo: <TbBrandJavascript />
        },
        {
            tool: 'Solidity',
            experience: 'Beginner',
            logo: <SiSolidity />,
        },
        {
            tool: 'Python',
            experience: 'Beginner',
            logo: <FaPython />
        }
    ]
}

export default Tool;
