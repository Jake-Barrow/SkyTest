import React, { Component } from 'react';

import logo from '../../images/sky-logo.png';

class Header extends Component {
    render() {
        return (
            <header className='sky-header'>
                <img src={logo} className='logo' />
                <div className='nav'>
                    <ul>
                        <li>Home</li>
                        <li>Find & Watch TV</li>
                        <li><b>Shop</b></li>
                        <li>My Sky</li>
                        <li>Help & Support</li>
                        <li className='right'>Call 0800 759 1489</li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;