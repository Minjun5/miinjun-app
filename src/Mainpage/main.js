import styled from "styled-components"
import { BrowseRouter as Router, Route } from "react-router-dom"

const navigate=()=>{alert("click")}

const B=styled.h1`image:url(https://www.howtogeek.com/wp-content/uploads/2019/03/gmail-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1)
width:10%
height:10%
display:flex
`
const A=styled.h1`image:url(https://play-lh.googleusercontent.com/8sc6LSo3dRf54GaLdQR8UZfzd_fgHgWMJlNxGLP1HWPEU7YY4UxkyHc8-qCNwtyiqO55)
width:10%
height:10%
display:flex
`

const c=styled.h1`image:url(https://play-lh.googleusercontent.com/8_0SDfkFXAFm12A7XEqkyChCdGC055J6fC8JR7qynNuO3qNOczIoNHo4U4lad8xYMJOL)
width:10%
height:10%
display:flex`



function mainpage(){

    return (
        <div>
            <Router>
                <Route exact path="/login" element={<Loginpage/>}/>
                <Route exact path="/main" component={<MainPage/>}/>
            </Router>  
            <Loginpage onclick={navigate}></Loginpage> 
            <A></A>
            <B></B>
            
        </div>
    )
}
export default mainpage