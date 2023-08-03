import React, { useEffect } from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import bg from "../../assets/bg.jpg";
const About = () => {
 
  return (
    <Container sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={6}>
          <Typography
            sx={{ margin: "50px", fontSize: "40px", fontWeight: "bold" }}
          >
            We build bridges between
            <Typography
              sx={{ color: "#808080", fontSize: "40px", fontWeight: "bold" }}
            >
              {" "}
              Comapnies and Customers
            </Typography>
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Typography sx={{ margin: "200px 50px 0px 50px", fontSize: "16px" }}>
            To build software that gives customer-facing team at small and
            medium sized bussinesses the ability to create fruitfull and
            enduring relationship with customer
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={bg}
            width="auto"
            height={"500px"}
            style={{ marginBottom: "50px" }}
          />
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ marginTop: "50px" }} />
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={6}>
          <Typography
            sx={{ margin: "50px", fontSize: "40px", fontWeight: "Bold" }}
          >
            Togather We <br/>
            Are Strong
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Typography
            sx={{ margin: "50px", fontSize: "16px", fontWeight: "Bold" }}
          >
            Our crew is always getting bigger but we are working on a same goal:
            to make sale success not only possible but invetible for the team
            everywhere
          </Typography>
          <Typography sx={{ margin: "50px", fontSize: "16px" }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
