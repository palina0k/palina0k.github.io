import { Link } from 'react-router-dom';
import headshot from '../images/karzhenka_headshot.jpg';
import linkedin from '../images/linkedin_logo.png';
import github from '../images/github_logo.png';

import '../styles/About.css';

export default function About() {
    return (
        <div className="about_container" id="about">
            <img src={headshot} alt="Palina Karzhenka Headshot" className="headshot" />
            <div className="info_container">
                <div className="split_half">
                    <h2>About Me</h2>
                    <h6>Text, multiple lines</h6>
                </div>
                <div className="split_half">
                    <h3>Education</h3>
                    <h5>University of California - Davis</h5>
                    <h6>Computer Science and Engineering | GPA: 3.91/4.0</h6>
                    <h6>Expected Graduation: June 2027</h6>
                    <br/>
                    <h3>Recent Experiences</h3>
                    <h6> Text, multiple lines (roles and location and times)</h6>
                    <br/>
                    <Link target={"_blank"} to="https://www.linkedin.com/in/palina-karzhenka"><img src={linkedin} alt='LinkedIn Icon' /></Link>
                    <Link target={"_blank"} to="https://github.com/palina0k"><img src={github} alt="GitHub Icon" /></Link>
                </div>
            </div>

        </div>
    );
}