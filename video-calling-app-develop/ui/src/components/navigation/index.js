// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import DuoIcon from "@material-ui/icons/Duo";
// import { makeStyles } from "@material-ui/core/styles";
// import GitHubIcon from "@material-ui/icons/GitHub";
// const useStyles = makeStyles(theme => ({
//   logo: {
//     fontSize: "54px"
//   },
//   link: {
//     color: "black",
//     marginLeft: "20px"
//   }
// }));

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func
// };

// export default function ElevateAppBar(props) {
//   const styles = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <ElevationScroll {...props}>
//         <AppBar color="transparent">
//           <Toolbar>
//             <DuoIcon color="primary" className={styles.logo} />

//             <Typography variant="h5">Connect</Typography>

//             <a
//               href="https://github.com/knowankit/video-calling-app"
//               className={styles.link}
//             >
//               <GitHubIcon />
//             </a>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//       <Toolbar />
//     </React.Fragment>
//   );
// }



// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import DuoIcon from "@material-ui/icons/Duo";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   logo: {
//     fontSize: "48px",
//     marginRight: theme.spacing(1),
//     color: "#ff4b2b", // modern accent color
//   },
//   title: {
//     flexGrow: 1,
//     fontWeight: 600,
//     color: "#333", // darker text for better contrast
//     letterSpacing: "1px",
//   },
//   link: {
//     color: "#333",
//     marginLeft: theme.spacing(2),
//     display: "flex",
//     alignItems: "center",
//     transition: "all 0.3s ease",
//     "&:hover": {
//       color: "#ff416c", // hover accent
//       transform: "scale(1.1)",
//     },
//   },
//   appBar: {
//     background: "rgba(255, 255, 255, 0.9)", // slightly transparent
//     backdropFilter: "blur(10px)", // glassmorphism effect
//     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//   },
// }));

// function ElevationScroll(props) {
//   const { children, window } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

// export default function ElevateAppBar(props) {
//   const styles = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <ElevationScroll {...props}>
//         <AppBar className={styles.appBar} color="transparent">
//           <Toolbar>
//             <DuoIcon className={styles.logo} />
//             <Typography variant="h5" className={styles.title}>
//               Connect
//             </Typography>
//             <a
//               href="https://github.com/knowankit/video-calling-app"
//               className={styles.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <GitHubIcon />
//             </a>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//       <Toolbar />
//     </React.Fragment>
//   );
// }




import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"; // Add this
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import DuoIcon from "@material-ui/icons/Duo";
import ChatIcon from "@material-ui/icons/Chat"; // Add this
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home"; // Add this
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom"; // Add this

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "48px",
    marginRight: theme.spacing(1),
    color: "#ff4b2b",
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    color: "#333",
    letterSpacing: "1px",
  },
  navLink: { // Renamed from 'link' to 'navLink'
    color: "#333",
    marginLeft: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#ff416c",
      transform: "scale(1.1)",
    },
  },
  navButton: { // New style for navigation buttons
    marginLeft: theme.spacing(2),
    color: "#333",
    fontWeight: 500,
    textTransform: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#ff416c",
      background: "rgba(255, 65, 108, 0.1)",
    },
  },
  activeNavButton: { // Style for active navigation
    color: "#ff416c",
    fontWeight: 600,
  },
  appBar: {
    background: "rgba(255, 255, 255, 0.95)", // Increased opacity
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  githubLink: { // Specific style for GitHub link
    color: "#333",
    marginLeft: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#ff416c",
      transform: "scale(1.1)",
    },
  },
  iconMargin: { // For icons inside buttons
    marginRight: theme.spacing(1),
  },
  navButtonsContainer: { // Container for navigation buttons
    display: "flex",
    alignItems: "center",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const styles = useStyles();
  
  // Check current path to highlight active navigation
  const currentPath = window.location.pathname;

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={styles.appBar} color="transparent">
          <Toolbar>
            <DuoIcon className={styles.logo} />
            <Typography variant="h5" className={styles.title}>
              
             UCP ConnectHub {/* Updated name to reflect both features */}
            </Typography>
            
            {/* Navigation Buttons */}
            <div className={styles.navButtonsContainer}>
              <Button
                component={RouterLink}
                to="/"
                className={`${styles.navButton} ${
                  currentPath === "/" ? styles.activeNavButton : ""
                }`}
                startIcon={<HomeIcon className={styles.iconMargin} />}
              >
                Home
              </Button>
              
              <Button
                component={RouterLink}
                to="/call"
                className={`${styles.navButton} ${
                  currentPath === "/call" ? styles.activeNavButton : ""
                }`}
                startIcon={<DuoIcon className={styles.iconMargin} />}
              >
                Video Call
              </Button>
              
              <Button
                component={RouterLink}
                to="/chat"
                className={`${styles.navButton} ${
                  currentPath === "/chat" ? styles.activeNavButton : ""
                }`}
                startIcon={<ChatIcon className={styles.iconMargin} />}
              >
                Chat Room
              </Button>
              
              {/* GitHub Link */}
              <a
                href="https://github.com/Nimra-Bilal/video-calling-app-develop"
                className={styles.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}