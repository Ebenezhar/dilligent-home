import React, { useState } from 'react'
import './getstarted.css'
import GetStartedPage1 from './GetStartedPage1'
import GetStartedPage2 from './GetStartedPage2'

function GetStarted() {
    let [page, setpage] = useState(true)
    let handlePage = (val) => {
        setpage(val)
    }
    let activeWidth = {
        width: "10px"
    }

    return (
        <div className='get-started-body'>
            <div className='get-started-picture'>
                <img src={"https://gisbarbados.gov.bb/wp-content/uploads/2018/03/A-black-telephone.jpg"} />
            </div>
            <div className='get-started-content'>
                <div className='get-started-buttons'>
                    <button style={page ? { "width": "10px" } : {}} className={`get-started-button `} onClick={() => handlePage(true)}></button>
                    <button style={page ? {} : { "width": "10px" }} className={`get-started-button get-started-button-active`} onClick={() => handlePage(false)}></button>
                    {
                        page ? <GetStartedPage1 /> : <GetStartedPage2 />
                    }
                </div>


            </div>
        </div>
    )
}

export default GetStarted