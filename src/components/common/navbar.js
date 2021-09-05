import history from "../../history";

const Navbar = () => {
    return (
        <nav className="navbar">
            <span style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
                Banks
            </span>
        </nav>
    );
};

export default Navbar;
