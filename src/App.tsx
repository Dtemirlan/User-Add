import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './Components/UserForm.tsx';
import Users from './Components/Users.tsx';

const App: React.FC = () => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
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
