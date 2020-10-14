import React, { useState, useEffect } from 'react';
import Layout from '@layouts/Layout';
import fetch from 'node-fetch';

interface User {
    name: string;
    age: string;
}

const getUsers = (): Promise<User[]> => {
    return fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(res => res as User[]);
};

const user2Text = (u: User): string => {
    return `${u.name}, ${u.age}`;
}

const HomePage: React.FC = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await getUsers();
            console.log(response);
            setUsers(response);
        })();
    }, []);

    return (
        <Layout>
            <h1>Users</h1>
            {users.map((user: User, index: number) => (
                <div key={index}>{user2Text(user)}</div>
            ))}
        </Layout>
    )
};

export default HomePage;
