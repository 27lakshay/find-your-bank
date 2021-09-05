import { useContext } from "react";

import NotyfContext from "../../context/notyfContext";
import history from "../../history";
import { addFavBank } from "../../utils/helpers";

const BankDetail = ({ data }) => {
    const notyf = useContext(NotyfContext);

    function handleClick(code) {
        history.push(`/bank-details/${code}`);
    }
    
    //add single bank to favourites
    function addToFav(data) {
        let favBanks = addFavBank(data);
        if (favBanks) {
            notyf.success("Added to favourites");
        } else notyf.error("Already added to favourites");
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
