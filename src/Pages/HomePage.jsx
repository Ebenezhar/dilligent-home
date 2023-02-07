import React from 'react'
import Header from '../component/Header/Header'
import CompanyName from '../component/Header/CompanyName'
import './homepage.css'
import GetStarted from '../component/Get Started/GetStarted'
import AboutUs from '../component/About Us/AboutUs'
import Help from '../component/Help/Help'
import Footer from '../component/Footer/Footer'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='homePage'>
            <Header />
            <CompanyName />
            <section className='section1'>
                <GetStarted />
            </section>
            <section className='section2'>
                <AboutUs />
            </section>
            <section className='section2'>
                <Help />
            </section>
            <Footer />
            <Link to="popup" className="btn btn-primary text-center">Pop up</Link>
        </div>
    )
}

export default HomePage