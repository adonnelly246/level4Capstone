import React, {Component} from "react"
import axios from 'axios'

const {Provider, Consumer} = React.createContext()
class ContextProvider extends Component {
  
        state={
            newSearchArray: [{
                domain: ""
                // create_date: "",
                // update_date: "",
                // isDead: false
            }]
        
           ,

           savedArray: [],
           searchTerm: "", 
           newSearchButton: false

        }
        
     
        
        componentDidMount(){
            axios.get(`https://vschool-cors.herokuapp.com?url=https://api.domainsdb.info/v1/domains/search?limit=20`)
           
              .then(response => {
                 console.log(response.data)
                })
    
                .catch(err => console.log(err))
       } 
            
        
    // https://api.domainsdb.info/v1/domains/search?domain=` + {query}
    
        
    handleNewSearch =(event)=>{
        event.preventDefault()

        axios.get(`https://vschool-cors.herokuapp.com?url=https://api.domainsdb.info/v1/domains/search?domain=`+this.state.searchTerm)
        .then(resp => {
                console.log(resp.data)
            this.setState({
                   newSearchArray: resp.data.domains.map(item => ({
                    domain: item.domain
                    // create_date: item.create_date ,
                    // update_date: item.update_date,
                    // isDead: item.isDead
                 })),
                 newSearchButton: true,
                 searchTerm: ""
              });
                
          })

          .catch((error) => {
            console.error(error)
          })
    }

    
        handleChange = (event) =>{
            
            const {name, value} = event.target
            this.setState({[name]: value,
                newSearchButton: false
            })
        }
       
        SaveSearch = () =>{
            const newSave = this.state.newSearchArray.map(item=> item.domain)
            this.setState(prevState => {
                return {   
                    newSearchButton: false,
                    savedArray: [newSave,  ...prevState.savedArray]
                }
            })
        }


        render() {
       

        return(
            <Provider value={{  
                 newSearchArray: this.state.newSearchArray,
                 newSearchButton: this.state.newSearchButton,
                 savedArray: this.state.savedArray,
                 searchTerm: this.state.searchTerm,
                 handleChange: this.handleChange,
                 SaveSearch:this.SaveSearch,
                 handleNewSearch:this.handleNewSearch
                 }}>
                 {this.props.children}
               
             </Provider>
          
             
        )
     
    }
}

export {ContextProvider, Consumer as ContextConsumer}