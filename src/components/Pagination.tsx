import "../styles/Pagination.scss";
import { PaginationProps } from "../interface/PaginationProps";

const Pagination = ({ setIndexPagination, indexPagination, totalCharacters }: PaginationProps): JSX.Element => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
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