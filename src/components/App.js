import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import News from './News';
import CustomNavbar from './CustomNavbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Router>
                <div>
                    <CustomNavbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/News" component={News} />
                </div>
            </Router>
        )
    }

}

export default App