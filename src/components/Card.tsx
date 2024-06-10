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
        <article>
            <h2>
                {
                    name
                }
            </h2>
            <h3>
                {
                    gender
                }
            </h3>
            <h4>
                {
                    height
                }
            </h4>
            <h4>
                {
                    mass
                }
            </h4>
            <img src={getCharacterImage(name)?.image || notFound} alt={name} />
        </article>
    )
}

export default Card;