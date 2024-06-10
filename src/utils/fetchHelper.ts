import { swapiCharacterResponse } from "../interface/swapiResponse";

export const getDataCharacter = async ( url: string ): Promise<swapiCharacterResponse> => {
    const response = await fetch(url)
    const data: swapiCharacterResponse  = await response.json()
    return data
}