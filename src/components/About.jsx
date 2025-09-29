import { Link } from 'react-router-dom';
import headshot from '../images/karzhenka_headshot.jpg';
import linkedin from '../images/linkedin-icon.png';
import github from '../images/github_logo.png';

import '../styles/About.css';

export default function About() {
    return (
        <div className="about_container" id="about">
            <div className="headshot">
                <img src={headshot} alt="Palina Karzhenka Headshot" />
            </div>
            <div className="info_container">
                <div className="split_half">
                    <h3>About Me</h3>
                    <h6>
                        Driven by curiosity for how things work, I'm a third-year Computer Science student building the foundation for a career in software engineering.👩🏻‍💻 <br/><br/>
                        My journey so far has been filled with hands-on experiences like:
                        <ul>
                            <li><strong>Building full-stack web applications</strong> with student tech clubs, such as #include and GDSC, transforming ideas into a functional experience.</li>
                            <li><strong>Leading and ensuring operational success</strong> as a Computer Lab Supervisor, refining my skills in team coordination and problem-solving in a dynamic environment.</li>
                        </ul>
                        I'm eager to bring my blend of technical skill and leadership to create meaningful impact in my engineering career.
                    </h6>
                    <h3>Education</h3>
                    <h5>University of California - Davis</h5>
                    <h6>BS, Computer Science and Engineering | GPA: 3.91/4.0<br/><br/>Expected Graduation: June 2027</h6>
                </div>
                <div className="split_half">
                    <h3>Recent Experiences</h3>
                    <h6>
                        <strong>Computer Room Supervisor</strong> - Computer Lab Management at UC Davis<br/>
                        <i>April 2025 - Present</i>
                        <br/>
                        <br/>
                        <strong>Computer Room Consultant</strong> - Computer Lab Management at UC Davis<br/>
                        <i>Septembet 2024 - Present</i>
                        <br/>
                        <br/>
                        <strong>Student Instructor</strong> - ECS 98F: The Missing CS Quarter, UC Davis<br/>
                        <i>September 2024 - Present</i>
                        <br/>
                        <br/>
                    </h6>
                    <h4>Project Experience</h4>
                    <h6>
                        <strong>Software Developer</strong> - #include<br/>
                        <i>October 2024 - Present</i>
                        <br/>
                        <br/>
                        <strong>Web Developer</strong> - Google Developer Student Club (GDSC)<br/>
                        <i>September 2023 - June 2024</i>
                    </h6>
                    <br/>
                    <Link target={"_blank"} to="https://www.linkedin.com/in/palina-karzhenka"><img src={linkedin} alt='LinkedIn Icon' id="linkedin" /></Link>
                    <Link target={"_blank"} to="https://github.com/palina0k"><img src={github} alt="GitHub Icon" id="github" /></Link>
                </div>
            </div>

        </div>
    );
}