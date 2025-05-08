import "./App.css";

import { useState } from "react";
import { Pagination } from "./Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = 20;

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div style={{ margin: "2rem" }}>
      <div style={{ marginBottom: "2rem" }}>You are on page {currentPage}</div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChanged={handlePageChanged}
      />
    </div>
  );
}

export default App;
