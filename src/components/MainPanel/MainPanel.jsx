import React from 'react';
import './MainPanel.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPanel = () => {
    const user = useSelector(state => state.Users);
    const isLogged = useSelector(state => state.isLogged);

    const history = useHistory();

    return (
        <div>
            {!isLogged && history.push('./')}
            <h1>Success</h1>
            <p>Logged in as <b>{user[0].name}</b></p>
        </div>
    );
}

export default MainPanel;