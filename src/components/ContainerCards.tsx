import Card from "./Card"
import { ContainerCardsProps } from "../interface/ContainerCardsProps";
import { Person } from "../interface/swapiResponse";

const ContainerCards = ({ data }: ContainerCardsProps ): JSX.Element => {
    
    return (
        <section>
            <h2>
                Characters
            </h2>     
            {
                data?.results?.length ?
                <div>
                    {
                        data.results.map(( character: Person ) => (
                            <Card 
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