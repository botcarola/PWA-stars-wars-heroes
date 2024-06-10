import logo from "../assets/sw-logo.png";
import "../styles/Header.scss";

const Header = (): JSX.Element => {
    return (
        <header>
            <img src={logo} alt={"star wars logo"} /> 
            <h2>
                CHARACTERS FINDER
            </h2>
        </header>
    )
}

export default Header;