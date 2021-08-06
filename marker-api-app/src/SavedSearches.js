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
                        {context.savedArray.map((item, i)=>(<ul> <li key={i}>{item + " "} </li></ul>))}

                       {/* <li>{context.savedArray} </li>  */}
                       {console.log(context.savedArray)}

                    </div>
               )}
               
           </ContextConsumer>
            
            
        </div>
    )
}

export default SavedSearches