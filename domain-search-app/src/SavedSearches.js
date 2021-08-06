import React from "react"
import {ContextConsumer} from './Context'

function SavedSearches(){
    return(
        <div className="middle">
           <h2> Saved Searches </h2>
           <ContextConsumer>
               {context => (
                   <div>
                        
                        {console.log(context.savedArray)}
                        {/* {context.searchTerm} */}
                        {context.savedArray.map((item, i)=>(<ul className="results-list"> <li key={i}>{item.map(j => j)} </li></ul>))}


                       {console.log(context.savedArray)}

                    </div>
               )}
               
           </ContextConsumer>
            
            
        </div>
    )
}

export default SavedSearches