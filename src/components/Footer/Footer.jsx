import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
            <div>
                <img className='footer-logo' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" alt="footer-logo" />
            </div>
            <div>
                <img className='footer-logo' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png" alt="valve" />
            </div>
            </div>
            <div className='footer-text'>
            Dota и логотип Dota являются товарными знаками и/или зарегистрированными товарными знаками Valve Corporation. 2021 Valve Corporation, все права защищены.
            </div>
        </div>
    );
};

export default Footer;