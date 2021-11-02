import React, {Component} from 'react';
import './style.css';
import {
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faLink} from '@fortawesome/free-solid-svg-icons';
import info from './const/project_info.json';
import Lightbox from 'react-image-lightbox';

console.log(info.data);

export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      image:'',
    };
  }

  render() {
    const { photoIndex, isOpen, image } = this.state;
    
    return (
      <Row xl={12} className="main_row">

      {info.data.map(item => ( 
        <Col xl={4}  key={item.id} className="card_col">
        <Card className="card_main">
          <blockquote className="blockquote mb-0 card-body">
            <h2>
            {item.name}
            </h2>
            <footer className="blockquote-footer">
             built using <strong title="Source Title">{item.tools}</strong>
            </footer>
          </blockquote>
          <Card.Body>
          {
            item.link !== false  &&
              <Card.Link href={item.link} target="_blank"><FontAwesomeIcon className="icon" size="lg" icon={faLink}/></Card.Link>
          }
        </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
    );
  }
}
