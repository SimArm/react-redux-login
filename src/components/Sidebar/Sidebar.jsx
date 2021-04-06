import React from 'react';
import './Sidebar.scss';
import logo from '../../constants/logo.png';
import switchImage from '../../constants/image.png';

const Sidebar = () => {
    return (
        <div className='sidebarWrapper'>
            <div><img src={logo} alt='Logo'/></div>
            <div><img src={switchImage} alt='switch image' /></div>
        </div>
    );
}

export default Sidebar;