import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../Redux/AuthApi/AuthApi";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { Login } from "../../Redux/userSlice";
import MuiAlert from "@mui/material/Alert";
import { getDate } from "../../utils/getDate";
import Logo from "../../Components/Logo";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function SignInSide() {
  const dispatch = useDispatch();

  const [signIn] = useSignInMutation();
  const [open, setOpen] = React.useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    await signIn({
      email: data.get("email"),
      password: data.get("password"),
    }) //api call
      .unwrap()
      .then((payload) => {
        dispatch(Login(payload)); //Update state
        navigate("/Admin/Dashboard");
      })
      .catch((error) => {
        setAlertMsg(error.data.msg);
        setOpen(true);
      });
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
      <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Logo company_name="mixcat" />
              <Typography variant="h5" noWrap component="a" href="">
                {getDate()}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Grid
          container
          component="main"
          sx={{
            height: "900px",
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          justifyContent="flex-end"
        >
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={20}
            sx={{ borderRadius: "24px" }}
            alignSelf="center"
            position="relative"
            right="10%"
            height="725px"
          >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "24px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "Bold",
                  fontSize: "48px",
                  lineHeight: "72px",
                  alignContent: "center",
                }}
              >
                Access the Platform
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2} sx={{ p: "17px 17px 17px 33px" }}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      sx={{ border: "72px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs display={"flex"} justifyContent={"flex-end"}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Box display="flex" sx={{ justifyContent: "space-around" }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      borderRadius: "51px",
                      width: "80%",
                    }}
                  >
                    Sign in
                  </Button>
                </Box>
                <Grid container p="17px 17px 17px 33px">
                  <Grid item>
                    <Link to="/SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
