import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import Particles from 'react-particles-js';
import './Homepage.css'

// Particle resource : https://www.youtube.com/watch?v=MD5Uy0GJA7U&t=
const particleOpt = {
    particles: {
        number: {
            value: 150, 
            density: {
                enable: true, 
                value_area: 800
            }
        }
    }
}
export default class Homepage extends Component {
    render() {
        return (
            <div> 
                <div className="aboutText"> 
                <Container>
                
                    <Jumbotron>
                        <h2> Yonael Bekele </h2>
                        <p> Student & Research Assistant at the University of Alberta </p>
                        <Link to="/about">
                         {/* TODO: Add styling to button later */}
                        <Button> About</Button>
                    </Link>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                            {/* <Image src="assets/headshot.jpg" circle className="profile-pic" /> */}
                        </Col>
                    </Row>
                    
                </Container>
                </div>
            <div className="Background"> 
                <Particles 
                    params={particleOpt} />
                    </div>
                
            </div>
        )
    }
}



