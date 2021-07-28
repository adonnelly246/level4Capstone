import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import NewSearch from "./NewSearch"
import SavedSearches from "./SavedSearches"

function Nav(){

    return(
        <Router>
        <div class="nav-container">
            <nav class="nav-links">
            <Link to="/"> Home |</Link>
            <Link to="/newsearch"> New Search |</Link>
            <Link to="/savedsearches"> Saved Searches </Link>
            </nav>

            <Switch>
             <Route exact path="/" ><Home /></Route>
             <Route path="/newsearch"><NewSearch /></Route>
             <Route path="/savedsearches"> <SavedSearches /></Route>
            </Switch>
            
            
        </div>
        </Router>
    )
}

export default Nav