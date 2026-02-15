// import React, { useState, useContext } from "react";
// import {
//   Button,
//   TextField,
//   Grid,
//   Typography,
//   Container
// } from "@material-ui/core";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import {
//   Assignment,
//   Phone,
//   PhoneDisabled,
//   VideoCall
// } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";

// import { SocketContext } from "src/socket-context";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexDirection: "column"
//   },
//   gridContainer: {
//     width: "100%",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column"
//     }
//   },
//   container: {
//     width: "800px",
//     margin: "35px 0",
//     padding: 0,
//     [theme.breakpoints.down("xs")]: {
//       width: "80%"
//     }
//   },
//   margin: {
//     marginTop: 20
//   },
//   padding: {
//     padding: 20
//   },
//   paper: {
//     padding: "10px 20px",
//     border: "2px solid black"
//   }
// }));

// const Sidebar = ({ children }) => {
//   const {
//     me,
//     callAccepted,
//     name,
//     setName,
//     callEnded,
//     leaveCall,
//     callUser,
//     setVideoAvailability,
//     isVideoAvailable
//   } = useContext(SocketContext);
//   const [idToCall, setIdToCall] = useState("");
//   const classes = useStyles();

//   return (
//     <Container className={classes.container}>
//       <form className={classes.root} noValidate autoComplete="off">
//         <Grid container className={classes.gridContainer}>
//           <Grid item xs={12} md={6} className={classes.padding}>
//             <Typography gutterBottom variant="h6">
//               Account Info
//             </Typography>
//             <TextField
//               label="Name"
//               value={name}
//               onChange={e => setName(e.target.value)}
//               fullWidth
//             />
//             <CopyToClipboard text={me} className={classes.margin}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 fullWidth
//                 startIcon={<Assignment fontSize="large" />}
//               >
//                 Copy Your ID
//               </Button>
//             </CopyToClipboard>
//           </Grid>
//           <Grid item xs={12} md={6} className={classes.padding}>
//             <Typography gutterBottom variant="h6">
//               Make a call
//             </Typography>
//             <TextField
//               label="ID to call"
//               value={idToCall}
//               onChange={e => setIdToCall(e.target.value)}
//               fullWidth
//             />
//             {callAccepted && !callEnded ? (
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 startIcon={<PhoneDisabled fontSize="large" />}
//                 fullWidth
//                 onClick={leaveCall}
//                 className={classes.margin}
//               >
//                 Hang Up
//               </Button>
//             ) : (
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 startIcon={<Phone fontSize="large" />}
//                 fullWidth
//                 onClick={() => callUser(idToCall)}
//                 className={classes.margin}
//               >
//                 Call
//               </Button>
//             )}
//             <Button
//               variant="outlined"
//               color="secondary"
//               startIcon={<VideoCall fontSize="large" />}
//               onClick={() => setVideoAvailability(!isVideoAvailable)}
//               className={classes.margin}
//             ></Button>
//           </Grid>
//         </Grid>
//       </form>
//       {children}
//     </Container>
//   );
// };

// export default Sidebar;













// import React, { useState, useContext } from "react";
// import {
//   Button,
//   TextField,
//   Grid,
//   Typography,
//   Container,
//   Paper,
// } from "@material-ui/core";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Assignment, Phone, PhoneDisabled, VideoCall } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";
// import { SocketContext } from "src/socket-context";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   gridContainer: {
//     width: "100%",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   container: {
//     width: "800px",
//     margin: "35px auto",
//     padding: 0,
//     [theme.breakpoints.down("xs")]: {
//       width: "90%",
//     },
//   },
//   card: {
//     padding: theme.spacing(3),
//     borderRadius: "15px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//     background: "#fff",
//     marginBottom: theme.spacing(3),
//   },
//   margin: {
//     marginTop: theme.spacing(2),
//   },
//   title: {
//     fontWeight: 600,
//     marginBottom: theme.spacing(2),
//     color: "#333",
//   },
//   button: {
//     textTransform: "none",
//     fontWeight: "bold",
//     borderRadius: "30px",
//     padding: "10px 0",
//     transition: "all 0.3s ease",
//   },
//   primaryButton: {
//     background: "linear-gradient(to right, #6a11cb, #2575fc)",
//     color: "#fff",
//     "&:hover": {
//       background: "linear-gradient(to right, #2575fc, #6a11cb)",
//       transform: "translateY(-2px)",
//       boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
//     },
//   },
//   secondaryButton: {
//     background: "linear-gradient(to right, #ff416c, #ff4b2b)",
//     color: "#fff",
//     "&:hover": {
//       background: "linear-gradient(to right, #ff4b2b, #ff416c)",
//       transform: "translateY(-2px)",
//       boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
//     },
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const Sidebar = ({ children }) => {
//   const {
//     me,
//     callAccepted,
//     name,
//     setName,
//     callEnded,
//     leaveCall,
//     callUser,
//     setVideoAvailability,
//     isVideoAvailable,
//   } = useContext(SocketContext);
//   const [idToCall, setIdToCall] = useState("");
//   const classes = useStyles();

//   return (
//     <Container className={classes.container}>
//       <form className={classes.root} noValidate autoComplete="off">
//         <Grid container className={classes.gridContainer} spacing={3}>
//           <Grid item xs={12} md={6}>
//             <Paper className={classes.card}>
//               <Typography variant="h6" className={classes.title}>
//                 Account Info
//               </Typography>
//               <TextField
//                 label="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 fullWidth
//                 className={classes.textField}
//                 variant="outlined"
//               />
//               <CopyToClipboard text={me}>
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   startIcon={<Assignment />}
//                   className={`${classes.button} ${classes.primaryButton}`}
//                 >
//                   Copy Your ID
//                 </Button>
//               </CopyToClipboard>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper className={classes.card}>
//               <Typography variant="h6" className={classes.title}>
//                 Make a Call
//               </Typography>
//               <TextField
//                 label="ID to call"
//                 value={idToCall}
//                 onChange={(e) => setIdToCall(e.target.value)}
//                 fullWidth
//                 className={classes.textField}
//                 variant="outlined"
//               />
//               {callAccepted && !callEnded ? (
//                 <Button
//                   variant="contained"
//                   startIcon={<PhoneDisabled />}
//                   fullWidth
//                   onClick={leaveCall}
//                   className={`${classes.button} ${classes.secondaryButton} ${classes.margin}`}
//                 >
//                   Hang Up
//                 </Button>
//               ) : (
//                 <Button
//                   variant="contained"
//                   startIcon={<Phone />}
//                   fullWidth
//                   onClick={() => callUser(idToCall)}
//                   className={`${classes.button} ${classes.primaryButton} ${classes.margin}`}
//                 >
//                   Call
//                 </Button>
//               )}
//               <Button
//                 variant="contained"
//                 startIcon={<VideoCall />}
//                 fullWidth
//                 onClick={() => setVideoAvailability(!isVideoAvailable)}
//                 className={`${classes.button} ${classes.secondaryButton} ${classes.margin}`}
//               >
//                 {isVideoAvailable ? "Disable Video" : "Enable Video"}
//               </Button>
//             </Paper>
//           </Grid>
//         </Grid>
//       </form>
//       {children}
//     </Container>
//   );
// };

// export default Sidebar;




















import React, { useState, useContext } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { 
  Assignment, 
  Phone, 
  PhoneDisabled, 
  VideoCall,
  Close
} from "@material-ui/icons";
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "src/socket-context";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "800px",
    margin: "35px auto",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  card: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    background: "#fff",
    marginBottom: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: "#333",
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: "30px",
    padding: "10px 0",
    transition: "all 0.3s ease",
  },
  primaryButton: {
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "#fff",
    "&:hover": {
      background: "linear-gradient(to right, #2575fc, #6a11cb)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
    },
    "&:disabled": {
      background: "#ccc",
      transform: "none",
      boxShadow: "none",
    },
  },
  secondaryButton: {
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
    color: "#fff",
    "&:hover": {
      background: "linear-gradient(to right, #ff4b2b, #ff416c)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
    },
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  idDisplay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 2),
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    marginBottom: theme.spacing(2),
    border: "1px solid #dee2e6",
  },
  idText: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: "0.9rem",
    color: "#495057",
    wordBreak: "break-all",
  },
  copySection: {
    marginBottom: theme.spacing(3),
  },
}));

const Sidebar = ({ children }) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    setVideoAvailability,
    isVideoAvailable,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const classes = useStyles();

  const handleCopy = () => {
    setSnackbarMessage("ID copied to clipboard!");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container className={classes.gridContainer} spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.card}>
              <Typography variant="h6" className={classes.title}>
                Account Info
              </Typography>
              
              {/* Name Input */}
              <TextField
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                className={classes.textField}
                variant="outlined"
                placeholder="Enter your name"
              />

              {/* ID Display Section */}
              <div className={classes.copySection}>
                <Typography variant="subtitle2" style={{ marginBottom: 8, color: "#666" }}>
                  Your Unique ID:
                </Typography>
                
                {me ? (
                  <div className={classes.idDisplay}>
                    <Typography className={classes.idText}>
                      {me}
                    </Typography>
                    <CopyToClipboard text={me} onCopy={handleCopy}>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Assignment fontSize="small" />}
                        style={{ 
                          marginLeft: 8,
                          textTransform: "none"
                        }}
                      >
                        Copy
                      </Button>
                    </CopyToClipboard>
                  </div>
                ) : (
                  <Typography variant="body2" color="textSecondary" style={{ textAlign: "center", padding: 16 }}>
                    Connecting... Your ID will appear here soon.
                  </Typography>
                )}

                <CopyToClipboard text={me} onCopy={handleCopy}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<Assignment />}
                    className={`${classes.button} ${classes.primaryButton}`}
                    disabled={!me}
                  >
                    {me ? "Copy Your ID" : "Waiting for ID..."}
                  </Button>
                </CopyToClipboard>
              </div>

              <Typography variant="caption" color="textSecondary">
                Share this ID with others so they can call you
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper className={classes.card}>
              <Typography variant="h6" className={classes.title}>
                Make a Call
              </Typography>
              
              <TextField
                label="Enter ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
                className={classes.textField}
                variant="outlined"
                placeholder="Paste the other person's ID here"
              />
              
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  startIcon={<PhoneDisabled />}
                  fullWidth
                  onClick={leaveCall}
                  className={`${classes.button} ${classes.secondaryButton} ${classes.margin}`}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<Phone />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  className={`${classes.button} ${classes.primaryButton} ${classes.margin}`}
                  disabled={!idToCall.trim()}
                >
                  Call
                </Button>
              )}
              
              <Button
                variant="contained"
                startIcon={<VideoCall />}
                fullWidth
                onClick={() => setVideoAvailability(!isVideoAvailable)}
                className={`${classes.button} ${classes.secondaryButton} ${classes.margin}`}
              >
                {isVideoAvailable ? "Turn Video Off" : "Turn Video On"}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </form>
      
      {/* Snackbar for feedback */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />

      {children}
    </Container>
  );
};

export default Sidebar;