import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header-body'>
            <h2>Logo</h2>
            <div className='header-content'>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Online Support</a></li>
                    <li><a href=""><i class="fa-solid fa-phone"></i> 9876125855</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header