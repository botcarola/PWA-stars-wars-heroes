import gifLoader from "../assets/loader.gif";

const Loader = (): JSX.Element => {
    return (
        <>
            <img src={gifLoader} alt="loading image" />
        </>
    )
}

export default Loader;