import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => (
    <footer className="text-white-50">
        <Container>
            <Row>
                <Col>
                    &copy; Piggy Bank 2020
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
