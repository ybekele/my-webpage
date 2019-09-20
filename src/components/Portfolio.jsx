import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';


export default class Portfolio extends Component {
    render() {
        return (
            <Container>
                
                    <Jumbotron>
                        <h2> Portfolio </h2>
                        <p> A collection of some of the cool projects I've been apart of! </p>
                        
                    </Jumbotron>
                    <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Jumbotron>
                        <h5> Online Video Interview System </h5>
                        <p> The Online Video Interview System is a web application that will allow video interviews to be conducted by the University of Alberta for potential Graduate Students. Each interview is a unique experience tailored to each user based on their applications.</p>
                        
                        </Jumbotron>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <iframe width="100%" height="90%" src='https://www.youtube.com/embed/0QQqfyDGqRA'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Jumbotron>
                        <h5> Tools & Contributions </h5>
                        <p> Front End: Javascript, CSS, Bootstrap Framework</p>
                        <p> Back End: Django & Python </p>
                        <p> Deployed on a Cybera server, used the Natural Language Processing tools NLTK & spaCy  </p>
                        <p> My main contributions on this project were on the backend and the algorithms that use NLP tools to give a unique interview.  </p>
                        <p> I was 1 of 2 people from the team hired to continue further development so I got to be familiar with both the Front-End and Back-End</p>
                        
                        </Jumbotron>
                        </Col>


                        <Col xs={12} sm={4} className="person-wrapper">
                        <Jumbotron>
                        <h5> FriendZone </h5>
                        <p> Friendzone is a social web app that allows you to connect to other authors in similarly set up social websites. </p>
                        
                        </Jumbotron>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <iframe width="100%" height="90%" src='https://www.youtube.com/embed/Coq5Z20sqmc'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Jumbotron>
                        <h5> Tools & Contributions </h5>
                        <p> Front End: React JS </p>
                        <p> Back End: Django & Python </p>
                        <p> Deployed on Heroku Cloud Application platform</p>
                        <p> My main focus was on the passing of data between the back end and the front end. This was my first time using React, and I learned a lot about React, Django API and connecting the two together  </p>
                        
                        </Jumbotron>
                        </Col>


                        <Col xs={12} sm={4} className="person-wrapper">
                        <Jumbotron>
                        <h5> HabiTrack </h5>
                        <p> HabiTrack is an Android app that allows users to track their habits in cool & innovative ways! </p>
                        
                        </Jumbotron>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <iframe width="100%" height="90%" src="https://www.youtube.com/embed/iRYMjlrQxK0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Jumbotron>
                        <h5> Tools & Contributions </h5>
                        <p>Java using Android Studio, Elastic Search and Google APIs</p>
                        <p> My main role in this project was integrating Front End/Design, Social Features, Twitter API, Unit Testing </p>
                        
                        </Jumbotron>
                        </Col>
                        
                    </Row>
                   
                    
                </Container>
        )
    }
}
