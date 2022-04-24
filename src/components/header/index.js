import React from 'react'
import './header.css'

const index = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    Xpenser <i className="fi fi-rr-credit-card"></i>
                </div>
                <div className="header-button">
                    <a href='https://github.com/Vikash2' target='_blank' rel='noopner noreferrer'>
                        <i className="devicon-github-original colored"></i>Star
                    </a>
                </div>

            </div>
        </div>
    )
}

export default index