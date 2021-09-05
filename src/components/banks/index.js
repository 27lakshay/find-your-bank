import { useEffect, useState } from "react";

import { fetchData } from "../../utils/requests";
import PaginationContainer from "../pagination";
import BankDetail from "./bankDetail";

const Banks = () => {
    const [banks, setBanks] = useState(null);
    const [filterBanks, setFilterBanks] = useState(null);
    const [selectedCity, setSelectedCity] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("0");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchEnabled, setSearchEnabled] = useState(false);

    useEffect(() => {
        async function initialFetch() {
            // let t0 = performance.now();
            let data = await fetchData();
            // let t1 = performance.now();
            // console.log("time taken " + (t1 - t0) + " milliseconds.");
            // console.log(data)
            setBanks(data);
            setFilterBanks(data);
        }
        initialFetch();
    }, []);

    function handleSearch(banks, city, category, query) {
        let term = query.toUpperCase();
        let result = [];
        result = banks.filter((bank) => bank[category].search(term) !== -1);
        console.log(result);
        setFilterBanks(result);
    }

    useEffect(() => {
        if (selectedCategory === "0") {
            if (searchQuery === "") setFilterBanks(banks);
            else setSearchQuery("");
            return;
        }
        // debugger;
        handleSearch(banks, selectedCity, selectedCategory, searchQuery);
    }, [searchQuery, selectedCategory]);

    useEffect(() => {
        // debugger
        if (selectedCity > 0 && selectedCategory !== "0") {
            setSearchEnabled(true);
        } else setSearchEnabled(false);
    }, [selectedCity, selectedCategory]);
    return (
        <section className="content">
            <div className="section-header">
                <h2 className="section-title">All Banks</h2>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="0">Select City:</option>
                    <option value="1">Mumbai (Default)</option>
                    <option disabled>Coming Soon...</option>
                </select>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="0">Select Category:</option>
                    <option value="ifsc">IFSC Code</option>
                    <option value="branch">Branch</option>
                    <option value="bank_name">Bank Name</option>
                </select>
                {searchEnabled ? (
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                ) : (
                    <input placeholder={`Select City & Category`} disabled type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                )}
            </div>
            {filterBanks !== null ? (
                <>
                    <PaginationContainer data={filterBanks} RenderComponent={BankDetail} />
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </section>
    );
};

export default Banks;
