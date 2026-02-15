// import React from "react";
// import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import { Typography } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   paper: {
//     padding: theme.spacing(2),
//     height: "inherit",
//     backgroundImage: 'url("video-call.jpg")',
//     backgroundSize: "cover",
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   },
//   image: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//     borderRadius: "10%"
//   },
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   mobileContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column"
//   },
//   button: {
//     textTransform: "none",
//     marginTop: "20px",
//     fontWeight: "bold"
//   }
// }));

// const LoginScreen = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.root}>
//       <Grid container spacing={3} className={classes.container}>
//         <Grid item sm={6} className={classes.mobileContainer}>
//           <Box
//             display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
//             width="70%"
//           >
//             <Container maxWidth="sm">
//               <img src="video-call.jpg" className={classes.image } alt="i" />
//             </Container>
//           </Box>
//           <Typography variant="h4" align="center">
//             Welcome to video calling app.
//           </Typography>
//           <Button
//             variant="outlined"
//             className={classes.button}
//             color="secondary"
//             onClick={() => {
//               window.location.href = `${window.location.origin}/call`;
//             }}
//           >
//             JOIN
//           </Button>
//         </Grid>
//         <Grid item sm={6}>
//           <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
//             <Container maxWidth="sm">
//               <img src="video-call.jpg" className={classes.image} alt="m" />
//             </Container>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default LoginScreen;




// import React from "react";
// import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import { Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(to right, #6a11cb, #2575fc)", // gradient background
//   },
//   paper: {
//     padding: theme.spacing(2),
//     height: "inherit",
//     backgroundImage: 'url("video-call.jpg")',
//     backgroundSize: "cover",
//     textAlign: "center",
//     color: "#fff", // brighter text
//     borderRadius: "20px",
//     boxShadow: "0 15px 40px rgba(0,0,0,0.4)", // subtle shadow
//   },
//   image: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//     borderRadius: "20px", // smoother corners
//     boxShadow: "0 10px 20px rgba(0,0,0,0.3)", // nice shadow for image
//     transition: "transform 0.3s ease",
//     "&:hover": {
//       transform: "scale(1.05)",
//     },
//   },
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   mobileContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     background: "rgba(0,0,0,0.5)", // semi-transparent overlay
//     padding: theme.spacing(3),
//     borderRadius: "20px",
//   },
//   button: {
//     textTransform: "none",
//     marginTop: "25px",
//     fontWeight: "bold",
//     padding: "10px 40px",
//     borderRadius: "30px",
//     fontSize: "1.1rem",
//     color: "#fff",
//     borderColor: "#fff",
//     background: "linear-gradient(to right, #ff416c, #ff4b2b)", // gradient button
//     transition: "all 0.3s ease",
//     "&:hover": {
//       background: "linear-gradient(to right, #ff4b2b, #ff416c)",
//       transform: "translateY(-3px)",
//       boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
//     },
//   },
//   title: {
//     marginTop: theme.spacing(2),
//     color: "#fff",
//     fontWeight: 600,
//     textShadow: "2px 2px 8px rgba(0,0,0,0.5)", // subtle text shadow
//   },
// }));

// const LoginScreen = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.root}>
//       <Grid container spacing={3} className={classes.container}>
//         <Grid item sm={6} className={classes.mobileContainer}>
//           <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }} width="70%">
//             <Container maxWidth="sm">
//               <img src="video-call.jpg" className={classes.image} alt="i" />
//             </Container>
//           </Box>
//           <Typography variant="h4" align="center" className={classes.title}>
//             Welcome to video calling app
//           </Typography>
//           <Button
//             variant="contained"
//             className={classes.button}
//             onClick={() => {
//               window.location.href = `${window.location.origin}/call`;
//             }}
//           >
//             JOIN
//           </Button>
//         </Grid>
//         <Grid item sm={6}>
//           <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
//             <Container maxWidth="sm">
//               <img src="video-call.jpg" className={classes.image} alt="m" />
//             </Container>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default LoginScreen;




// src/components/login-screen.js (updated)
import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
  
  },
  paper: {
    padding: theme.spacing(2),
    height: "inherit",
    backgroundImage: 'url("video-call.jpg")',
    backgroundSize: "cover",
    textAlign: "center",
    color: "#fff",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  mobileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "rgba(0,0,0,0.5)",
    padding: theme.spacing(4),
    borderRadius: "20px",
    width: "100%",
    maxWidth: "500px",
  },
  button: {
    textTransform: "none",
    marginTop: "2px",
    fontWeight: "bold",
    padding: "10px 40px",
    borderRadius: "30px",
    fontSize: "1.1rem",
    color: "#fff",
    border: "2px solid transparent",
    transition: "all 0.3s ease",
    width: "200px",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
    },
  },
  joinButton: {
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
    "&:hover": {
      background: "linear-gradient(to right, #ff4b2b, #ff416c)",
    },
  },
  chatButton: {
    background: "linear-gradient(to right, #36D1DC, #5B86E5)",
    "&:hover": {
      background: "linear-gradient(to right, #5B86E5, #36D1DC)",
    },
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
    width: "100%",
    alignItems: "center",
    marginTop: theme.spacing(3),
    marginLeft: "70px",
  },
  title: {
    marginTop: theme.spacing(2),
    color: "#fff",
    fontWeight: 600,
    fontSize: "2.2rem",
    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: "#e0e0e0",
    fontWeight: 400,
    fontSize: "1.1rem",
    marginBottom: theme.spacing(4),
    textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
  },
}));

const LoginScreen = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={6} className={classes.mobileContainer}>
          <Box display={{ xs: "block", md: "none" }} width="70%">
            <Container maxWidth="sm">
              <img src="video-call.jpg" className={classes.image} alt="Video Call" />
            </Container>
          </Box>
          
          <Typography variant="h3" align="center" className={classes.title}>
            Welcome to "UCP ConnectHub"
          </Typography>
          
          <Typography variant="h6" align="center" className={classes.subtitle}>
            Connect with your own university people through video calls or chat rooms
          </Typography>
          
          <Box display={{ xs: "none", md: "block" }} width="50%">
            <Container maxWidth="sm">
              <img src="data:image/jpeg;base64,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" className={classes.image} alt="Video Call" />
            </Container>
          </Box>
          
          <Box className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={`${classes.button} ${classes.joinButton}`}
              onClick={() => {
                window.location.href = `${window.location.origin}/call`;
              }}
            >
              JOIN VIDEO CALL
            </Button>
            
            <Button
              variant="contained"
              className={`${classes.button} ${classes.chatButton}`}
              onClick={() => {
                window.location.href = `${window.location.origin}/chat`;
              }}
            >
              ENTER CHAT ROOM
            </Button>
          </Box>
        </Grid>
        
        <Grid item md={6}>
          <Box display={{ xs: "none", md: "block" }}>
            <Container maxWidth="sm">
              <img src="video-call.jpg" className={classes.image} alt="Video Call" />
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;