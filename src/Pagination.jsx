export function Pagination({ currentPage, pageCount, onPageChanged }) {
  // https://bulma.io/documentation/components/pagination/

  const generate = () => {
    let pages = []
    for (let i = 1; i < pageCount+1; i++) {
      pages.push(
        <li key={i}>
          <button 
            className={`pagination-link ${currentPage === i ? 'is-current' : ''}`} 
            aria-label={`Go to page ${i}`}
            onClick={() => {onPageChanged(i)}} 
          >
            {i}
          </button>
        </li>
      )
    }
    return pages
  }
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button 
        onClick={() => {onPageChanged(currentPage-1)}} 
        className="pagination-previous" disabled={currentPage===1}>Previous page</button>

      <button onClick={() => {onPageChanged(currentPage+1)}} 
      className="pagination-next" disabled={currentPage===pageCount} >Next page</button>
      <ul className="pagination-list">
        
        {generate()}

      </ul>
    </nav>
  );
}
