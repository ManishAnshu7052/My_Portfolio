import React from 'react';
import './Techstack.css';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';
import { TechstackList } from '../../utils/TechstackList';

function Techstack() {
  return (
    <>
      <div className="container techstack" id='tech'>
      <Tada>
        <h2 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h2>
        <hr/>
        <p className='pb-3 text-center'>👉 including programming Language, framework, database, front-end and back-end tools, and APIs</p>
        </Tada>
        <div className="row">
        {TechstackList.map(tech =>(
          <Fade left>
          <div key={tech._id} className="col-md-3">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                  <div className="alig-self-center">
                  <tech.icon className='tech-icon'/>
                  </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        ))}
      </div>
      </div>
      
    </>
  )
}

export default Techstack
