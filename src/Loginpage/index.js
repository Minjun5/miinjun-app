import styled from "styled-components";
import React, {useState} from "react";
import {useHistory}from "react-router-dom";

const Conainer=styled.div`
font-size:30px;`
const Rightside=styled.h1`
background-image:url(https://www.worldatlas.com/r/w960-q80/upload/89/99/3b/shutterstock-1263201358.jpg)
`
const Welcome=styled.h1`
color:white;
font-weight:800;
font-size:40px`

const Leftside=styled.div`
background-color:#344ceb
display:flex`

const Label=styled.label`background-image
`
const Button=styled.h2`
width:20%
height:30%
color:red;`

const P=styled.p`image:url(https://blog.kakaocdn.net/dn/cZsyTw/btq0u5VBWge/F7xmauYA6r8nnbXSz2vJhK/img.png)
width:20%
height:20%
display:flex
`

function loginpage() {
    const [user, setuser]=useState({
        id="",
        password=""
    });//when we first load a oage we initialize 
       //the states to empty string/null/0
       //states will be filled in when the user does specification
    const {id,password}=user
   if(id===""|| password===""){
       alert('wrong')
   }
   if(id==="m"&&password==="1234"){
       history.push("/main")
   }
    const navigateToMainPage=()=>{history.push("/main")

    }
    const putUserinfo=(e)=>{
        const{name,value=e.target};
        console.log(name)
        console.log(value)
        setuser({...user,
        [name]:value}
        );console.log(user)
        };
    //e stands for event
    return (
        <Conainer>
            <Rightside><H1>loginpage</H1>
                <Welcome>Welcome</Welcome>
                <Input type="text" value="id" name="name" onChange={putUserinfo}></Input>
                {/*//we are going to replace emty string to the following input by the user**/}
                <Label>ID</Label>
                <LabelWrspper>
                <Input type="password"></Input>
                <Label>password</Label>
                </LabelWrspper>
                <Button>Login</Button>
                <Loginpage onclink={navigateToMainPage}></Loginpage>
                <P></P>
            </Rightside>
            <Leftside>hi</Leftside>
        </Conainer>)
}
export default loginpage;