export interface PaginationProps {
    setIndexPagination: React.Dispatch<React.SetStateAction<number>>;
    indexPagination: number;
    totalCharacters: number;
}