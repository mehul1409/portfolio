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
                  'FULLSTACK DEVELOPER',
                  2000,
                  'NODE.JS DEVELOPER',
                  2000,
                ]}
                wrapper="span"
                speed={20}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
            <p className='about'>Hey there, code enthusiasts! Full-stack developer with a strong focus on backend systems, cloud architecture, and blockchain integration. Experienced in Node.js, React.js, MongoDB, Docker, and AWS (EC2, S3, Lambda, ECR, SQS, SNS). Built scalable platforms like CampusSociety, VerbalEx, and Crypsup (Runner-up @ BitBox 4.0). Contributor to Web3 with wallet-gated portfolio and ETH donation feature. Active in tech leadership as Program Coordinator (DSC) and Technical Coordinator (CICE). Passionate about building event-driven, modular, and secure systems.</p>
            <div className='homepagebuttons'>
              <button className="button btn">
                <Link href='/about'>Read More</Link>
                <span className='icon'><Link href='/about'><FaArrowRight /></Link></span>
              </button>
              <button className="button btn">
                <a href='https://drive.google.com/uc?export=download&id=11nvgoMzg7-vDSrsbC5Qpv0GOVyS_C3jJ' className='clickable'>Download Resume</a>
                <span className='icon'>
                  <a
                    href="https://drive.google.com/uc?export=download&id=11nvgoMzg7-vDSrsbC5Qpv0GOVyS_C3jJ"
                    className="clickable"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <MdDownloading />
                    </span>
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
