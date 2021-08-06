import React from 'react'
import {ContextConsumer} from './Context'


function ResultsList(){
return(
    <div>
        <ContextConsumer>
            {context=>(
                <div>
                <h2 className="results">Results</h2>
                {/* <h3>{context.searchTerm}</h3> */}
                             
                               <div className="results-list">                                                                    
                                           <ul>
                                           {context.newSearchArray.map((item, i)=>( 
                                           <li key={i}>{item.domain} </li>))}
                                            <button className="submitBtn" onClick={()=> context.SaveSearch()}>Save Search</button> 
                                           </ul>
                                           
                               </div>  
   
                </div>

            )}
                          
        </ContextConsumer>              
</div>

)
 
}

export default ResultsList