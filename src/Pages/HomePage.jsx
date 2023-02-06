import React from 'react'
import Header from '../component/Header/Header'
import CompanyName from '../component/Header/CompanyName'
import './homepage.css'
import GetStarted from '../component/Get Started/GetStarted'

function HomePage() {
    return (
        <div className='homePage'>
            <Header />
            <CompanyName />
            <section className='section1'>
                <GetStarted />
            </section>

        </div>
    )
}

export default HomePage