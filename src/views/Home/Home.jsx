import React from 'react';
import './Home.scss';
import Sidebar from '../../components/Sidebar';
import MainPanel from '../../components/MainPanel';

const Home = () => {
    return (
        <div>
            <Sidebar />
            <MainPanel />
        </div>
    );
}

export default Home;