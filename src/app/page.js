'use client';
import user from '../../public/images/mehul.jpeg'
import Image from 'next/image'
import { MdDownloading } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Link href='/projects' className='homePageColorDiv themes'>Projects</Link>
      <section className='homePage'>
          <div className='wrapper'>      
              <div className='imgWrap'>
                <Image src={user} alt="mehul bansal profile image" />
              </div>  
              <div className='mehulintro'>
              <h1 className='text-white fw-bold heading'><span className='name d-block'>HELLO,I'M MEHUL BANSAL</span>
                <TypeAnimation
                  sequence={[
                    'WEB DEVELOPER',
                    2000,
                    'WEB DESIGNER',
                    2000,
                    'BLOCKCHAIN DEV.',
                    1000,
                  ]}
                  wrapper="span"
                  speed={20}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </h1>
              <p className='about'>Hey there, code enthusiasts! As a tech wizard with a flair for React, Node.js, and blockchain, I've conjured up projects like CRYPSUP, where creators meet Ethereum, and Blogify, the blog site that practically writes itself (okay, not really). I scored the runner-up spot at Hackathon BitBox 4.0 – proof that my coding skills are better than my dance moves. When I'm not coding, I'm organizing hackathons with the Open Source Developers Community. Let's build something so amazing, even your computer will high-five you!</p>
              <div className='homepagebuttons'>            
                <button className="button btn">
                  <Link href='/about'>Read More</Link>
                  <span className='icon'><Link href='/about'><FaArrowRight /></Link></span>
                </button> 
                <button className="button btn">
                  <a href='https://drive.google.com/file/d/1RpeW9XfHFapJCGftXyscP-sMgyl51Fpv/view?usp=drive_link' className='clickable'>Download Resume</a>
                  <span className='icon'>
                    <a href='https://drive.google.com/file/d/1RpeW9XfHFapJCGftXyscP-sMgyl51Fpv/view?usp=drive_link' className='clickable'><MdDownloading />
                    </a>
                  </span>
                </button>       
            </div>
              </div>
          </div>
      </section>
    </>
  );
}
