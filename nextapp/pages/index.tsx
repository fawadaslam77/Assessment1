import React from 'react'

class HomePage extends React.Component  {
   
 
      apiCall = async () => {
      const res = await fetch('http://localhost:3100/blogs')
      const json = await res.json()
     alert(json.data.response)
    }
      

      render (){
      

        return (
            <div><div>Welcome to First Assessment!</div>
            <button onClick={()=> this.apiCall()}> click</button>
    
            <h1>Response of the Api?</h1>
         
            </div>
            );
      }
    
  }
  
  export default HomePage