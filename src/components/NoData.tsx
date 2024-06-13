import "../styles/NoData.scss";
import noDataImg from "../assets/sadrobot.png";

const NoData = (): JSX.Element => {
    return (
        <section className="no-data-container">
            <h2>
                SORRY!
            </h2>
            <h3>
                THIS CHARACTER DOESN'T MATCH OR EXIST
            </h3>
            <img src={noDataImg} alt="there is no data image" />
        </section>
    )
}

export default NoData;