import { Link } from 'react-router-dom';
import '../styles/CodingCard.css';

export default function CodingCard({title, description, image, linkURL}) {
    return (
        <div className="page">
            <Link target={"_blank"} to={linkURL} className="mouse_over" title="Click to Learn More"><img src={image} alt={title} className="image" /></Link>
            <div className="overview">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}