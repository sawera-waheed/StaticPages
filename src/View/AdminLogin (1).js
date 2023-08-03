import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo";
import SnackbarComponent from "../../Components/Snackbar";
import { useGetScreenByIDMutation } from "../../Redux/ClientScreensApi/ClientScreenApi";
import { setScreenData } from "../../Redux/screenSlice";
import Text from "../../styled_Components/Typography";
import { getDate2 } from "../../utils/getDate";

const theme = createTheme();

export default function SignInSide() {
  const [open, setOpen] = React.useState(false);

  const [msg, setMsg] = React.useState("");

  const dispatch = useDispatch();

  const [signIn] = useGetScreenByIDMutation();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    await signIn({
      id: data.get("screenID"),
    }) //api call
      .unwrap()
      .then((payload) => {
        console.log(payload);
        dispatch(setScreenData(payload)); //Update state
        navigate(`/WebLink/${payload._id}`);
      })
      .catch((error) => {
        setMsg(error.msg);
        setOpen(true);
      });
  };

  return (
    <>
      <SnackbarComponent
        open={open}
        onClose={() => setOpen(false)}
        severity="error"
        message={msg}
      />

      <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Logo company_name={`RVR`} />

              <Text>{getDate2()}</Text>
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
            square
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
              }}
            >
              <Text>Access the Platform</Text>
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
                      id="screenID"
                      label="Screen ID"
                      name="screenID"
                      autoComplete="screenID"
                      sx={{ border: "72px" }}
                    />
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
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
