import React from 'react';
// import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Form, Col, Row, Button, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';


const Example = (props) => {
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
            </FormGroup>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleCity">City</Label>
                        <Input type="text" name="city" id="exampleCity" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleState">State</Label>
                        <Input type="text" name="state" id="exampleState" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="exampleZip">Zip</Label>
                        <Input type="text" name="zip" id="exampleZip" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>Check me out</Label>
            </FormGroup>
            <Button>Sign in</Button>
            <FormGroup>
                <Label for="exampleEmail">Input without validation</Label>
                <Input />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Valid input</Label>
                <Input valid />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Invalid input</Label>
                <Input invalid />
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Input without validation</Label>
                <Input />
                <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Valid input</Label>
                <Input valid />
                <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Invalid input</Label>
                <Input invalid />
                <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
        </Form>
    );
}

export default Example;

// import React, { Component } from 'react';
// import {
//     Container,
//     Col,
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     Button,
// } from 'reactstrap';

// const ExampleForm = (props) => {
//     return (
//         <Form>
//             <FormGroup>
//                 <Label for="exampleSelect">Select</Label>
//                 <Input type="select" name="select" id="exampleSelect">
//                     <option>1</option>
//                     <option>2</option>
//                     <option>3</option>
//                     <option>4</option>
//                     <option>5</option>
//                 </Input>
//             </FormGroup>
//             <FormGroup>
//                 <Label for="exampleSelectMulti">Select Multiple</Label>
//                 <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//                     <option>1</option>
//                     <option>2</option>
//                     <option>3</option>
//                     <option>4</option>
//                     <option>5</option>
//                 </Input>
//             </FormGroup>
//             <FormGroup>
//                 <Label for="exampleText">Text Area</Label>
//                 <Input type="textarea" name="text" id="exampleText" />
//             </FormGroup>
//             <FormGroup>
//                 <Label for="exampleFile">File</Label>
//                 <Input type="file" name="file" id="exampleFile" />
//                 {/* <FormText color="muted">
//                     This is some placeholder block-level help text for the above input.
//                     It's a bit lighter and easily wraps to a new line.
//         </FormText> */}
//             </FormGroup>
//             <FormGroup tag="fieldset">
//                 <legend>Radio Buttons</legend>
//                 <FormGroup check>
//                     <Label check>
//                         <Input type="radio" name="radio1" />{' '}
//                         Option one is this and that—be sure to include why it's great
//           </Label>
//                 </FormGroup>
//                 <FormGroup check>
//                     <Label check>
//                         <Input type="radio" name="radio1" />{' '}
//                         Option two can be something else and selecting it will deselect option one
//           </Label>
//                 </FormGroup>
//                 <FormGroup check disabled>
//                     <Label check>
//                         <Input type="radio" name="radio1" disabled />{' '}
//                         Option three is disabled
//           </Label>
//                 </FormGroup>
//             </FormGroup>
//             <FormGroup check>
//                 <Label check>
//                     <Input type="checkbox" />{' '}
//                     Check me out
//         </Label>
//             </FormGroup>
//             <Button>Submit</Button>
//         </Form>
//     );
// }

// export default ExampleForm;