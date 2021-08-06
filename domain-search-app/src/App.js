import React, {Component} from "react"
import Nav from "./Nav"
import {ContextProvider} from "./Context"

function App (){
        return (  
                
            <ContextProvider>
                 <div className="container">
                 <Nav/>   

       
            <div className="about">
                <h1> About this App </h1>
                <p>This API contains the lists of registered domains. Using the 'New Search' checks the lists for names containing particular words/phrases/numbers or symbols.</p>
                <p>Using the 'Save Search' button on the results list will save that particular search to a list. To view the saved searches list, navigate to the 'Saved Searches' page.</p>
                
                <div><h4>Full API documentation can be found <a href="https://api.domainsdb.info/v1">here</a></h4></div>

            </div>
           
        </div>
            </ContextProvider>
                
        )

}

export default App

