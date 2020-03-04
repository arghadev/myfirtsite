import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Forms from './Form';

function PersonLoop(props){
    const listPerson = props.personLoop.map((person, i) =>
        <Col sm={4} className="text-center" id={"personcunt" + i} key={i}>
            <figure><img src={person.image} alt=""/></figure>
            <h4>{person.name}</h4>
            <p>Age: {person.age}</p>
            <p>Proffassion: <strong>{person.about}</strong></p>
        </Col>
    )
    return (
        <div className="row">
            {listPerson}
        </div>
    )
}

class Contact extends Component{
    
    render() {
        //console.log(this.props.personName);
        return(
            <div className="personInfo">
                <Container>
                    <Row>
                        <PersonLoop personLoop={this.props.personName} />
                    </Row>
                </Container>
                <div className="bg-light py-5">
                    <Forms />
                </div>
            </div>
        )
    }
}

export default Contact;