// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState("");

    // Extract the pathname from location
    const pathname = location.pathname;

    // Set the menu based on the pathname
    useState(() => {
        switch (pathname) {
            case '/':
                setMenu("shop");
                break;
            case '/mens':
                setMenu("mens");
                break;
            case '/womens':
                setMenu("womens");
                break;
            case '/kids':
                setMenu("kids");
                break;
            default:
                setMenu("");
                break;
        }
    }, [pathname]);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link to='/' className={menu === "shop" ? 'active' : ''}>Shop</Link>
                </li>
                <li>
                    <Link to='/mens' className={menu === "mens" ? 'active' : ''}>Men</Link>
                </li>
                <li>
                    <Link to='/womens' className={menu === "womens" ? 'active' : ''}>Women</Link>
                </li>
                <li>
                    <Link to='/kids' className={menu === "kids" ? 'active' : ''}>Kids</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
