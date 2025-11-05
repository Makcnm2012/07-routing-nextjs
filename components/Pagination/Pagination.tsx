import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  onChange: (page: number) => void;
  page: number;
}

const Pagination = ({ totalPages, onChange, page }: PaginationProps) => {
  return (
    <ReactPaginate
      containerClassName={css.pagination}
      activeClassName={css.active}
      breakLabel="..."
      nextLabel=">"
      onPageChange={({ selected }: { selected: number }) =>
        onChange(selected + 1)
      }
      pageRangeDisplayed={4}
      forcePage={page - 1}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
