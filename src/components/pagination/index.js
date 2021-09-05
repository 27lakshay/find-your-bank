import { useState, useEffect } from "react";

const Pagination = ({ data, RenderComponent }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataLimit, setDataLimit] = useState(10);
    const [pages, setPages] = useState();

    function goToNextPage() {
        let newPage = currentPage + 1;
        if (newPage > pages) return;
        setCurrentPage(newPage);
    }

    function goToPreviousPage() {
        let newPage = currentPage - 1;
        if (newPage < 1) return;
        setCurrentPage(newPage);
    }

    function goToSpecificPage(event) {
        event.preventDefault();
        let pageNumber = Number(event.target.value);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    useEffect(() => {
        let pages = Math.round(data.length / dataLimit);
        if (pages < 1) setPages(1);
        else setPages(pages);
    }, [dataLimit, data]);

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: "0px" });
    }, [currentPage]);

    return (
        <>
            <div className="pagination-wrapper">
                <div className="table-row pagination-column-header">
                    <div className="table-cell">
                        <span className="table-cell-data">Bank Name</span>
                    </div>
                    <div className="table-cell">
                        <span className="table-cell-data">IFSC</span>
                    </div>
                    <div className="table-cell">
                        <span className="table-cell-data">Branch</span>
                    </div>
                    <div className="table-cell">
                        <span className="table-cell-data">Bank ID</span>
                    </div>
                    <div className="table-cell">
                        <span className="table-cell-data">Address</span>
                    </div>
                </div>
                {getPaginatedData().length > 0 ? (
                    getPaginatedData().map((d, index) => <RenderComponent key={index} data={d} />)
                ) : (
                    <h2 className="error">{`Nothing Found :(`}</h2>
                )}
            </div>
            <div className="pagination-options">
                <span>
                    <label htmlFor="visibleRows">Rows Per Page: </label>
                    <input id="visibleRows" type="number" value={dataLimit} onChange={(e) => setDataLimit(parseInt(e.target.value))} />
                </span>
                <span className="tooltip">
                    <label htmlFor="specificPage">Go To Page: </label>
                    <input onKeyUp={(e) => (e.keyCode === 13 ? goToSpecificPage(e) : null)} id="specificPage" type="number" />
                    <span className="tooltiptext">Enter page number and press Enter</span>
                </span>
                <span className="page-nav">
                    <button
                        style={{
                            transform: "rotate(180deg)",
                        }}
                        onClick={goToPreviousPage}
                        className={`page-nav-btn ${currentPage === 1 ? "disabled" : ""}`}
                    >
                        <img className="btn-icon" src="/more-than.png"></img>
                    </button>
                    <span>
                        <label htmlFor="currentPage">
                            On Page: {currentPage} of {pages}
                        </label>
                    </span>
                    <button onClick={goToNextPage} className={`page-nav-btn ${currentPage === pages ? "disabled" : ""}`}>
                        <img className="btn-icon" src="/more-than.png"></img>
                    </button>
                </span>
            </div>
        </>
    );
};

export default Pagination;
