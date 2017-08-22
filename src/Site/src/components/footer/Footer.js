import React, { Component } from 'react';

import logo from '../../images/sky-logo.png';

class Header extends Component {
    render() {
        return (
            <footer className='sky-footer'>
                <img src={logo} className='logo' />
                <span className='copyright'>&copy; 2017 Sky UK</span>
            </footer>
        );
    }
}

export default Header;