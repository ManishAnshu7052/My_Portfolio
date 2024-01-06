import React from 'react'
import {IoMdSchool} from "react-icons/io"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'

export default function Education() {
  return (
    <>
      <div className=" education" id='education'>
      <h2 className='col-12 mt-3 mb-1 text-center'>Education</h2>
        <hr/>
      
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BCA</h3>
    <h4 className="vertical-timeline-element-subtitle">Sam Higginbuttom University of Technology</h4>
    
  </VerticalTimelineElement>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Full MERN Stack Development</h3>
    <h4 className="vertical-timeline-element-subtitle">MentorKart</h4>
    
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </>
  )
}
