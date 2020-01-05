import React, {Component} from 'react';
import '../../App.css';
import {Card, CardHeader} from "reactstrap";
import GroupList from "./GroupList";
import GroupEdit2 from "./GroupEdit2";

class ModifyGroups extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Formik Form</CardHeader>
                    <GroupEdit2/>
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