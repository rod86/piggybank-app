import React from 'react';
import Layout from '@layouts/Layout';
import { Row, Col } from 'react-bootstrap';

const NotFoundPage: React.FC = () => (
    <Layout hideUserAvatar>
        <Row className="d-flex justify-content-center" noGutters>
            <Col>
                <h1 className="display-4">Page Not Found</h1>
            </Col>
        </Row>
    </Layout>
);

export default NotFoundPage;
