import React, { useState, useEffect } from 'react';
import { Table, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaymentStatusLabel from './PaymentStatusLabel'; 
import Loader from '@components/Loader';
import { getPayments } from '@lib/payments-api/payments-api';
import { Payment } from '@lib/payments-api/payment';


const PaymentsList: React.FC = () => {
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await getPayments();
                setError(null);
                setPayments(response);
            } catch (e: any) {
                setError(e.message);
            }
        })();
    }, []);

    if (!payments.length && error == null) {
        return <Loader />;
    } else if (error !== null) {
        return <Alert variant="danger">{error}</Alert>;
    }
    
    return (
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
            {payments.map((payment: Payment) => (
                <tr key={payment.id}>
                    <td>{payment.concept}</td>
                    <td>{payment.amount} €</td>
                    <td>
                        <PaymentStatusLabel status={payment.status} />
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
    );
};

export default PaymentsList;
