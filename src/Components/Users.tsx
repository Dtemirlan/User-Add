import React from 'react';
import UserItem from './UserItem';
import '../App.css'


interface User {
    name: string;
    email: string;
    isActive: boolean;
    role: string;
}

interface UsersProps {
    users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
    return (
        <div>
            <h2>Пользователи</h2>
            {users.map((user, index) => (
                <UserItem key={index} user={user} />
            ))}
        </div>
    );
};

export default Users;
