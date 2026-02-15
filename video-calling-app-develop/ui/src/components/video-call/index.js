// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Alert from "@material-ui/lab/Alert";

// import VideoPlayer from "src/components/video-call/video-player";
// import Sidebar from "src/components/sidebar";
// import Notifications from "src/components/notification";

// const useStyles = makeStyles(() => ({
//   wrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: "100%"
//   }
// }));

// const App = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.wrapper}>
//       <Alert severity="warning">
//         Video calling might not work if multiple people are trying to connect as
//         the server is hosted on free service. You can try couple of times to
//         check or better clone the repo.
//       </Alert>
//       <VideoPlayer />
//       <Sidebar />
//       <Notifications />
//     </div>
//   );
// };

// export default App;



import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import VideoPlayer from "src/components/video-call/video-player";
import Sidebar from "src/components/sidebar";
import Notifications from "src/components/notification";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(3),
    background: "linear-gradient(to right, #e0eafc, #cfdef3)", // subtle gradient background
    minHeight: "100vh",
  },
  alert: {
    width: "90%",
    maxWidth: "900px",
    marginBottom: theme.spacing(3),
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontWeight: 500,
    background: "linear-gradient(to right, #fff3cd, #ffeeba)", // gradient warning
    color: "#856404",
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Alert severity="warning" className={classes.alert}>
        Video calling might not work if multiple people are trying to connect as
        the server is hosted on free service. You can try a couple of times to
        check or better clone the repo.
      </Alert>

      <div className={classes.contentWrapper}>
        <VideoPlayer />
        <Sidebar />
      </div>

      <Notifications />
    </div>
  );
};

export default App;

