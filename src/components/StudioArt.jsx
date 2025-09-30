import StudioCard from './StudioCard';
import canyon from '../images/canyon_painting.png';
import flowers from '../images/flowers_painting.png';
import animals from '../images/animal_collage.png';
import dog from '../images/dog_scratchboard.png';
import koifish from '../images/koifish_painting.png';
import mirror from '../images/mirror_painting.png';
import reflection from '../images/reflection_painting.png';
import matrix from '../images/matrix_collage.png';
import dress from '../images/yellowdress_painting.png';
import glasses from '../images/glasses-painting.png';
import city from '../images/city_painting.png';
import greenfabric from '../images/greenfabric_painting.png';
import turtle from '../images/turtle_painting.png';
import tiger from '../images/tiger_scratchboard.png';
import reeves from '../images/reeves_painting.png';
import ballerina from '../images/ballerina_painting.png';
import butterflies from '../images/butterflies_painting.png';

import '../styles/StudioArt.css';

export default function StudioArt() {
    return(
        <div className="studio-art" id="studio-art">
            <h2>Studio Art Projects</h2>
            <div className="frames">
               <StudioCard title={"Acrylic paint"} image={canyon} />
               <StudioCard title={"Acrylic paint"} image={flowers} />
               <StudioCard title={"Paper collage with acrylic paint"} image={animals} />
               <StudioCard title={"Scratchboard"} image={dog} />
               <StudioCard title={"Acrylic paint"} image={koifish} />
               <StudioCard title={"Color pencils"} image={mirror} />
               <StudioCard title={"Charcoal"} image={reflection} />
               <StudioCard title={"Paper collage with acrylic paint"} image={matrix} />
               <StudioCard title={"Gouache paint"} image={dress} />
               <StudioCard title={"Pencil"} image={glasses} />
               <StudioCard title={"Oil pastels"} image={city} />
               <StudioCard title={"Charcoal"} image={greenfabric} />
               <StudioCard title={"Color pencils"} image={turtle} />
               <StudioCard title={"Scratchboard"} image={tiger} />
               <StudioCard title={"Acrylic paint"} image={reeves} />
               <StudioCard title={"Charcoal"} image={ballerina} />
               <StudioCard title={"Acrylic paint"} image={butterflies} /> 
            </div>
        </div>
    );
}