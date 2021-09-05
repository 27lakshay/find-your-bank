import { useEffect, useState } from "react";
import BankDetail from "./bankDetail";

const Favourites = () => {
    const [favBanks, setFavBanks] = useState([]);

    useEffect(() => {
        async function initialFetch() {
            let data = JSON.parse(localStorage.getItem("favBanks"));
            if (data === null) return;
            setFavBanks(data);
        }
        initialFetch();
    }, []);
    function removeFromFav(data) {
        let favBanks = JSON.parse(localStorage.getItem("favBanks"));
        favBanks = favBanks.filter((item) => item.ifsc !== data.ifsc);
        setFavBanks(favBanks);
        localStorage.setItem("favBanks", JSON.stringify(favBanks));
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
