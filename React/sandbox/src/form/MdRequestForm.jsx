import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Row
} from 'reactstrap';

class MdRequestForm extends Component {
    render() {
        const options = ['A', 'B'];
        return (
            <Container className="App">
                <h2>Create MD Request</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
        <option>{options}</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>ECI</Label>
                            <Input type="eci" name="eci" placeholder="1234567890"/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>

        );
    }

}

export default MdRequestForm;