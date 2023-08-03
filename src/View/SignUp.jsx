// import { Snackbar } from "@mui/material";
// import MuiAlert from "@mui/material/Alert";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import * as React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../Components/Logo";
// import { useSignUpMutation } from "../../Redux/AuthApi/AuthApi";
// import { getDate } from "../../utils/getDate";

// const theme = createTheme();

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// export default function SignInSide() {
//   const [payloadAlert, setPayloadAlert] = useState(false);
//   const [errorAlert, setErrorAlert] = useState(false);

//   const [payloadMsg, setPayloadMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const [signUp] = useSignUpMutation();
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     await signUp({
//       name: data.get("name"),
//       email: data.get("email"),
//       password: data.get("password"),
//       Contact: data.get("Contact"),
//     })
//       .unwrap()
//       .then((payload) => {
//         setTimeout(() => navigate("/SignIn"), 3000); //navigate after 3 seconds
//         setPayloadMsg(payload.msg);
//         setPayloadAlert(true);
//       })
//       .catch((error) => {
//         setErrorMsg(error.data.msg);
//         setErrorAlert(true);
//       });
//   };

//   return (
//     <>
//       <Snackbar
//         open={errorAlert}
//         autoHideDuration={6000}
//         onClose={() => setErrorAlert(false)}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={() => {
//             setErrorAlert(false);
//           }}
//           severity="error"
//           sx={{ width: "100%" }}
//         >
//           {errorMsg}
//         </Alert>
//       </Snackbar>

//       <Snackbar
//         open={payloadAlert}
//         autoHideDuration={6000}
//         onClose={() => setPayloadAlert(false)}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={() => {
//             setPayloadAlert(false);
//           }}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           {payloadMsg}
//         </Alert>
//       </Snackbar>
//       <ThemeProvider theme={theme}>
//         <AppBar position="static" sx={{ backgroundColor: "white" }}>
//           <Container maxWidth="xl">
//             <Toolbar
//               disableGutters
//               sx={{ display: "flex", justifyContent: "space-between" }}
//             >
//               <Logo company_name="mixcat" />
//               <Typography variant="h5" noWrap component="a" href="">
//                 {getDate()}
//               </Typography>
//             </Toolbar>
//           </Container>
//         </AppBar>
//         <Grid
//           container
//           component="main"
//           sx={{
//             height: "900px",
//             backgroundImage: "url(https://source.unsplash.com/random)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           justifyContent="flex-end"
//         >
//           <CssBaseline />
//           <Grid
//             item
//             xs={12}
//             sm={8}
//             md={5}
//             component={Paper}
//             elevation={20}
//             alignSelf="center"
//             position="relative"
//             right="10%"
//             height="725px"
//             sx={{ borderRadius: "24px" }}
//           >
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 borderRadius: "24px",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins",
//                   fontWeight: "Bold",
//                   fontSize: "48px",
//                   lineHeight: "72px",
//                   alignContent: "center",
//                 }}
//               >
//                 Access the Platform
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 3 }}
//               >
//                 <Grid container spacing={2} sx={{ p: "17px 17px 17px 33px" }}>
//                   <Grid item xs={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="name"
//                       label="name"
//                       name="name"
//                       autoComplete="name"
//                       sx={{ border: "72px" }}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="Contact"
//                       label="Contact"
//                       name="Contact"
//                       autoComplete="Contact"
//                       sx={{ border: "72px" }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="email"
//                       label="Email Address"
//                       name="email"
//                       autoComplete="email"
//                       sx={{ border: "72px" }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       name="password"
//                       label="Password"
//                       type="password"
//                       id="password"
//                       autoComplete="new-password"
//                     />
//                   </Grid>
//                 </Grid>
//                 <Box display="flex" sx={{ justifyContent: "space-around" }}>
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       mt: 3,
//                       mb: 2,
//                       borderRadius: "51px",
//                       width: "80%",
//                     }}
//                   >
//                     Sign Up
//                   </Button>
//                 </Box>
//                 <Grid container p="17px 17px 17px 33px">
//                   <Grid item>
//                     <Link to="/SignIn" variant="body2">
//                       {"Already have an account? Login"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//     </>
//   );
// }
