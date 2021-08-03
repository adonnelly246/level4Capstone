import React, {Component} from "react"
import axios from 'axios'

const {Provider, Consumer} = React.createContext()
class ContextProvider extends Component {
  
        state={
            domain: "",
            create_date: "",
            update_date: "",
            country: "",
            isDead: false,
            
           savedArray: ["saved Array1", "savedinfo 2"]
           
        }
     
        
        componentDidMount(){
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?limit=50`)
        //    .then (res=>console.log(res.data))
              .then(result => {
                  this.setState({
                    
                    domain: result.domain,
                    create_date: result.create_date,
                    update_date: result.update_date,
                    country: result.country,
                    isDead: result.isDead
                    
                  });
                })
    
                .catch(err => console.log(err))
       } 
            
        
    // https://api.domainsdb.info/v1/domains/search?domain=` + {query}
    
        
    handleNewSearch =(query)=>{
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?limit=50`)
           .then (res=>console.log(res.data))

          .catch((error) => {
            console.error(error)
          })
    }


       
        handleChange = (event) =>{
            const {name, value} = event.target
            this.setState({[name]: value})
        }
       
        SaveSearch = (event) =>{
            event.preventDefault()

            const newSave = {
                domain: this.state.domain,
                create_date: this.state.create_date,
                update_date: this.state.update_date,
                country: this.state.country,
                isDead: this.state.isDead,
            }
    
            this.setState(prevState => {
                return {
                  
                    domain: "",
                    create_date: "",
                    update_date: "",
                    country: "",
                    isDead: false,
                    
                       
                    savedArray: [newSave, ...prevState.savedArray]
                }
            })
        }

           
          
 




        render() {
        return(
            <Provider value={{  
                newSearchArray: this.state.newSearchArray,
                 savedArray: this.state.savedArray,
                 handlechange: this.handleChange,
                 SaveSearch:this.SaveSearch,
                 handleNewSearch:this.handleNewSearch
                 }}>
                 {this.props.children}
             </Provider>
        )
     
    }
}

export {ContextProvider, Consumer as ContextConsumer}