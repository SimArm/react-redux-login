import React from 'react';
import './MainPanel.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPanel = () => {
    const user = useSelector(state => state.Users);
    const isLogged = useSelector(state => state.isLogged);

    const history = useHistory();

    return (
        <div className='mainWrapper'>
            {!isLogged && history.push('./')}
            <div>
                <h1>Success</h1>
                <p>Logged in as <b>{user[0].name}</b></p>
            </div>    
        </div>
    );
}

export default MainPanel;