import "../styles/ContainerCards.scss";
import { ContainerCardsProps } from "../interface/ContainerCardsProps";
import { Person } from "../interface/swapiResponse";
import Card from "./Card";
import Loader from "./Loader";
import NoData from "./NoData";

const ContainerCards = ({ data, loader, searchCharacter }: ContainerCardsProps ): JSX.Element => {
    
    return (
        <section className="container-cards">              
            {
                loader ?                
                <div>
                    <Loader />
                </div>
                :
                <section className="cards">
                    {
                        data.results.length > 0 ?
                        data.results.map(( character: Person, index: number ) => (
                            <Card                             
                            key={index}                        
                            name={character.name}
                            gender={character.gender}
                            height={character.height}
                            mass={character.mass}   
                            />
                        ))
                        :
                        <NoData 
                        setSearchTerm={searchCharacter}
                        />
                    }
                </section>                
            }  
        </section>
    )
}

export default ContainerCards;