import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import groupJSON from "./groups.json";
import GroupDetailPage from "./pages/GroupDetailPage";
import Navigation from "./Navigation";

function RoutedPages() {
    return (
        <>
            <Router>
                <Navigation/>
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