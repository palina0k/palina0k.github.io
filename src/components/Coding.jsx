import CodingCard from './CodingCard';
import filmreviews from '../images/filmreviews.png';
import campusconnect from '../images/campusconnect.png';
import aggieville from '../images/aggieville.png';
import wheresperry from '../images/wheresperry.png';

import '../styles/Coding.css';

export default function Coding() {
    return(
        <div className="coding" id="coding">
            <h2>Coding Projects</h2>
            <div className="projectGroup">
                <CodingCard title={"Cinema World"} description={"A social platform to review movies."} image={filmreviews} linkURL={"https://github.com/palina0k/FilmReviews/tree/main"} />
                <CodingCard title={"Campus Connect"} description={"A social platform made for SFSU students to voice campus concerns."} image={campusconnect} linkURL={"https://devpost.com/software/campusconnect-orenh0"} />
                <CodingCard title={"Aggie Ville"} description={"An all-in-one apartment finder for Davis residents."} image={aggieville} linkURL={"https://github.com/alexqise/AggieVille/tree/main"} />
                <CodingCard title={"Where's Perry"} description={"A two-player maze game."} image={wheresperry} linkURL={"https://github.com/anagha166/WheresPerryFinal"} />
            </div>
        </div>
    );
}