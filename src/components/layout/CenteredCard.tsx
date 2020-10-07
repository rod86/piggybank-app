import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

interface CenteredCardProps {
    children: React.ReactNode;
    title?: string; 
}

const CenteredCard: React.FC<CenteredCardProps> = ({ children, title = null }) => (
    <Row className="d-flex justify-content-center" noGutters>
        <Col md="5">
            <Card className="mt-md-5">
                {title ? <Card.Header className="h2 text-center">{title}</Card.Header> : ''}
                <Card.Body className={'px-4 ' + (title ? 'pt-4 pb-5' : 'p-5')}>
                    {children}
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default CenteredCard;
