import React from 'react'
import './blog.css'
import { IoBookSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <section className="blogs">
      <div className="mainheading">
        <div className="mainbgheading">MY BLOGS</div>
        <div className="mainfrontheading">BLOGS</div>
      </div>
        <div className="blog-div">
        <div className="blog-post">
            <Link href='/blogs/web2'>
            <img src='/images/first.avif'/>
            <div className="blog-info">
                <div className='blog-heading'>Exploring Web2: The Evolution of the Modern Web</div>
                <div className="preview">Web2 represents the transformative era of the internet where static web pages evolved into dynamic, user-driven platforms....</div>
                <div className="blogger">Mehul Bansal</div>
                <div className="meta">
                    <div className="timeread"><IoBookSharp />10 min read</div>
                    <div className="date"><CiCalendarDate />17/06/2024</div>
                </div>
                <button className="read-more">Read More</button>
            </div>
            </Link>
        </div>
        <div className="blog-post">
            <Link href='/blogs/technology'>
            <img src='/images/second.webp'/>
            <div className="blog-info">
                <div className='blog-heading'>Top Technology Trends in 2024: A Look into the Future</div>
                <div className="preview">Technology continues to evolve rapidly, shaping industries and revolutionizing the way we live and work....</div>
                <div className="blogger">Mehul Bansal</div>
                <div className="meta">
                    <div className="timeread"><IoBookSharp />3 min read</div>
                    <div className="date"><CiCalendarDate />17/06/2024</div>
                </div>
                <button className="read-more">Read More</button>
            </div>
            </Link>
        </div>
        <div className="blog-post">
            <Link href='/blogs/blockchain'>
            <img src='/images/block.avif'/>
            <div className="blog-info">
                <div className='blog-heading'>Blockchain Development: Transforming Industries with Decentralized Solutions</div>
                <div className="preview">Blockchain technology has emerged as a revolutionary force, disrupting traditional industries with its decentralized and transparent approach....</div>
                <div className="blogger">Mehul Bansal</div>
                <div className="meta">
                    <div className="timeread"><IoBookSharp />5 min read</div>
                    <div className="date"><CiCalendarDate />17/06/2024</div>
                </div>
                <button className="read-more">Read More</button>
            </div>
            </Link>
        </div>
        </div>
      </section>
    </div>
  )
}

export default page
