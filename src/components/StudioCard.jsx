import '../styles/StudioCard.css';

export default function StudioCard({title, description, image}) {

    return (
        <div className="frame">
            <img src={image} alt={description} />
            <div className="overview">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}