import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import PaymentPage from '@pages/PaymentPage';
import UsersPage from '@pages/UsersPage';
import NotFoundPage from '@pages/NotFoundPage';
import '@assets/styles/main.scss';


const App: React.FC = () => {
    return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/users" component={UsersPage} />
                    <Route path="/payment/:id" component={PaymentPage} />
                </Switch>
            </Router>
    );
};

export default App;