import { useState, useEffect } from "react";
import { swapiCharacterResponse } from "../interface/swapiResponse";
import { getDataCharacter } from "../utils/fetchHelper";
import { useNavigate } from "react-router-dom";

const useFetch = ( resource: string, indexPagination: number = 1 ): { data : swapiCharacterResponse, loader: boolean } => {
    const navigate = useNavigate()
    const [ loader, setLoader ] = useState<boolean>(true)
    const [ data, setData ] = useState<swapiCharacterResponse>({
    "count": 0,
    "next": null,
    "previous": null,
    "results": []
    })

    

    useEffect(() => {  
        const getData = async () => {               
            try {
                const info = await getDataCharacter(`https://swapi.dev/api/${resource}/?page=${indexPagination}`)
                setData(info)                
            } catch ( error ) {
                navigate("/*")
            } finally {
                setLoader(false)
            }             
        }    

        getData()
    }, [ indexPagination ])

    return { data, loader } 
}


export default useFetch;