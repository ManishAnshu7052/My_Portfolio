import React from 'react'
import './About.css';
import Jump from 'react-reveal/Jump';
import Picture from '../../assets/images/mp3.jpg';

export default function About() {
  return (
    <>
    <Jump>
     <div className="about" id='about'>
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src={Picture} alt="profile" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>I'm Manish Kumar Patel, I am from Allahabad, Utter Pradesh. I'm graduate of BCA(Bachler of Computer Application) from Sam Higginbottom University of Agriculture, Technology And Sciences.I have complete three month training in Front-End web Development from Newton School and Full MERN Stack development From MentorKart</p>
            </div>
        </div>
     </div> 
     </Jump>
    </>
  )
}
