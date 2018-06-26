import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")       //url define 
    .then( response => {return response.json()})            // resonse need to convert in json
    .then(                                                // set data in users array
      data =>{
        this.setState({
          users:data
        })
      }
    ) 
  }
  
  render() {
    return (
      <div className="App">
        <h1> Using Fetch in ReactJS</h1>
        <h4> 
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"> 
            https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
          </a>
        </h4>
        {
          this.state.users.map(user =>{
            return(
              <div className="box" key={user.id}> 
                  <ul>
                    <li> <strong> Id - </strong> 000{user.id} </li>
                    <li> <strong> User name - </strong> {user.username} </li>  
                    <li> <strong> Name - </strong> {user.name} </li>
                    <li> <strong> Email - </strong> {user.email} </li>
                    <li> <strong> Phone - </strong> {user.phone} </li>
                    <li> <strong> Website - </strong> {user.website} </li>
                    <li> 
                      <strong> Address - </strong> 
                      {user.address.suite}, 
                      {user.address.street},
                      {user.address.city},
                      {user.address.zipcode} 
                    </li>
                  </ul>
              </div>
            )
          })
        }
        

      </div>
    );
  }
}

export default App;
