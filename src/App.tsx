import React, { useState } from 'react';
import UserForm from './Components/UserForm.tsx';
import Users from './Components/Users.tsx';
import { User } from './Components/types.ts';
import './App.css'

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers([...users, user]);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <UserForm addUser={addUser} />
                </div>
                <div className="col-md-6">
                    <Users users={users} />
                </div>
            </div>
        </div>
    );
};

export default App;
