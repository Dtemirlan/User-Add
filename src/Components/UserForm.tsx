import React, { useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


interface User {
    name: string;
    email: string;
    isActive: boolean;
    role: string;
}

interface UserFormProps {
    addUser: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        isActive: false,
        role: 'user',
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        let inputValue: string | boolean = value;

        if (type === 'checkbox') {
            inputValue = (e.target as HTMLInputElement).checked;
        }

        setUser({
            ...user,
            [name]: inputValue,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addUser(user);
        setUser({
            name: '',
            email: '',
            isActive: false,
            role: 'user',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Имя</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="isActive"
                    checked={user.isActive}
                    onChange={handleInputChange}
                />
                <label className="form-check-label">Активен</label>
            </div>
            <div className="mb-3">
                <label className="form-label">Роль</label>
                <select
                    className="form-select"
                    name="role"
                    value={user.role}
                    onChange={handleInputChange}
                >
                    <option value="user">Пользователь</option>
                    <option value="editor">Редактор</option>
                    <option value="admin">Администратор</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                Создать пользователя
            </button>
        </form>
    );
};

export default UserForm;
