import React, {Component} from 'react';
import '../../App.css';
import {Card, CardHeader} from "reactstrap";
import GroupEdit from "./GroupEdit";
import GroupList from "./GroupList";

class ModifyGroups extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Create Make Decision Request</CardHeader>
                    <GroupEdit/>
                </Card>
                <Card>
                    <CardHeader>List of MD Requests</CardHeader>
                    <GroupList/>
                </Card>
            </div>
        );
    }
}

export default ModifyGroups;