import { useState, useEffect } from "react";
import { swapiCharacterResponse } from "../interface/swapiResponse";
import { getDataCharacter } from "../utils/fetchHelper";
import { useNavigate } from "react-router-dom";

const useGetData = ( resource: string, indexPagination: number = 1, character: string ): { data: swapiCharacterResponse, loader: boolean } => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState<boolean>(true)
    const [data, setData] = useState<swapiCharacterResponse>({
        "count": 0,
        "next": null,
        "previous": null,
        "results": []
    })

    useEffect(() => {
        const getData = async () => {
            setLoader(true)

            try {
                let url = ""

                if (character === "") {
                    url = `https://swapi.dev/api/${resource}/?page=${indexPagination}`
                } else {
                    url = `https://swapi.dev/api/${resource}/?search=${character}`
                }

                const cache = await caches.open("api-cache")
                const cachedResponse = await cache.match(url)

                if (cachedResponse) {
                    const cachedData = await cachedResponse.json()
                    setData(cachedData)
                } else {
                    const fetchData = await getDataCharacter(url)
                    setData(fetchData)
                    await cache.put(url, new Response(JSON.stringify(fetchData)))
                }
            } catch (error) {
                navigate("/*")
            } finally {
                setLoader(false)
            }
        }

        getData();
    }, [ indexPagination, character ])

    return { data, loader }
}

export default useGetData;
