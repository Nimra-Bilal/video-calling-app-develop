// import React, { useContext } from "react";
// import { Grid, Typography, makeStyles } from "@material-ui/core";
// import Box from "@material-ui/core/Box";

// import { SocketContext } from "src/socket-context";

// const useStyles = makeStyles(theme => ({
//   videoContainer: {  // Changed from 'video' to 'videoContainer'
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px"
//     }
//   },
//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column"
//     }
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px"
//   },
//   videoElement: {  // Changed from 'video' to 'videoElement'
//     transform: "scaleX(-1)",
//     borderRadius: "10%"
//   },
//   blackScreen: {
//     backgroundColor: "black",
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px"
//     }
//   }
// }));

// const VideoPlayer = () => {
//   const {
//     name,
//     callAccepted,
//     myVideo,
//     userVideo,
//     callEnded,
//     stream,
//     call
//   } = useContext(SocketContext);
//   const classes = useStyles();

//   return (
//     <Grid container className={classes.gridContainer}>
//       {stream ? (
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" gutterBottom>
//             {name || "Name"}
//           </Typography>
//           <Box className={classes.videoContainer}>
//             <video
//               className={classes.videoElement}
//               playsInline
//               muted
//               ref={myVideo}
//               autoPlay
//             />
//           </Box>
//         </Grid>
//       ) : (
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" gutterBottom>
//             {name || "Name Ankit"}
//           </Typography>
//           <Box className={classes.blackScreen}></Box>
//         </Grid>
//       )}
//       {callAccepted && !callEnded && (
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" gutterBottom>
//             {call.name || "Name"}
//           </Typography>
//           <Box className={classes.videoContainer}>
//             <video
//               playsInline
//               ref={userVideo}
//               autoPlay
//               className={classes.videoElement}
//             />
//           </Box>
//         </Grid>
//       )}
//     </Grid>
//   );
// };

// export default VideoPlayer;



import React, { useContext } from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import { SocketContext } from "src/socket-context";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    width: "500px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(3),
    flexWrap: "wrap", // allows side-by-side and wrapping
  },
  videoElement: {
    width: "100%",
    height: "auto",
    transform: "scaleX(-1)",
    borderRadius: "15px",
    backgroundColor: "black",
  },
  blackScreen: {
    width: "500px",
    height: "280px",
    borderRadius: "15px",
    backgroundColor: "#000",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "170px",
    },
  },
  nameTag: {
    marginBottom: theme.spacing(1),
    fontWeight: 600,
    textAlign: "center",
    color: "#333",
    textShadow: "1px 1px 6px rgba(0,0,0,0.2)",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {/* My Video */}
      {stream && (
        <Grid item>
          <Typography variant="h5" className={classes.nameTag}>
            {name || "Your Name"}
          </Typography>
          <Box className={classes.videoContainer}>
            <video
              className={classes.videoElement}
              playsInline
              muted
              ref={myVideo}
              autoPlay
            />
          </Box>
        </Grid>
      )}

      {!stream && (
        <Grid item>
          <Typography variant="h5" className={classes.nameTag}>
            {name || "Your Name"}
          </Typography>
          <Box className={classes.blackScreen}></Box>
        </Grid>
      )}

      {/* User Video */}
      {callAccepted && !callEnded && (
        <Grid item>
          <Typography variant="h5" className={classes.nameTag}>
            {call.name || "Caller"}
          </Typography>
          <Box className={classes.videoContainer}>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.videoElement}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
