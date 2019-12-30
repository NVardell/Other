import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from "reactstrap";

import './App.css';
import Home from "./components/home/Home";
import GroupList from "./components/group/GroupList";
import GroupEdit from "./components/group/GroupEdit";
import ModifyGroups from "./components/group/ModifyGroups";
import AppNavigation from "./components/nav/AppNavigation";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <AppNavigation />
                    <Container fluid>
                    <Switch>
                        <Route path='/' exact={true} component={Home}/>
                        <Route path='/groups' exact={true} component={GroupList}/>
                        <Route path='/groups/:id' component={GroupEdit}/>
                        <Route path='/groups_2' component={ModifyGroups}/>
                    </Switch>
                    </Container>
                </Router>
            </>

        )
    }
}

export default App;

