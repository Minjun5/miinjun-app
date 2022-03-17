import logo from './logo.svg';
import './App.css';

function app() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
import { div } from "prelude-ls";
import { BrowseRouter as Router, Route } from "react-router-dom"
import {useHistory}from "react-router-dom";
import Loginpage from "./Loginpage";
import MainPage from "./MainPage"
const navigate=()=>{alert("click")}


function pp(){
    return (
        <div>
            
            <Router>
                <Route exact path="/" element={<Loginpage/>}/>
                <Route exact path="/main" component={<MainPage/>}/>
            </Router>  
            <Loginpage onclick={navigate}></Loginpage> 
            
        </div>
    )
}
}
export default pp;
