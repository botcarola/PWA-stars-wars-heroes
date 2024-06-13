import "../styles/Pagination.scss";
import { PaginationProps } from "../interface/PaginationProps";

const Pagination = ({ setIndexPagination, indexPagination, totalCharacters }: PaginationProps): JSX.Element => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handleClickFirstPage = () => {
        setIndexPagination(1)
        scrollToTop()
    }

    const handleClickLastPage = () => {
        setIndexPagination(Math.ceil(totalCharacters / 10))
        scrollToTop()
    }

    const handleClickNext = () => {
        if ( indexPagination < totalCharacters / 10 ) {
            setIndexPagination((prev: number) => prev + 1)
            scrollToTop()
        }
    }

    const handleClickPrev = () => {
        if (indexPagination > 1) {
            setIndexPagination((prev: number) => prev - 1)
            scrollToTop()
        }
    }

    return (
        <div className="container-pagination">
            <button onClick={handleClickFirstPage} className="first-last-button">
                {"<"}
            </button>
            <button onClick={handleClickPrev}>
                prev
            </button>
            <button onClick={handleClickNext}>
                next
            </button>
            <button onClick={handleClickLastPage} className="first-last-button">
                {">"}
            </button>
        </div>
    )
}

export default Pagination;