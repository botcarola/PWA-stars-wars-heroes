import "../styles/NoData.scss";
import noDataImg from "../assets/sadrobot.png";
import { SearchCharacterProps } from "../interface/SearchCharacterProps";

const NoData = ({ setSearchTerm }: SearchCharacterProps): JSX.Element => {

    const handleClickNoCharacter = () => {
        setSearchTerm("")
    }
    return (
        <section className="no-data-container">
            <h2>
                SORRY!
            </h2>
            <h3>
                THIS CHARACTER DOESN'T MATCH OR EXIST
            </h3>
            <img src={noDataImg} alt="there is no data image" />
            <button onClick={handleClickNoCharacter}>
                Go back!
            </button>
        </section>
    )
}

export default NoData;