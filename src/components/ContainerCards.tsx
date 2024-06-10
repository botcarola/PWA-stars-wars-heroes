import Card from "./Card"
import { ContainerCardsProps } from "../interface/ContainerCardsProps";
import { Person } from "../interface/swapiResponse";
import "../styles/ContainerCards.scss"

const ContainerCards = ({ data }: ContainerCardsProps ): JSX.Element => {
    
    return (
        <section className="container-cards">              
            {
                data?.results?.length ?
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
                :
                <div>
                    sin datos
                </div>
            }  
        </section>
    )
}

export default ContainerCards;