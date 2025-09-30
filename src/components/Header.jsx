import { Link } from 'react-router-dom';
//import nav_logo from '../images/[name]';
import linkedin from '../images/linkedin-icon.png';
import github from '../images/github_logo.png';

import '../styles/Header.css';

export default function Header() {
    return (
        <div id="header">
            <nav className="header_container">
                {/* <div className="header_logo">
                    <a href="/">{ logo image here <img src={nav_logo} alt='Palina Karzhenka Site Logo' /> }</a>
                </div> */}
                <div className="header_left">
                    <Link to="/" id="home" ><h5>HOME</h5></Link>
                    <Link to="/technical" id="tech" ><h5>TECHNICAL</h5></Link>
                    <Link to="/studio-art" id="art" ><h5>STUDIO ART</h5></Link>
                    <Link to="/about" id="abt" ><h5>ABOUT</h5></Link>
                </div>
                <div className="header_right">
                    <Link target={"_blank"} to="https://www.linkedin.com/in/palina-karzhenka"><img src={linkedin} alt='LinkedIn Icon' id="linkedin" /></Link>
                    <Link target={"_blank"} to="https://github.com/palina0k"><img src={github} alt="GitHub Icon" id="github" /></Link>
                </div>
            </nav>
        </div>
    );
}