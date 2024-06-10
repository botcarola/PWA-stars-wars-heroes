import "../styles/Pagination.scss";

const Pagination = (): JSX.Element => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handleClickNext = () => {
        scrollToTop()
    }

    const handleClickPrev = () => {
        scrollToTop()
    }

    return (
        <div className="container-pagination">
            <button onClick={handleClickPrev}>
                prev
            </button>
            <button onClick={handleClickNext}>
                next
            </button>
        </div>
    )
}

export default Pagination;