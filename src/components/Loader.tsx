import gifLoader from "../assets/loader.gif";
import "../styles/Loader.scss";

const Loader = (): JSX.Element => {
    return (
        <div className="container-loader">
            <img src={gifLoader} alt="loading image" />
        </div>
    )
}

export default Loader;