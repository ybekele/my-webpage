import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap'; 

export default class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="jumbo">
                    <h2>About Me</h2>
                <p1> Welcome to my website! I'm expecting to finish my BsC in Computing Science at the University of Alberta in December. 
                    I'm interested in Natural Language Processing & Web Development. I'm hoping to relocate and discover something new and take a step forward in my career as a software developer. 
                    </p1>
                
                <p1>
                    Currently, I work as a Research Assistant at the University of Alberta, primarily working on the development of a Chatbot to aid parents of children with neurodevelopment disorders and other challenges that they may seek online aids from. 
                    We hope that this project can help these individuals avoid harmful advice on the internet, and receive professional resources of a high standard, similar to an experts recommendation.  
                </p1>
                </Jumbotron>
            </div>
        )
    }
}
