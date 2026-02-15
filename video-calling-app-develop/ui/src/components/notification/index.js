// import React, { useContext } from "react";

// import { Button } from "@material-ui/core";
// import Snackbar from "@material-ui/core/Snackbar";
// import Alert from "@material-ui/lab/Alert";
// import { Typography } from "@material-ui/core";
// import { SocketContext } from "src/socket-context";

// const Notifications = () => {
//   const { answerCall, call, callAccepted } = useContext(SocketContext);

//   const showNotification = call.isReceivingCall && !callAccepted;
//   return (
//     <>
//       {showNotification && (
//         <Snackbar
//           open={showNotification}
//           anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         >
//           <Alert severity="info">
//             <Typography variant="h5" align="center">
//               {call.name} is calling
//             </Typography>
//             <Button variant="contained" color="primary" onClick={answerCall}>
//               Answer
//             </Button>
//           </Alert>
//         </Snackbar>
//       )}
//     </>
//   );
// };

// export default Notifications;




import React, { useContext } from "react";
import { Button, Typography, Snackbar, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { SocketContext } from "src/socket-context";

const useStyles = makeStyles((theme) => ({
  alert: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(to right, #6a11cb, #2575fc)", // modern gradient
    color: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    borderRadius: "15px",
    padding: theme.spacing(2),
    minWidth: "300px",
    textAlign: "center",
  },
  callButton: {
    marginTop: theme.spacing(2),
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: "30px",
    background: "linear-gradient(to right, #ff416c, #ff4b2b)", // gradient button
    color: "#fff",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
      background: "linear-gradient(to right, #ff4b2b, #ff416c)",
    },
  },
  nameText: {
    fontWeight: 600,
    fontSize: "1.2rem",
    textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
  },
}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();

  const showNotification = call.isReceivingCall && !callAccepted;

  return (
    <>
      {showNotification && (
        <Snackbar
          open={showNotification}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert className={classes.alert} severity="info">
            <Typography className={classes.nameText}>
              {call.name} is calling
            </Typography>
            <Button
              variant="contained"
              className={classes.callButton}
              onClick={answerCall}
            >
              Answer
            </Button>
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Notifications;
