import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Forms extends React.Component{
    render(){
        return(
            <Form className="w-50 mx-auto">
                <h3>Fill before you leave!</h3>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <FormControl type="email" placeholder="Enter Email"/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        );
    }
}

export default Forms;