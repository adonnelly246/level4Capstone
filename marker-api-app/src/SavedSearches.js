import React from "react"
import {ContextConsumer} from './userContext'

function SavedSearches(props){
    return(
        <div>
           <h2> Saved Searches </h2>
            <ul>
                {props.savedArray}     
            </ul>
            
        </div>
    )
}

export default SavedSearches