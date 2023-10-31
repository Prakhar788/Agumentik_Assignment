import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import SideDiv from './SideDiv';
import video from '../assets/3.mp4'

const Header = () => {
    const [heading, setHeading] = useState('Boards');

    const handler = (title) => {
        setHeading(title);
    };

    
const menu = [
    {
        title:'Boards',
        image:'https://dapulse-res.cloudinary.com/image/upload/e_…e%20Page%20-%202022%20Rebrand/tabs/board_icon.svg'
    },
    {
        title:'Views',
        image:'https://dapulse-res.cloudinary.com/image/upload/e_…e%20Page%20-%202022%20Rebrand/tabs/views_icon.svg'
    },
    {
        title:'Dashboard',
        image:'https://dapulse-res.cloudinary.com/image/upload/e_…Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg'
    },
    {
        title:'Integrations',
        image:'https://dapulse-res.cloudinary.com/image/upload/e_…e%20-%202022%20Rebrand/tabs/integrations_icon.svg'
    },
    {
        title:'Automations',
        image:'	https://dapulse-res.cloudinary.com/image/upload/e_…ge%20-%202022%20Rebrand/tabs/automations_icon.svg'
    },
    {
        title:'Apps',
        image:'	https://dapulse-res.cloudinary.com/image/upload/e_…me%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg'
    },
    {
        title:'Docks',
        image:'https://dapulse-res.cloudinary.com/image/upload/e_…me%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg'
    },
]

    return (
        <div className="monday">
            
            <h1>Everything you need for any workflow</h1>
            <p>Easily build your ideal workflow with monday.com building blocks.</p>
            <div className="navigation">
                {menu.map((link) => (
                    <NavLink to="/" key={link.title} onClick={() => handler(link.title)}>
                        <div className="tit">
                            <img alt="" src={link.image} />
                            <p>{link.title}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className="vid">
                <video className='video-main' autoPlay loop width="750" height="500" hidecontrols  muted >
                    <source src={video}></source>
                </video>
                <SideDiv heading={heading} />
            </div>
        </div>
    );
};

export default Header;

