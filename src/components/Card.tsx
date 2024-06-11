import "../styles/Card.scss";
import { CardProps } from "../interface/CardProps";
import images from "../images.json";
import notFound from "../assets/image-not-found.png";

interface imagesType {
    id: number;
    name: string;
    image: string;
}

const Card = ({ name, gender, height, mass }: CardProps): JSX.Element => {

    const getCharacterImage = (name: string): imagesType | undefined => {
        return images.find((image: imagesType) => {
            return image.name.toLowerCase().includes(name.toLowerCase())
        })
    }

    return (
        <article className="card">
            <div className="container-img">
                <img src={getCharacterImage(name)?.image || notFound} alt={name} />
            </div>
            <h2 className="subtitle-card">
                { name }
            </h2>
            <div className="container-info">
                <div className="info-character">
                    <p className="bold-subtitle subtitle-type-info">
                        Gender
                    </p>
                    <p>
                        { gender }
                    </p>
                </div>
                <div className="info-character">
                    <p className="bold-subtitle">
                        Height
                    </p>
                    <p>
                        { height }
                    </p>
                </div>
                <div className="info-character">
                    <p className="bold-subtitle">
                        Mass
                    </p>
                    <p>
                        { mass }
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Card;