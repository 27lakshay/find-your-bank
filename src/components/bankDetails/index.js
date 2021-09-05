import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../../utils/requests";

const BankDetails = () => {
    const { id } = useParams();

    const [record, setRecord] = useState({});

    useEffect(() => {
        async function initialFetch() {
            let data = await fetchData();
            let singleRecord = data.filter((item) => item.ifsc === id);
            setRecord(singleRecord[0]);
        }
        initialFetch();
    }, []);
    return (
        <section className="content bank-details">
            <div className="section-header">
                <h2 className="section-title">Bank Details</h2>
            </div>
            <ul className="single-bank-details">
                <li>
                    Name: <span>{record.bank_name}</span>
                </li>
                <li>
                    Ifsc Code: <span>{record.ifsc}</span>
                </li>
                <li>
                    Branch: <span>{record.branch}</span>
                </li>
                <li>
                    Bank ID: <span>{record.bank_id}</span>
                </li>
                <li>
                    Address: <span>{record.address}</span>
                </li>
                <li>
                    City: <span>{record.city}</span>
                </li>
                <li>
                    District: <span>{record.district}</span>
                </li>
                <li>
                    State: <span>{record.state}</span>
                </li>
            </ul>
        </section>
    );
};

export default BankDetails;
