import Card from "./Card"
import { ContainerCardsProps } from "../interface/ContainerCardsProps";
import { Person } from "../interface/swapiResponse";
import "../styles/ContainerCards.scss"
import Loader from "./Loader";

const ContainerCards = ({ data, loader }: ContainerCardsProps ): JSX.Element => {
    
    return (
        <section className="container-cards">              
            {
                loader ?                
                <div>
                    <Loader />
                </div>
                :
                <div className="cards">
                    {
                        data.results.map(( character: Person, index: number ) => (
                            <Card                             
                            key={index}                        
                            name={character.name}
                            gender={character.gender}
                            height={character.height}
                            mass={character.mass}   
                            />
                        ))
                    }
                </div>
                
            }  
        </section>
    )
}

export default ContainerCards;