import React from 'react';
import Layout from '@layouts/Layout';
import CenteredCard from '@components/layout/CenteredCard';
import LoginForm from '@components/login/LoginForm';

const LoginPage: React.FC = () => (
    <Layout hideUserAvatar>
        <CenteredCard title="Login">
            <LoginForm />
        </CenteredCard>
    </Layout>
);

export default LoginPage;
