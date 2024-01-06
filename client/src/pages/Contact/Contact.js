import React from 'react'
import './Contact.css'
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'

export default function Contact() {
  return (
    <>
      <div className=" contact" id='contact'>
        <div className="card card0 border-0">
        <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-21">
                
                    <div className="card1">
                        <div className="row border-line">
                            <img className="image"src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais" alt="contact" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-md-6">
                    <div className="card2 d-flex card 
                    border-0 px-4 py-4">
                    <div className="row">
                      <div className="row">
                      <h6>Contact With 
                      <BsLinkedin color='blue' size={30} className='ms-2'/>
                      <BsGithub color='black' size={30} className='ms-2'/>
                      <BsFacebook color='blue' size={30} className='ms-2'/>
                      </h6>
                      </div>
                      
                      <div className="row px-3 md-4">
                         <div className="line"/>
                            <small className="or text-center">OR</small>
                            <div className="line"/>
                         </div>
                         <div className="row px-3">
                            <input type="text" name='name' placeholder='Enter your Name' className='mb-3' />
                         </div>
                         <div className="row px-3">
                            <input type="email" name='email' placeholder='Enter your Email' className='mb-3' />
                         </div>
                         <div className="row px-3">
                            <textarea type="text" name='msg' placeholder='Write your Message' className='mb-3' />
                         </div>
                         <div className="row ">
                            <button className='button' type='submit'>SEND MESSAGE</button>
                         </div>
                      </div>                    
                      </div>
                      </div>
                </div>
            </div>
        </div>
      
    </>
  )
}
