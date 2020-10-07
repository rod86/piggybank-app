import React, { useState, useEffect } from 'react';
import Layout from '@layouts/Layout';
import { Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// api 
const fetchPayments: any = () => {
    return [
        { id: 1, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'pending' },
        { id: 2, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'pending' },
        { id: 3, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'paid' },
        { id: 4, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'paid' },
        { id: 5, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'paid' },
        { id: 6, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'paid' },
        { id: 7, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'paid' },
        { id: 8, concept: "Concept X", amount: 1, createdAt: '1111/11/11', updatedAt: '1111/11/11', status: 'paid' },
    ];
};

const HomePage: React.FC = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const payments = fetchPayments();
        setPayments(payments);
    }, []);

    return (
        <Layout>
            <h1>Pagos</h1>

            <Table className="vertical-align-midddle">
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Creado</th>
                        <th>Actualizado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {payments.map(payment => (
                    <tr key={payment.id}>
                        <td>{payment.concept}</td>
                        <td>{payment.amount} €</td>
                        <td>
                            {payment.status === 'paid' ? (
                                <Badge pill variant="success" className="lg py-1 px-2">
                                    Paid
                                </Badge>
                            ) : (
                                <Badge pill variant="warning" className="lg py-1 px-2">
                                    Pending
                                </Badge>
                            )}
                        </td>
                        <td>{payment.createdAt}</td>
                        <td>{payment.updatedAt}</td>
                        <td>
                            <Link to={`/payment/${payment.id}`} className="btn btn-primary btn-sm">
                                Ver
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Layout>
    )
};

export default HomePage;
