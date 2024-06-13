import deathStar from "../assets/Death-Star.png";
import "../styles/Error.scss";
import { Link } from "react-router-dom";

const Error = (): JSX.Element => {
    return (
        <section className="container-error">
            <div>
                <h2>
                    ERROR!
                </h2>
                <h3>
                    YOU ARE FAR FROM HOME
                </h3>
            </div>
            <img src={deathStar} alt={`image of death star`} />
            <Link to="/">
                LET'S GET YOU HOME
            </Link>
        </section>
    )
}

export default Error;