import React from 'react'
import './getStartedPage1.css'

function GetStartedPage1() {
    return (
        <div >
            <h3>
                What Makes us
            </h3>
            <h3>
                <span style={{ color: "green" }}><strong>different</strong></span> from others?
            </h3>
            <p className='get-started-content1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            <ul className='get-started-list-head'>
                <li className='get-started-list'>One Simple Service</li>
                <li className='get-started-list'>Flat fee pricing</li>
                <li className='get-started-list'>All features</li>
                <li className='get-started-list'>Only Premium</li>
                <li className='get-started-list'>Industry Pricing</li>
            </ul>
            <button className='btn btn-primary mx-auto my-2 px-5'>Get Started</button>
        </div>
    )
}

export default GetStartedPage1