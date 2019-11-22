import React, { useState } from "react";
import PropTypes from "prop-types";

function Pagination(props) {
  let onPrevPageChange = () => {
    setpage(page - 1);
    props.changePage(page);
  };
  let onNextPageChange = () => {
    setpage(page + 1);
    props.changePage(page);
  };
  const [page, setpage] = useState(1);
  return (
    <nav aria-label="Page navigation example" style={{ margin: "20px" }}>
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <button
            onClick={onPrevPageChange}
            disabled={page === 1}
            style={{ margin: "0px 10px 0px 10px" }}
          >
            {"<<"}
          </button>
        </li>
        {/* <li class="page-item">
          <button
            value={page - 1}
            onClick={() => {
              props.changePage(page - 1);
            }}
          >
            {page - 1}
          </button>
        </li> */}
        <li class="page-item">
          {/* style={{ margin: "0px 10px 0px 10px" }} */}
          {/* <button
            onClick={() => {
              props.changePage(page);
            }}
          > */}
          {page}
          {/* </button> */}
        </li>
        {/* <li class="page-item">
          <button
            onClick={() => {
              props.changePage(page + 1);
            }}
          >
            {page + 1}
          </button>
        </li> */}
        <li class="page-item">
          <button
            style={{ margin: "0px 10px 0px 10px" }}
            onClick={onNextPageChange}
          >
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
