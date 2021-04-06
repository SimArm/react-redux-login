import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div clasName='loginWrapper'>
            <h1>Login</h1>
            <form>
                <label htmlFor='Name'>Name</label>
                <input type='text' id='Name' placeholder='Name'></input>
                <label htmlFor='Password'>Password</label>
                <input type='password' id='Password' placeholder='Password'/>
            </form>
            <button>Next</button>
        </div>
    );
}

export default LoginForm;