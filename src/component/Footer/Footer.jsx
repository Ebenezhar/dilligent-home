import React from 'react'
import './footer.css'

function footer() {
    return (
        <div className='footer-body'>
            <div className='logo-body'>
                <h1>LOGO</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
                <div className='contact-logo-body'>
                    <div className='contact-logo'>
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='contact-logo'>
                        <i class="fa-brands fa-google-plus-g"></i>
                    </div>
                    <div className='contact-logo'>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className='contact-logo'>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className='quick-links-body'>
                <p className='conact-content'>Quick Links</p>
                <ul className='quick-links-list-head'>
                    <li className='quick-links-list-content'>Home</li>
                    <li className='quick-links-list-content'>About Us</li>
                    <li className='quick-links-list-content'>Pricing</li>
                    <li className='quick-links-list-content'>Features</li>
                    <li className='quick-links-list-content'>Phones</li>
                </ul>
            </div>
            <div className='features-body'>
                <p className='conact-content'>Features</p>
                <ul className='quick-links-list-head'>
                    <li className='quick-links-list-content'>One simple service tier</li>
                    <li className='quick-links-list-content'>About Us</li>
                    <li className='quick-links-list-content'>Pricing</li>
                    <li className='quick-links-list-content'>Features</li>
                    <li className='quick-links-list-content'>Phones</li>
                </ul>
            </div>
            <div className='getin-touch-body'>
                <p className='conact-content'>Get in Touch</p>
                <div>
                    <p><i className="fa-solid fa-location-dot  icons-contact"></i>  Met consectetur adipisicing Lorem ipsum dol 657 amet</p>
                    <p><i className="fa-solid fa-phone  icons-contact"></i> 125478369</p>
                    <p><i className="fa-regular fa-envelope-open  icons-contact"></i> asdfgas@asd.com</p>
                </div>
            </div>
        </div>
    )
}

export default footer