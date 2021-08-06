import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import NewSearch from "./NewSearch"
import SavedSearches from "./SavedSearches"

function Nav(){

    return(
        <Router>
        <div className="nav-container">
            <nav className="nav-links">
            <Link to="/" style={{ textDecoration: 'none' }} > Home |</Link>
            <Link to="/newsearch" style={{ textDecoration: 'none' }}> New Search |</Link>
            <Link to="/savedsearches" style={{ textDecoration: 'none' }}> Saved Searches </Link>
            </nav>

            <div className="container">

            <Switch >
                <Route exact path="/" ><Home /></Route>
                <Route path="/newsearch"><NewSearch /></Route>
                <Route path="/savedsearches"> <SavedSearches /></Route>
           
            </Switch>
            
                <div className="about">
                    <h1> About this App </h1>
                    <p>The <a href="https://domainsdb.info/">domainsdb.info</a> API contains a list of registered domains. Using the 'New Search' checks the lists for names containing particular words/phrases/numbers or symbols.</p>
                    <p>
                        <ul>
                            <li>Navigate to the 'New Search' page to create a new search.</li>
                            <li>On the 'New Search' page, click the 'Save Search' button to save that particular search.</li>
                            <li>To view the saved searches list, navigate to the 'Saved Searches' page.</li>
                        </ul>  
                    </p>
                
                    <div><h4>Full API documentation can be found <a href="https://api.domainsdb.info/v1">here</a></h4></div>

                </div>
            </div>

        </div>
        </Router>
    )
}

export default Nav