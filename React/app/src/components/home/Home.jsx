import React, { Component } from 'react';
import '../../App.css';
import {Card, CardHeader} from "reactstrap";
import RequestEdit from "./RequestEdit";
import RequestList from "./RequestList";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Create Make Decision Request</CardHeader>
                    <RequestEdit/>
                </Card>
                <Card>
                    <CardHeader>List of MD Requests</CardHeader>
                    <RequestList/>
                </Card>
            </div>
        );
    }
}