import React from 'react';
import './LoginScreen.scss';
import Sidebar from '../../components/Sidebar';
import LoginForm from '../../components/LoginForm';

const LoginScreen = () => {
    return (
        <div>
            <Sidebar />
            <LoginForm />
        </div>
    );
}

export default LoginScreen;