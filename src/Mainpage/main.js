import styled from "styled-components"
import {useHistory} from "react-router-dom";
import "./style2.css"
const Learn=styled.button`background-color:red`



function Mainpage(){
const history = useHistory()
    function learnpage(){
        history.push("/learn")
    }
    return (
        <div>
            
            <a href="https://mail.google.com/ ">   
            <img src="https://www.howtogeek.com/wp-content/uploads/2019/03/gmail-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1"/>
            </a> 
            
            <a href="https://twitter.com/">
            <img src="https://play-lh.googleusercontent.com/8sc6LSo3dRf54GaLdQR8UZfzd_fgHgWMJlNxGLP1HWPEU7YY4UxkyHc8-qCNwtyiqO55"/>
            </a>
            <a href="https://www.kakaocorp.com/">
            <img src="https://play-lh.googleusercontent.com/8_0SDfkFXAFm12A7XEqkyChCdGC055J6fC8JR7qynNuO3qNOczIoNHo4U4lad8xYMJOL"/>
            </a>
            
            <Learn onclick={learnpage} className="A">learn more</Learn>
        </div>
    )
}
export default Mainpage
