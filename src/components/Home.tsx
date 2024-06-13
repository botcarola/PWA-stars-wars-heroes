import { useRef, useState } from "react";
import useFetch from "../hooks/useFecth";
import ContainerCards from "./ContainerCards";
import Header from "./Header";
import Pagination from "./Pagination";
import SearchCharacter from "./SearchCharacter";

const Home = (): JSX.Element => {
    const [ index, setIndex ] = useState(1)
    const [ searchCriteria, setSearchCriteria ] = useState("")
    const results = useFetch("/people", index)
    console.log(results)
    const totalCharactersRef = useRef<number>(0)
    totalCharactersRef.current = results?.data?.count || 0
    console.log(searchCriteria)

    return (
        <>
            <Header />
            <SearchCharacter setSearchTerm={setSearchCriteria} />
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