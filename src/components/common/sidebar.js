import history from "../../history";

const Sidebar = () => {
    return (
        <section className="sidebar">
            <ul className="options-list">
                <li className="option" onClick={() => history.push("/all-banks")}>All Banks</li>
                <li className="option" onClick={() => history.push("/favourites")}>Favourites</li>
            </ul>
        </section>
    );
};

export default Sidebar;
