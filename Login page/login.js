import styled from "styled-components";
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
display:fkex`

const Label=styled.label`
`
const Button=styled.h2`
width:20%
height:30%
color:red;`

function loginpage() {
    return (
        <Conainer>
            <Rightside><H1>loginpage</H1>
                <Welcome>Welcome</Welcome>
                <Input></Input>
                <Label>ID</Label>
                <LabelWrspper>
                <Input></Input>
                <Label>password</Label>
                </LabelWrspper>
                <Button>Login</Button>
            </Rightside>
            <Leftside>hi</Leftside>
        </Conainer>)
}


export default loginpage;
