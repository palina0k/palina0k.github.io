import '../styles/StudioCard.css';

export default function StudioCard({title, image}) {

    return (
        <div className="frame">
            <img src={image} alt={title} />
            <div className="overview">
                <h5>{title}</h5>
            </div>
        </div>
    );
}