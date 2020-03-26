import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Profil from "../../App/page1/profil";
import Data from "../../App/page2/Data";

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Profil}/>
                <Route path="/card" component={Data}/>
            </Switch>
        );
    }
}

export default Router;