import React from 'react';
import Layout from '@layouts/Layout';
import PaymentsList from '@components/payments/PaymentsList';

const HomePage: React.FC = () => (
    <Layout>
        <h1>Pagos</h1>
        <PaymentsList />
    </Layout>
);

export default HomePage;
