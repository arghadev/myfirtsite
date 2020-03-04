import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutImage from '../Assets/steve-halama.jpg'
//import $ from 'jquery';

class About extends Component{

    //https://ghibliapi.herokuapp.com/films
    render(){
        return(
            <div>
                <Container>
                    <h2 className="page-title mb-5">About</h2>
                    <div className="about-content">
                        <Row>
                            <Col sm={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper feugiat. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Tempus egestas sed sed risus pretium. Morbi leo urna molestie at elementum eu facilisis sed odio. Tincidunt arcu non sodales neque sodales ut etiam sit. Faucibus a pellentesque sit amet porttitor eget. Sed euismod nisi porta lorem mollis aliquam ut. Dictumst quisque sagittis purus sit amet volutpat. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Orci sagittis eu volutpat odio facilisis mauris.
        
                                Mauris in aliquam sem fringilla ut morbi tincidunt augue. Sem viverra aliquet eget sit. Quam adipiscing vitae proin sagittis nisl rhoncus. Diam in arcu cursus euismod. Tortor pretium viverra suspendisse potenti nullam ac. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Parturient montes nascetur ridiculus mus. Dignissim enim sit amet venenatis urna cursus eget. Arcu dictum varius duis at consectetur lorem donec massa. Sodales ut etiam sit amet nisl. Sem integer vitae justo eget magna fermentum iaculis. Ornare quam viverra orci sagittis. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Justo nec ultrices dui sapien eget mi proin sed.</p>
                            </Col>
                            <Col sm={6}>
                                <img src={AboutImage} alt="Demo Film" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default About;