import React from "react"
import {ContextConsumer} from './userContext'

function SavedSearches(props){
    return(
        <div class="middle">
           <h2> Saved Searches </h2>
           <ContextConsumer>
               {context => (
                    <ul>
                       <li>{context.savedArray}  </li> 
                    </ul>
               )}
               
           </ContextConsumer>
            
            
        </div>
    )
}

export default SavedSearches