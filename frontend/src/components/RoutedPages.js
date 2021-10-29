import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import Groups from "../pages/Groups";
import groupJSON from "./groups.json";
import GroupDetailPage from "../pages/GroupDetailPage";
import NavBar from "./NavBar";

function RoutedPages() {
    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/groups">
                        <Groups groupData={groupJSON}/>
                    </Route>
                    <Route path={"/group/:id"}>
                        <GroupDetailPage/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default RoutedPages;