import React from 'react';
import '../styles/Footer.css';

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(){
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div id="footer">
                            Designed and built by Vanessa Vasquez
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}