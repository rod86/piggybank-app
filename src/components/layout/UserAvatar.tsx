import React from 'react';
import { PersonCircle } from 'react-bootstrap-icons';

interface UserAvatarProps {
    name: string
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name }) => (
    <div className="d-flex flex-row align-items-center text-white">
        <div className="mr-3">
            <PersonCircle size={40} />
        </div>
        <div>
            <span className="font-weight-bold">{name}</span>
            <a href="#" className="d-block">
                Logout
            </a>
        </div>
    </div>
);

export default UserAvatar;
