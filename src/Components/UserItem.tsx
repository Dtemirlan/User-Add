import React from 'react';
import '../App.css'


interface User {
    name: string;
    email: string;
    isActive: boolean;
    role: string;
}

interface UserItemProps {
    user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <div className="card mb-3">
            <div className="card-body ">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Активен: {user.isActive ? 'Да' : 'Нет'}</p>
                <p className="card-text">Роль: {user.role}</p>
            </div>
        </div>
    );
};

export default UserItem;
