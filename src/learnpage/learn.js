import styled from "styled-components";
import React from "react";
import {ProgressBar} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const A=styled.h1`
font-family:arial;
font-weight:bold;
font-size:24px;


`;
const B=styled.div`

font-size:24px;`;

const C=styled.li`

font-size:24px;
`;

const D=styled.li`font-size:24px;

`;

const E=styled.li`font-size:24px;
`;

const F=styled.li`font-size:24px;

`;

const Container=styled.div`
`;
const Label1=styled.div``

const Label2=styled.div``


function Learnpage(){
    const barstyle={
        width:"300px",
        height:"30px",
    }
    return(
        <div>
        <Container>    
        <A>About Me</A>
        <B>Hello, My name is Minjun Shin. Nice to meet you.</B>
        <C>Name:Minjun Shin</C>
        <D>Grade:10th grade</D>
        <E>School:BC Collegiate</E>
        <F>Birth date:14 May 2005</F>
        <Label1>GPA
        <ProgressBar style={barstyle} label={'4.8/5.0'} max={5.0} min={0.0} now={4.0}></ProgressBar> 
        </Label1>
        <Label2>SAT
        <ProgressBar style={barstyle} label={'4.0/5.0'} max={5.0} min={0.0} now={4.0}></ProgressBar>
        </Label2>
        </Container>
        </div>
         
         
    )
}
export default Learnpage
