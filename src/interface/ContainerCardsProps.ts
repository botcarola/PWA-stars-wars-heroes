import { swapiCharacterResponse } from "./swapiResponse";

export interface ContainerCardsProps {
    data: swapiCharacterResponse;
    loader: boolean;
}