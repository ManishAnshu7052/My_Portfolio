import React from 'react'
import './Projects.css'
import Fade from 'react-reveal/Fade';
import Picture from '../../assets/images/project1.png'

export default function Projects() {
  return (
    <>
      <div className=" project" id='project'>
      <h2 className='col-12 mt-3 mb-1 text-center'>Top Recent Projects</h2>
        <hr/>
        <p className='pb-3  text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, veritatis dolorum officia esse culpa inventore eos nihil maxime reiciendis ratione, eaque aliquid saepe consequatur dolore repellat beatae ut illum facilis doloribus sapiente, voluptatem laboriosam soluta quaerat? Obcaecati veritatis, dolorem et beatae non distinctio iste tempora expedita sint porro corporis odit!</p>
        <div className="row" id='ads'>
        <Fade>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={Picture} alt="project 1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="crad-dadge">HTML</span>
                        <span className="crad-dadge">CSS</span>
                        <span className="crad-dadge">Bootstrap</span>
                        <span className="crad-dadge">Java</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className='text-uppercase'>Blood Bank Website</h5>
                        </div>
                        <a className='ad-btn' href="#">View All Projects</a>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={Picture} alt="project 1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="crad-dadge">Node</span>
                        <span className="crad-dadge">Express</span>
                        <span className="crad-dadge">React</span>
                        <span className="crad-dadge">MongoDB</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className='text-uppercase'>Blood Bank Website</h5>
                        </div>
                        <a className='ad-btn' href="#">View All Projects</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={Picture} alt="project 1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="crad-dadge">Node</span>
                        <span className="crad-dadge">Express</span>
                        <span className="crad-dadge">React</span>
                        <span className="crad-dadge">MongoDB</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className='text-uppercase'>Blood Bank Website</h5>
                        </div>
                        <a className='ad-btn' href="#">View All Projects</a>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
        
      </div>
    </>
  )
}
