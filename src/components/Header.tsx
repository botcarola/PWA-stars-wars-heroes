import "../styles/Header.scss";
import logo from "../assets/sw-logo.png";

const Header = (): JSX.Element => {
    return (
        <header>
            <img className="header-img" src={logo} alt={"star wars logo"} /> 
            <h2>
                CHARACTERS FINDER
            </h2>
        </header>
    )
}

export default Header;