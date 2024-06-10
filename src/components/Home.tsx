import useFetch from "../hooks/useFecth";
import ContainerCards from "./ContainerCards";

const Home = () : JSX.Element => {
    const response = useFetch("/people")
    console.log(response)
    return (
        <>
        <ContainerCards data={response.data}/>
        </>
    )
}

export default Home;