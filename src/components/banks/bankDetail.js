import history from "../../history";

const BankDetail = ({ data }) => {
    function handleClick(code) {
        history.push(`/bank-details/${code}`);
    }
    function addToFav(code) {
        let favBanks = JSON.parse(localStorage.getItem("favBanks"));
        if (favBanks === null || favBanks === undefined) {
            let temp = [];
            temp.push(code);
            localStorage.setItem("favBanks", JSON.stringify(temp));
            return;
        }
        if (favBanks.find((item) => item.ifsc === code.ifsc) === undefined) {
            favBanks.push(code);
            localStorage.setItem("favBanks", JSON.stringify(favBanks));
        } else alert("Already added to Favourites");
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
                        <li className="dropdown-option" onClick={() => handleClick(data.ifsc)}>
                            More Details
                        </li>
                        <li className="dropdown-option" onClick={() => addToFav(data)}>
                            Add To Favourites
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BankDetail;
