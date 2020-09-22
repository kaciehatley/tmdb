import React from "react";

const Pagination = (props) => {
  const pageNumbers = [];
  let totalPages = Math.ceil(props.totalMovies / props.moviesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{ marginLeft: "48%" }}>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => props.paginate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
