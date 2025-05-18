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
                newOutput += '\nList of Projects:\n';
                newOutput += '1. CRYPSUP\n   - Description: Dual-platform for creators and supporters with Ethereum-powered cryptocurrency transactions.\n\n';
                newOutput += '2. Joust Website\n   - Description: Fully responsive website for a college event.\n\n';
                newOutput += '3. DU Literature Fest\n   - Description: Responsive, content-rich site for literary enthusiasts.\n\n';
                newOutput += '4. Vehicle Optimization Software\n   - Description: Software in C++ to manage car info and service queues.\n\n';
                newOutput += '5. Blogify\n   - Description: Blog platform with admin controls.\n\n';
                break;
            case 'plain':
                newOutput = ' ';
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
                newOutput += '- plain: Clear the terminal.\n';
                newOutput += '- resume: download my resume.\n';
                newOutput += '- exit: Close the terminal.\n';
                break;
            case 'funfacts':
                newOutput += '\nAbout Me:\n';
                newOutput += 'I\'m Mehul Bansal, your friendly neighborhood code whisperer, and a B.Tech. Computer Science student from Jaypee Institute of Information Technology. I\'m passionate about technology and enjoy creating innovative solutions.\n\n';
                break;
            case 'superpowers':
                newOutput += '\nSkills:\n';
                newOutput += '- Programming Languages: C++, JavaScript\n';
                newOutput += '- Web Development: HTML, CSS, React.js, Node.js, Express\n';
                newOutput += '- Databases: MongoDB, MySQL\n';
                newOutput += '- Blockchain: Ethereum, Solidity\n';
                break;
            case 'journeys':
                newOutput += '\nExperience:\n';
                newOutput += '- Web Development Intern at Optica: Developed and maintained web projects, organized events.\n';
                newOutput += '- Hackathon Runner-up at BitBox 4.0: Demonstrated problem-solving skills in a competitive coding environment.\n';
                newOutput += '- Open Source Contributor: Active member of Open Source Developers Community (OSDC), organized hackathons like CodeJam.\n';
                break;
            case 'resume':
                newOutput += '\nDownloading Resume...\n';
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/drive/folders/1SJlRr5LFHsFmIVeLyOZtb9dHZDD-BRo4';
                link.download = 'Mehul Bansal.pdf';
                link.target = '_blank';
                link.click();
                newOutput += 'Downloaded\n';
                break;
            case 'exit':
                window.location.href = '/'
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
