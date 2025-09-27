import StudioCard from './StudioCard';
//import images for paintings

import '../styles/StudioArt.css';

export default function StudioArt() {
    return(
        <div className="studio-art" id="studio-art">
            <h2>Studio Art Projects</h2>
            <h6>Description/background</h6>
            <div className="frames">
        {/* <StudioCard title={"year, materials"} description={"brief description of what is drawn"} image={img_name} /> */}
            </div>
        </div>
    );
}