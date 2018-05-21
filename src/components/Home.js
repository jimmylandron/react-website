import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <Grid>                
                <Jumbotron>
                    <h2>Welcome to my website</h2>
                    <p>This site was built with React, React-Router and React-Bootstrap</p>

                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                    <Link to="/news">
                        <Button bsStyle="primary">News</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" circle className="profile-pic" />
                        <h3>Vanessa</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" circle className="profile-pic" />
                        <h3>Riff</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home