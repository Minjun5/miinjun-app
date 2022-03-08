import logo from './logo.svg';
import './App.css';
import loginpage from './Login page';

function App() {
  return <loginpage/>}
import { div } from "prelude-ls";
import { BrowseRouter as Router, Route } from "react-router-dom"
import {useHistory}from "react-router-dom";
import Loginpage from "./Loginpage";
import MainPage from "./MainPage"
const navigate=()=>{alert("click")}
function Loginpage(){
  const history=useHistory()
}
function App(){
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
export default App
export default App;
