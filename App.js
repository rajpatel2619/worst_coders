import React from 'react';
import Home from './screens/home'
import Login from './screens/login'
import {Switch,Redirect,BrowserRouter, Route} from 'react-router-dom'
import NF from './screens/404';
import Nav from './components/nav';
import Register from './screens/register';
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      user_login:"false",
      user_type:"guest"
    }
  }

  render(){

    return(
      <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" >
        
            <Home />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/register" >
            <Register />
          </Route>



          <Route path="/404" >
            <NF />
          </Route>

          <Redirect to="/404"  />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
