import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navbar from "./common/navbar";
import Sidebar from "./common/sidebar";
import Banks from "./banks";
import BankDetails from "./bankDetails";
import Favourites from "./bankFavourites";
import NotFound from "./common/notFound";
import Homepage from "./homePage";

export default function App() {
    return (
        <Router history={history}>
            <Navbar />
            <main className="content-wrapper">
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/all-banks" component={Banks} />
                    <Route exact path="/bank-details/:id" component={BankDetails} />
                    <Route exact path="/favourites" component={Favourites} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
}
