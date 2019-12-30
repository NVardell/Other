import React, {Component} from 'react';
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";

export default class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <>
            <TopNavBar/>
            <SideNavBar/>
        </>
    }
}