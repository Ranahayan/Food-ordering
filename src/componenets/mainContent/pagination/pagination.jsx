import _ from "lodash";
import { useContext } from "react";
import { paginationContext } from "../mainContent";

function Pagination(props) {
  const { pages } = props;
  const pageNumbers = _.range(0, pages);
  const values = useContext(paginationContext);
  const { start, pageSize, setStart } = values;

  const handlePage = (pageNumber) => {
    let currentPage = pageSize * pageNumber;
    setStart(currentPage);
  };
  const handleNext = () => {
    if (start === pageSize * (pages - 1)) return;
    const currentPage = start + pageSize;
    setStart(currentPage);
  };

  const handlePrevious = () => {
    if (start === 0) return;
    const currentPage = start - pageSize;
    setStart(currentPage);
  };

  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            onClick={handlePrevious}
            className={start === 0 ? "page-item disabled" : "page-item"}
          >
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li
              onClick={() => handlePage(pageNumber)}
              key={pageNumber}
              className={
                pageNumber * pageSize === start
                  ? "page-item active"
                  : "page-item"
              }
            >
              <a className="page-link">{pageNumber + 1}</a>
            </li>
          ))}
          <li
            onClick={handleNext}
            className={
              start === pageSize * (pages - 1)
                ? "page-item disabled"
                : "page-item"
            }
          >
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
