import React from "react"
import {ContextConsumer} from "./Context"
import SearchForm from "./SearchForm"
import ResultsList from "./ResultsList"
                {/* did handlenewSearch run? => display both searchForm and resultsList : just display searchForm */}

function NewSearch(){   
               
    return(
    <ContextConsumer>
        {context=>(
        context.newSearchButton === true?
            <div className="middle">      
                <SearchForm />

                <ResultsList />
            </div>  

        :
            <div className="middle">

                <SearchForm />
            </div>  
        )} 
    </ContextConsumer>
    )
}

export default NewSearch