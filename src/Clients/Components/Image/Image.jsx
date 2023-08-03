import React from 'react'
import styled from "@emotion/styled";
const IMG=styled.img`
opacity:0.5;
margin:50px;
&:hover{
    opacity:1;
}
@media screen and (max-width:1024px) {
    margin-left:20%;
    text-align:center;
}
@media screen and (max-width:880px) {
   
    margin-left:45%;
    text-align:center;
}
@media screen and (max-width:590px) {
   
   margin-left:37%;
   text-align:center;
}
`
const Image = (props) => {
  return (
    <div>
      <IMG src={props.URL}/>
    </div>
  )
}

export default Image;
