import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '@assets/img/logo.png';
import { Container } from 'react-bootstrap';
import UserAvatar from '@components/layout/UserAvatar';
import Footer from '@components/layout/Footer';

interface LayoutProps {
    children: React.ReactNode;
    hideUserAvatar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideUserAvatar = false }) => {    
    return (
        <React.Fragment>
            <Navbar variant="dark" className="px-5 py-3">
                <Navbar.Brand href="/">
                    <img src={LogoImg} alt="Piggy Bank" />
                </Navbar.Brand>
                {!hideUserAvatar ? (
                    <Navbar.Collapse className="justify-content-end">
                        <UserAvatar name="Mark Otto" />
                    </Navbar.Collapse> 
                ): ''}
            </Navbar>
            <main role="main">
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;