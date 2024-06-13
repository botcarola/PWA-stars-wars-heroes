import { useRef, useState } from "react";
import useGetData from "../hooks/useGetData";
import ContainerCards from "./ContainerCards";
import Header from "./Header";
import Pagination from "./Pagination";
import SearchCharacter from "./SearchCharacter";

const Home = (): JSX.Element => {
    const [ index, setIndex ] = useState(1)
    const [ searchCharacter, setSearchCharacter ] = useState("")
    const results = useGetData("people", index, searchCharacter)    
    const totalCharactersRef = useRef<number>(0)
    totalCharactersRef.current = results?.data?.count || 0    

    return (
        <>
            <Header />
            <SearchCharacter setSearchTerm={setSearchCharacter} />
            <ContainerCards
            data={results.data}
            loader={results.loader}
            />
            <Pagination 
            setIndexPagination={setIndex}
            indexPagination={index}
            totalCharacters={totalCharactersRef.current}
            />
        </>
    )
}

export default Home;