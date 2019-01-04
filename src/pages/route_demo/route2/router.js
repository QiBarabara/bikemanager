import React from 'react';
import {HashRouter as Router,Route} from "react-router-dom";
import Main from "../route1/Main";
import Topic from "../route1/topic";
import About from "../route1/about";
import Home from './Home';

export default class IRoute extends React.Component{
    render() {
        return (
            <Router>
                <Route>
                    <Home>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/topics" component={Topic} />
                        <Route exact path="/about" component={About} />
                    </Home>
                </Route>
            </Router>
        );
    }
}