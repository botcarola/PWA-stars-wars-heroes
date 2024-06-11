import { useRef, useState } from "react";
import useFetch from "../hooks/useFecth";
import ContainerCards from "./ContainerCards";
import Header from "./Header";
import Pagination from "./Pagination";

const Home = (): JSX.Element => {
    const [ index, setIndex ] = useState(1)
    const results = useFetch("/people", index)
    console.log(results)
    const totalCharactersRef = useRef<number>(0)
    totalCharactersRef.current = results?.data?.count || 0

    return (
        <>
            <Header />
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