import Link from "next/link";
import usePagination from '@library/usePagination.js'

export const dotts = '...'

const Pagination = ({ currentPage, totalItems, perPage, renderPageLink }) => {
    const pages = usePagination(totalItems, currentPage, perPage)

    return (
        <div className="builty-pagination">

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" key="pagination-item-prev">
                        <Link href={currentPage > 1 ? renderPageLink( currentPage - 1 ) : renderPageLink( currentPage )} className="page-link"><i className='fa-solid fa-arrow-left-long' /></Link>
                    </li>

                    {pages.map((pageNumber, i) =>
                        pageNumber === dotts ? (
                        <li className="page-item space" key={`pagination-item-${i}`}>
                            <a
                                key={i}
                                className="page-link"
                            >
                                {pageNumber}
                            </a>
                        </li>
                        ) : (
                        <li className="page-item" key={`pagination-item-${i}`}>
                            <Link
                                href={renderPageLink(pageNumber)}
                                className={`${
                                pageNumber === currentPage ? 'active' : ''
                                } page-link`}
                            >
                                {pageNumber}
                            </Link>
                        </li>
                        )
                    )}
                    
                    <li className="page-item" key="pagination-item-next">
                        <Link href={currentPage < pages.length ? renderPageLink( currentPage + 1 ) : renderPageLink( currentPage )} className="page-link"><i className='fa-solid fa-arrow-right-long' /></Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
  };
  export default Pagination;