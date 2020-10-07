import React, { useState, useEffect } from 'react';
import Layout from '@layouts/Layout';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { Row, Col, Badge, Button } from 'react-bootstrap';

// api 
const fetchPayment: any = () => {
    return { id: 1, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'pending' };
};

type PaymentPageParams = {
    id: string
}

const PaymentPage: React.FC<RouteComponentProps<PaymentPageParams>> = () => {
    const [payment, setPayment] = useState(null);

    const { id } = useParams<PaymentPageParams>();

    useEffect(() => {
        const payment = fetchPayment();
        setPayment(payment);
    }, []);

    if (payment === null) {
        return (<div>Payment not loaded</div>);
    }

    return (
        <Layout>
            <Row>
                <Col>
                    <h1>Pago #{id}</h1>
                </Col>
                <Col className="text-right text-md-left">
                    <Button variant="secondary">
                        Back
                    </Button>
                </Col>
            </Row>

            <Row as="dl">
                <Col md={3} as="dt">Id</Col>
                <Col md={9} as="dd">{payment.id}</Col>

                <Col md={3} as="dt">Concepto</Col>
                <Col md={9} as="dd">{payment.concept}</Col>
                
                <Col md={3} as="dt">Estado</Col>
                <Col md={9} as="dd">
                {payment.status === 'paid' ? (
                    <Badge pill variant="success" className="lg py-1 px-2">
                        Paid
                    </Badge>
                ) : (
                    <Badge pill variant="warning" className="lg py-1 px-2">
                        Pending
                    </Badge>
                )}
                </Col>

                <Col md={3} as="dt">Cantidad</Col>
                <Col md={9} as="dd">{payment.amount} €</Col>

                <Col md={3} as="dt">Creado En</Col>
                <Col md={9} as="dd">{payment.createdAt}</Col>

                <Col md={3} as="dt">Actualizado En</Col>
                <Col md={9} as="dd">{payment.updatedAt}</Col>
            </Row>
                    
            <Row>
                <Col md={{offset: 2}} className="text-center text-md-left">
                    <Button variant="warning" size="lg">
                       Pay
                    </Button>
                </Col>
            </Row>
        </Layout>
    )
};

export default PaymentPage;
