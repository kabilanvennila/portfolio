import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import CollectionsBookmarkSharpIcon from '@material-ui/icons/CollectionsBookmarkSharp';
import ComputerIcon from '@material-ui/icons/Computer';

class Res extends React.Component {
  render() {
    return (
      <section
        id="research"
        className="research-mf sect-pt5 route"
        style={{backgroundColor :"#050505" }}

      >
        <div className="container">
        <div className="box-shadow-dull">
        <h3  style={{color:"white" ,textAlign:"center"}}>My Research</h3>
        <div className="line-mf"></div>
             <VerticalTimeline>
                 <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Apr 2022"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    icon={<ComputerIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Covid Study</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ongoing</h4>
                    <p>
                    Machine learning
                    </p>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2021"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Ongoing</h3>
                    <h4 className="vertical-timeline-element-subtitle">Research</h4>
                    <p>
                    Machine learning
                    </p>
                </VerticalTimelineElement> */}
                
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#000' }}
                    icon={<CollectionsBookmarkSharpIcon />}
                />
                </VerticalTimeline>    
        </div>
        </div>
      </section>
    );
  }
}

export default Res;
