import { BrowseRouter as Router, Route } from "react-router-dom"
import Loginpage from "./Loginpage";
import MainPage from "./MainPage"



function App(){
    return (
        <div>
            
            <Router>
                <Route exact path="/" element={<Loginpage/>}/>
                <Route exact path="/main" component={<MainPage/>}/>
            </Router>  
            
            
        </div>
    )
}
export default App;
