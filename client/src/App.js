import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                        <Link to="/">Home</Link>
                        <Link to="/otherpage">Other Page</Link>
                        <p>
                            <div>
                                <Route exact path='/' component={Fib}/>
                                <Route exact path='/otherpage' component={OtherPage}/>
                            </div>
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </Router>
        );
    }
}

export default App;
