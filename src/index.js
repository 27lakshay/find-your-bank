import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import "./styles/app.css";
import "notyf/notyf.min.css";
import App from "./components/app";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
