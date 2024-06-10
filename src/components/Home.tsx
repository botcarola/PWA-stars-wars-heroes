import useFetch from "../hooks/useFecth";
import ContainerCards from "./ContainerCards";
import Header from "./Header";
import Pagination from "./Pagination";

const Home = (): JSX.Element => {
    const response = useFetch("/people")
    console.log(response)
    return (
        <>
            <Header />
            <ContainerCards
            data={response.data}
            />
            <Pagination />
        </>
    )
}

export default Home;