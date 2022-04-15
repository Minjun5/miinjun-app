import styled from "styled-components";
import  {useHistory} from "react-router-dom";
import React, {useState} from "react";
import "./style1.css"
const Welcome=styled.h1`
text-align:center;
height:100%;
width:100%;
color:blue;`;
const Label=styled.label`display:block;
`;
const Input=styled.input``
const Button=styled.button`background-color:red;`

function Loginpage() {
    const history=useHistory();

    const [user, setuser]=useState({
        id:"",
        password:""
    });//when we first load a oage we initialize 
//        //the states to empty string/null/0
       //states will be filled in when the user does specification
    const {id,password}=user
    function navigateToMainPage() {
   if(id===""|| password===""){
       alert('wrong')
   }
   if(id==="m"&&password==="1234"){
       history.push("/Mainpage/main.js")
   }
    

    }
    const putUserinfo=(e)=>{
        const {name,value}=e.target;
        console.log(name)
        console.log(value)
        setuser({...user,
        [name]:value}
        );console.log(user)
        };
    //e stands for event
    return (
        <div>
        <Welcome>Welcome!
        <Label for="password">password</Label>
        <Input id="password" type="password" name="password" onChange={putUserinfo}></Input>
        <Label for="text">ID</Label>
        <Input type="text" name="ID" onChange={putUserinfo}></Input>
        <Button onclick={navigateToMainPage} className="B">login</Button>
        </Welcome>
            
        
        </div>)
}
export default Loginpage;