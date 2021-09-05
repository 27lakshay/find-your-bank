import { useEffect, useState } from "react";

import BankDetail from "./bankDetail";
import { getFavBanks, removeFavBank } from "../../utils/helpers";

const Favourites = () => {
    const [favBanks, setFavBanks] = useState([]);

    //initial hydration
    useEffect(() => {
        function initialFetch() {
            let data = getFavBanks();
            if (data === null) return;
            setFavBanks(data);
        }
        initialFetch();
    }, []);

    //remove single bank from favourites
    function removeFromFav(data) {
        let newFavBanks = removeFavBank(data);
        setFavBanks(newFavBanks);
    }

    return (
        <section className="content">
            <div className="section-header">
                <h2 className="section-title">Your Favourite Banks</h2>
            </div>
            <ul className="fav-banks-list">
                {favBanks.length > 0 ? (
                    favBanks.map((item, index) => <BankDetail key={index} data={item} removeFromFav={removeFromFav} />)
                ) : (
                    <h2 className="error">{`You have not added any favourite banks :(`}</h2>
                )}
            </ul>
        </section>
    );
};

export default Favourites;
