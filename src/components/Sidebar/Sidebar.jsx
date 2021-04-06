import React from 'react';
import './Sidebar.scss';
import logo from '../../constants/logo.png';
import switchImage from '../../constants/image.png';

const Sidebar = () => {
    return (
        <div className='sidebarWrapper'>
            <div className='imagesWrapper column'>
                <div><img src={logo} alt='Logo'/></div>
                <div className='switchImage'><img src={switchImage} alt='switch image' /></div>
            </div>
            <span className='fadeLine column'></span>
        </div>
    );
}

export default Sidebar;