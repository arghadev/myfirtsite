import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="site-footer bg-dark py-3">
                <Container>
                    <p className="text-white mb-0 text-center text-sm">© 2020. All rights reserved. </p>
                </Container>
            </div>
        )
    }
}

export default Footer;