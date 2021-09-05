import history from "../../history";

const BankDetail = ({ data, removeFromFav }) => {
    function moreDetails(code) {
        history.push(`/bank-details/${code}`);
    }
    return (
        <div className="table-row">
            <div className="table-cell">
                <span className="table-cell-data">{data.bank_name}</span>
            </div>
            <div className="table-cell">
                <span className="table-cell-data">{data.ifsc}</span>
            </div>
            <div className="table-cell">
                <span className="table-cell-data">{data.branch}</span>
            </div>
            <div className="table-cell">
                <span className="table-cell-data">{data.bank_id}</span>
            </div>
            <div className="table-cell">
                <span className="table-cell-data">{data.address}</span>
            </div>
            <div className="table-cell">
                <div className="dropdown">
                    <button className="dropbtn">
                        <img className="btn-icon" src="/plus.png"></img>
                    </button>
                    <ul className="dropdown-content">
                        <li className="dropdown-option" onClick={() => moreDetails(data.ifsc)}>
                            More Details
                        </li>
                        <li className="dropdown-option" onClick={() => removeFromFav(data)}>
                            Remove From Favourites
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BankDetail;
