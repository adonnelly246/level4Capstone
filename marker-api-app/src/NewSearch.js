import React from "react"
import {ContextConsumer} from "./userContext"
import SearchForm from "./SearchForm"


function NewSearch(props){

    return(
        <div class="middle">
            <SearchForm />
                <ContextConsumer>
                    {context=>(
                        
                        <button onClick= {context.handleNewSearch(props.value)}>SEARCH!</button> 
                        
                    )}
                </ContextConsumer>


            <h2 class="results">Results</h2>
            <h3>{props.value}</h3>
        
                  <div class="results-list"> 
                    <ul><li>{props.newSearchArray}</li></ul>  
                    <ContextConsumer>
                        {context=>(
                              <button onClick={context.SaveSearch(props.value)}>Save Search</button> 
                        )}
                    </ContextConsumer>
                </div>
        
          
        </div>   
    )
}

export default NewSearch