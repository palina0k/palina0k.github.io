import { Link } from 'react-router-dom';
//import nav_logo from '../images/[name]';
import linkedin from '../images/linkedin_logo.png';
import github from '../images/github_logo.png';

import '../styles/Header.css';

export default function Header() {
    return (
        <div id="header">
            <nav className="header_container">
                <div className="header_logo">
                    <a href="/">{/* logo image here <img src={nav_logo} alt='Palina Karzhenka Site Logo' /> */}</a>
                </div>
                <div className="header_left">
                    <a href="/technical">TECHNICAL</a>
                    <a href="/studio-art">STUDIO ART</a>
                    <a href="/about">ABOUT</a>
                </div>
                <div className="header_right">
                    <Link target={"_blank"} to="https://www.linkedin.com/in/palina-karzhenka"><img src={linkedin} alt='LinkedIn Icon' /></Link>
                    <Link target={"_blank"} to="https://github.com/palina0k"><img src={github} alt="GitHub Icon" /></Link>
                </div>
            </nav>
        </div>
    );
}