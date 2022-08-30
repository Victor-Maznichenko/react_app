import React from "react";
import ReactPaginate from "react-paginate";
import styles from './pagination.module.scss'

function Pagination({count, setCurrentPage}) {
  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.root}
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => setCurrentPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={4}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
