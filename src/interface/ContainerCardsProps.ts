import { swapiCharacterResponse } from "./swapiResponse";

export interface ContainerCardsProps {
    data: swapiCharacterResponse;
    loader: boolean;
    searchCharacter: React.Dispatch<React.SetStateAction<string>>;
}