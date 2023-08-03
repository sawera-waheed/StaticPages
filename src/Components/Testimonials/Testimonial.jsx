import React from "react";
import { Grid } from "@mui/material";

import styled from "@emotion/styled";
import { Box ,Card } from "@mui/material";

const BOX =styled(Box)`
margin:10px 0px 100px 0px;
background-color:transparent;
width:500px;

@media screen and (max-width:768px){
    width:350px;
}
@media screen and (max-width:1024px){
    width:310px; 
}
`

const CARD=styled(Card)`
padding:20px 2px 20px 2px;
border-radius: 0px;
&:hover{
    box-shadow: 5px 5px 20px 0px grey;
    border-bottom: 5px solid blue; 
}

`
const IMG=styled.img`
height: 60px;
`
const P=styled.p`
font-size:20px;
font-weight:bold;
margin:6px 0px 0px 10px;
`
const P1=styled.p`
color:grey;
font-size:20px;
margin:2px 0px 0px 10px;
`
const P2=styled.p`
color:grey;
font-size:18px;
margin:20px 0px 20px 0px;
text-align:left;
`
import { CardContent, CardActions } from "@mui/material";

const Testimonial = (props) => {
  return (
    <BOX>
      <CARD>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <IMG src={props.url} />
            </Grid>
            <Grid item xs={10}>
              <P>{props.name}</P>
              <P1>{props.position}</P1>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <P2>
                “Top Design and the best support. I have ever experienced!”
              </P2>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {props.star}
              {props.star2}
              {props.star3}
              {props.star4}
              {props.star5}
            </Grid>
          </Grid>
        </CardActions>
      </CARD>
    </BOX>
  );
};

export default Testimonial;
