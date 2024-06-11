import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import "../styles/Footer.scss";


const Footer = (): JSX.Element => {
    return(
        <footer>
            <ul className='social-media-list'>
                <li>
                    <a href="https://www.linkedin.com/in/carolina-lerner-223034214/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/botcarola" target="_blank">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                </li>
            </ul>        
        </footer>
    )
}

export default Footer;