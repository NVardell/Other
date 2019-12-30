import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class TopNavBar extends Component {
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
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Midas Decision Tool</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
                <Nav className="ml-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/groups">Groups</NavLink>
                    <NavLink href="/groups_2">Groups 2</NavLink>
                </Nav>
        </Navbar>
    }
}