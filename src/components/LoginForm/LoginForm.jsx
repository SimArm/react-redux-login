import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signedIn } from '../../actions';
import './LoginForm.scss';

const LoginForm = () => {
    const user = useSelector(state => state.Users);
    const dispatch = useDispatch();
    const history = useHistory();

    const [nameValue, setName] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [isError, setError] = useState(false);

    const errorClasses = isError ? 'errorMessage' : 'nonDisplayed';

    const updateName = (event) => {
        const { value } = event.target;
        setName(value);
    }

    const updatePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    }

    const onLogin = () => {
        nameValue === user[0].name && passwordValue === user[0].password ?
        dispatch(signedIn()) && history.push('./home')
        : setError(true);
    }

    return (
        <div clasName='loginWrapper'>
            <div className='loginContent'>
            <h1>Login</h1>
            <p className={errorClasses}>Name and password do not match</p>
            <form className='formWrapper'>
                <label htmlFor='Name' className={nameValue == '' ? 'hidden' : 'label'}>Name</label>
                <input type='text' id='Name' placeholder='Name' value={nameValue} onChange={updateName}></input>
                <label htmlFor='Password' className={passwordValue == '' ? 'hidden' : 'label'}>Password</label>
                <input type='password' id='Password' placeholder='Password' value={passwordValue} onChange={updatePassword}/>
            </form> 
            </div>
            <div className='buttonWrapper'>
                <button onClick={onLogin}>Next</button>    
            </div>    
        </div>
    );
}

export default LoginForm;