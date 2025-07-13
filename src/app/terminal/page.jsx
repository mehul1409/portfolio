'use client'
import React, { useEffect, useRef, useState } from 'react';
import './terminal.css';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const terminalRef = useRef(null);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleCommand = () => {
        let newOutput = output + '\n' + 'mehul@mehul ~ $ ' + input;
        const command = input.trim().toLowerCase();

        switch (command) {
            case 'antics':
                newOutput += '\nProjects:\n';
                newOutput += '1. CRYPSUP - A creator-supporter platform with crypto donations (BitBox Runner-up).\n';
                newOutput += '2. CampusSociety - MERN-based platform for college event management.\n';
                newOutput += '3. VerbalEx - OCR tool supporting Indian languages with e-sign & form fill APIs.\n';
                newOutput += '4. Web3Portfolio - Wallet-based personal portfolio with ETH donation.\n';
                newOutput += '5. Vehicle Optimization Software - C++ based system for service and pricing management.\n';
                break;
        
            case 'funfacts':
                newOutput += '\nAbout Me:\n';
                newOutput += 'B.Tech CSE student at Jaypee Institute of Information Technology.\n';
                newOutput += 'Backend-focused full-stack developer with a love for Web3 & cloud infra.\n';
                newOutput += 'Enthusiastic about building modular, secure, and scalable systems.\n';
                break;
        
            case 'superpowers':
                newOutput += '\nSkills:\n';
                newOutput += '- Languages: C++, JavaScript, Python, Solidity\n';
                newOutput += '- Backend: Node.js, Express.js, MongoDB, MySQL\n';
                newOutput += '- Frontend: React.js, Tailwind CSS, Bootstrap\n';
                newOutput += '- DevOps: Docker, GitHub Actions, Nginx\n';
                newOutput += '- Cloud: AWS EC2, S3, Lambda, SNS, SQS, CloudWatch\n';
                break;
        
            case 'journeys':
                newOutput += '\nExperience:\n';
                newOutput += '- Backend Developer @ Kartavya Tech (Jan–Jul 2025): Optimized Node.js APIs, DB structure, event-driven systems using AWS SQS/SNS/Lambda.\n';
                newOutput += '- Coordinator @ DSC: Led event management & hackathons like SIH, Hackin’ Winters.\n';
                newOutput += '- Tech Coordinator @ CICE: Conducted Git & project workshops.\n';
                newOutput += '- Runner-up @ BitBox 4.0: For CRYPSUP – crypto-based support system.\n';
                break;
        
            case 'resume':
                newOutput += '\nDownloading Resume...\n';
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/uc?export=download&id=11nvgoMzg7-vDSrsbC5Qpv0GOVyS_C3jJ';
                link.download = 'Mehul_Bansal.pdf';
                link.target = '_blank';
                link.click();
                newOutput += 'Downloaded\n';
                break;
        
            case 'cd':
                newOutput += "\n Mehul's Portfolio/ \n";
                break;
        
            case 'help':
                newOutput += '\nAvailable Commands:\n';
                newOutput += '- antics: List all projects.\n';
                newOutput += '- funfacts: Know about Mehul Bansal.\n';
                newOutput += '- superpowers: View Mehul Bansal\'s skills.\n';
                newOutput += '- journeys: Explore Mehul Bansal\'s work experience.\n';
                newOutput += '- resume: Download my resume.\n';
                newOutput += '- plain: Clear the terminal.\n';
                newOutput += '- exit: Close the terminal.\n';
                break;
        
            case 'plain':
                newOutput = '';
                break;
        
            case 'exit':
                window.location.href = '/';
                break;
        
            default:
                newOutput += '\nCommand not found. Type "help" for assistance.\n';
                break;
        }        

        setOutput(newOutput);
        setInput('');

        scrollToBottom();
    };

    const scrollToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    return (
        <div className='terminalsection' onClick={() => inputRef.current.focus()}>
            <div className='terminal' ref={terminalRef}>
                <div>Welcome to Mehul's Terminal!</div>
                <div>Type 'help' for assistance.</div>
                <div>{output}</div>
                &nbsp;
                <div>mehul@mehul ~ $<input
                    ref={inputRef}
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleCommand();
                        }
                    }}
                /></div>
            </div>
        </div>
    );
};

export default Terminal;
