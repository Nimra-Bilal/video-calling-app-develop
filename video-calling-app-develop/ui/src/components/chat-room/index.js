// // src/components/chat-room.js
// import React, { useState, useContext, useEffect, useRef } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Avatar,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   IconButton,
// } from "@material-ui/core";
// import SendIcon from "@material-ui/icons/Send";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import { SocketContext } from "src/socket-context";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing(2),
//   },
//   chatContainer: {
//     display: "flex",
//     flexDirection: "column",
//     height: "80vh",
//     maxHeight: "800px",
//     width: "100%",
//     maxWidth: "1000px",
//     borderRadius: "20px",
//     overflow: "hidden",
//     boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
//   },
//   header: {
//     background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
//     color: "white",
//     padding: theme.spacing(3),
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   backButton: {
//     color: "white",
//     marginRight: theme.spacing(2),
//   },
//   chatArea: {
//     flex: 1,
//     overflowY: "auto",
//     padding: theme.spacing(3),
//     background: "#f5f5f5",
//   },
//   messageList: {
//     display: "flex",
//     flexDirection: "column",
//     gap: theme.spacing(1),
//   },
//   messageItem: {
//     maxWidth: "70%",
//     borderRadius: "18px",
//     padding: theme.spacing(1.5, 2),
//     wordBreak: "break-word",
//   },
//   myMessage: {
//     alignSelf: "flex-end",
//     background: "linear-gradient(135deg, #00b09b, #96c93d)",
//     color: "white",
//   },
//   theirMessage: {
//     alignSelf: "flex-start",
//     background: "white",
//     color: "#333",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//   },
//   inputArea: {
//     padding: theme.spacing(3),
//     background: "white",
//     borderTop: "1px solid #e0e0e0",
//     display: "flex",
//     gap: theme.spacing(2),
//   },
//   messageInput: {
//     flex: 1,
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "30px",
//     },
//   },
//   sendButton: {
//     borderRadius: "50%",
//     padding: theme.spacing(1.5),
//     background: "linear-gradient(135deg, #4A00E0, #8E2DE2)",
//     color: "white",
//     "&:hover": {
//       background: "linear-gradient(135deg, #3A00C0, #7E2DC2)",
//     },
//   },
//   userInfo: {
//     display: "flex",
//     alignItems: "center",
//     gap: theme.spacing(2),
//   },
//   avatar: {
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//   },
//   timestamp: {
//     fontSize: "0.75rem",
//     opacity: 0.7,
//     marginTop: theme.spacing(0.5),
//   },
//   emptyState: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100%",
//     color: "#666",
//   },
// }));

// const ChatRoom = () => {
//   const classes = useStyles();
//   const { socket, name, setName, me } = useContext(SocketContext);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const chatAreaRef = useRef(null);

//   useEffect(() => {
//     if (!name) {
//       const userName = prompt("Enter your name for the chat:");
//       if (userName) {
//         setName(userName);
//       }
//     }

//     // Socket event listeners for chat
//     socket.on("userConnected", (user) => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           type: "system",
//           text: `${user.name} joined the chat`,
//           timestamp: new Date(),
//         },
//       ]);
//       setOnlineUsers((prev) => [...prev, user]);
//     });

//     socket.on("userDisconnected", (user) => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           type: "system",
//           text: `${user.name} left the chat`,
//           timestamp: new Date(),
//         },
//       ]);
//       setOnlineUsers((prev) => prev.filter((u) => u.id !== user.id));
//     });

//     socket.on("receiveMessage", (data) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     socket.on("onlineUsers", (users) => {
//       setOnlineUsers(users);
//     });

//     // Emit user connected event
//     socket.emit("joinChat", { id: me, name });

//     return () => {
//       socket.emit("leaveChat", { id: me, name });
//       socket.off("userConnected");
//       socket.off("userDisconnected");
//       socket.off("receiveMessage");
//       socket.off("onlineUsers");
//     };
//   }, [socket, name, me, setName]);

//   useEffect(() => {
//     // Scroll to bottom when new messages arrive
//     if (chatAreaRef.current) {
//       chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const sendMessage = () => {
//     if (message.trim() && name) {
//       const messageData = {
//         id: me,
//         name,
//         text: message,
//         timestamp: new Date(),
//         type: "message",
//       };

//       socket.emit("sendMessage", messageData);
//       setMessage("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const formatTime = (date) => {
//     return new Date(date).toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const goBack = () => {
//     window.location.href = "/";
//   };

//   return (
//     <Box className={classes.root}>
//       <Paper className={classes.chatContainer}>
//         {/* Header */}
//         <Box className={classes.header}>
//           <Box display="flex" alignItems="center">
//             <IconButton onClick={goBack} className={classes.backButton}>
//               <ArrowBackIcon />
//             </IconButton>
//             <Box>
//               <Typography variant="h5">Global Chat Room</Typography>
//               <Typography variant="body2">
//                 {onlineUsers.length} users online
//               </Typography>
//             </Box>
//           </Box>
          
//           <Box className={classes.userInfo}>
//             <Avatar className={classes.avatar}>
//               {name ? name.charAt(0).toUpperCase() : "U"}
//             </Avatar>
//             <Box>
//               <Typography variant="body1">{name || "User"}</Typography>
//               <Typography variant="caption">Online</Typography>
//             </Box>
//           </Box>
//         </Box>

//         {/* Chat Messages Area */}
//         <Box className={classes.chatArea} ref={chatAreaRef}>
//           {messages.length === 0 ? (
//             <Box className={classes.emptyState}>
//               <Typography variant="h6" color="textSecondary">
//                 No messages yet
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Be the first to say hello! 👋
//               </Typography>
//             </Box>
//           ) : (
//             <List className={classes.messageList}>
//               {messages.map((msg, index) => (
//                 <React.Fragment key={index}>
//                   {msg.type === "system" ? (
//                     <Box
//                       style={{
//                         textAlign: "center",
//                         margin: "10px 0",
//                         color: "#666",
//                         fontSize: "0.9rem",
//                       }}
//                     >
//                       {msg.text}
//                     </Box>
//                   ) : (
//                     <Box
//                       className={`${classes.messageItem} ${
//                         msg.id === me ? classes.myMessage : classes.theirMessage
//                       }`}
//                     >
//                       {msg.id !== me && (
//                         <Typography variant="caption" style={{ fontWeight: "bold" }}>
//                           {msg.name}
//                         </Typography>
//                       )}
//                       <Typography>{msg.text}</Typography>
//                       <Typography variant="caption" className={classes.timestamp}>
//                         {formatTime(msg.timestamp)}
//                       </Typography>
//                     </Box>
//                   )}
//                 </React.Fragment>
//               ))}
//             </List>
//           )}
//         </Box>

//         {/* Input Area */}
//         <Box className={classes.inputArea}>
//           <TextField
//             className={classes.messageInput}
//             variant="outlined"
//             placeholder="Type your message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={handleKeyPress}
//             multiline
//             maxRows={3}
//           />
//           <IconButton
//             className={classes.sendButton}
//             onClick={sendMessage}
//             disabled={!message.trim()}
//           >
//             <SendIcon />
//           </IconButton>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default ChatRoom;


// src/components/chat-room.js
import React, { useState, useContext, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import PeopleIcon from "@material-ui/icons/People";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DoneIcon from "@material-ui/icons/Done";
import DoneAllIcon from "@material-ui/icons/DoneAll";
// Install: npm install emoji-picker-react
// import Picker from "emoji-picker-react"; // Alternative
import { SocketContext } from "src/socket-context";

// Simple emoji data array
// const EMOJIS = [
//   "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
//   "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗",
//   "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥",
//   "😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😛", "😜",
//   "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️",
//   "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨",
//   "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵",
//   "🥴", "😠", "😡", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
//   "😇", "🥳", "🥺", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓",
//   "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔",
//   "❤️‍🔥", "❤️‍🩹", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟",
//   "👍", "👎", "👌", "🤞", "✌️", "🤟", "🤘", "👊", "✊", "🤛",
//   "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳",
// ];


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    maxHeight: "900px",
    width: "100%",
    maxWidth: "1200px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 25px 80px rgba(0,0,0,0.4)",
  },
  header: {
    background: "linear-gradient(to right, #44189c, #f698ff)",
    color: "white",
    padding: theme.spacing(2, 3),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  backButton: {
    color: "white",
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "rgba(255,255,255,0.1)",
    },
  },
  chatArea: {
    flex: 1,
    overflowY: "auto",
    padding: theme.spacing(3),
    background: "linear-gradient(180deg, #f8f9ff 0%, #f0f2ff 100%)",
    display: "flex",
    flexDirection: "column",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
  messageItem: {
    maxWidth: "70%",
    borderRadius: "20px",
    padding: theme.spacing(1.5, 2),
    wordBreak: "break-word",
    position: "relative",
    animation: "$fadeIn 0.3s ease",
  },
  myMessage: {
    alignSelf: "flex-end",
    background: "linear-gradient(135deg, #00b09b, #96c93d)",
    color: "white",
    borderBottomRightRadius: "5px",
  },
  theirMessage: {
    alignSelf: "flex-start",
    background: "white",
    color: "#333",
    boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
    borderBottomLeftRadius: "5px",
  },

// emojiPickerContainer: {
//   position: "absolute",
//   bottom: "100%",
//   left: 0,
//   marginBottom: theme.spacing(1),
//   zIndex: 1000,
//   background: "white",
//   borderRadius: "10px",
//   boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
//   padding: theme.spacing(2),
//   maxWidth: "300px",
//   maxHeight: "300px",
//   overflowY: "auto",
//   display: "grid",
//   gridTemplateColumns: "repeat(8, 1fr)",
//   gap: theme.spacing(1),
// },
// emojiButton: {
//   fontSize: "1.5rem",
//   padding: theme.spacing(0.5),
//   borderRadius: "5px",
//   cursor: "pointer",
//   textAlign: "center",
//   transition: "all 0.2s ease",
//   "&:hover": {
//     background: "#f0f0f0",
//     transform: "scale(1.2)",
//   },
// },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  messageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(0.5),
  },
  senderName: {
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  messageTime: {
    fontSize: "0.75rem",
    opacity: 0.8,
    marginLeft: theme.spacing(1),
  },
  messageContent: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  messageFooter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: theme.spacing(0.5),
  },
  statusIcon: {
    fontSize: "0.8rem",
    marginLeft: theme.spacing(0.5),
  },
  inputArea: {
    padding: theme.spacing(2, 3),
    background: "white",
    borderTop: "1px solid #e0e0e0",
    display: "flex",
    alignItems: "flex-end",
    gap: theme.spacing(2),
  },
  messageInput: {
    flex: 1,
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
      background: "#f8f9ff",
      transition: "all 0.3s ease",
      "&:hover": {
        background: "#f0f2ff",
      },
    },
  },
  sendButton: {
    borderRadius: "50%",
    padding: theme.spacing(1.5),
    background: "linear-gradient(135deg, #4A00E0, #8E2DE2)",
    color: "white",
    "&:hover": {
      background: "linear-gradient(135deg, #3A00C0, #7E2DC2)",
      transform: "scale(1.05)",
    },
    "&:disabled": {
      background: "#ccc",
    },
  },
  actionButton: {
    color: "#666",
    "&:hover": {
      color: "#8555e6",
      background: "rgba(74, 0, 224, 0.1)",
    },
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  avatar: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontWeight: "bold",
  },
  onlineUsersPanel: {
    position: "absolute",
    right: "100%",
    top: 0,
    bottom: 0,
    width: "250px",
    background: "white",
    borderRadius: "15px 0 0 15px",
    boxShadow: "-5px 0 20px rgba(0,0,0,0.1)",
    padding: theme.spacing(3),
    overflowY: "auto",
    transform: "translateX(-20px)",
    zIndex: 1,
  },
  onlineUsersTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: "#b39ae6",
  },
  userItem: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    padding: theme.spacing(1),
    borderRadius: "10px",
    "&:hover": {
      background: "#f8f9ff",
    },
  },
  userStatus: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#65d690",
  },
  typingIndicator: {
    fontSize: "0.8rem",
    color: "#666",
    fontStyle: "italic",
    padding: theme.spacing(1, 2),
    background: "rgba(255,255,255,0.8)",
    borderRadius: "15px",
    alignSelf: "flex-start",
  },
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#999",
    textAlign: "center",
  },
  // emojiPickerContainer: {
  //   position: "absolute",
  //   bottom: "100%",
  //   right: 0,
  //   marginBottom: theme.spacing(1),
  //   zIndex: 1000,
  // },
  imagePreview: {
    maxWidth: "200px",
    maxHeight: "200px",
    borderRadius: "10px",
    marginTop: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      opacity: 0.9,
    },
  },
  gifMessage: {
    maxWidth: "300px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  messageActions: {
    position: "absolute",
    top: 0,
    right: "-40px",
    display: "none",
    "&:hover": {
      display: "flex",
    },
  },
  messageItemContainer: {
    position: "relative",
    "&:hover $messageActions": {
      display: "flex",
    },
  },
  dateSeparator: {
    textAlign: "center",
    margin: theme.spacing(2, 0),
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      top: "50%",
      height: "1px",
      background: "#e0e0e0",
      zIndex: -1,
    },
  },
  dateText: {
    background: "#f8f9ff",
    padding: theme.spacing(0.5, 2),
    borderRadius: "15px",
    fontSize: "0.8rem",
    color: "#666",
    display: "inline-block",
  },
}));

const ChatRoom = () => {
  const classes = useStyles();
  const { socket, name, setName, me } = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showOnlineUsers, setShowOnlineUsers] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const chatAreaRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    if (!name) {
      const userName = prompt("Enter your name for the chat:");
      if (userName) {
        setName(userName.trim());
      }
    }

    // Socket event listeners
    socket.on("userConnected", (user) => {
      setMessages((prev) => [
        ...prev,
        {
          id: "system",
          type: "system",
          text: `🎉 ${user.name} joined the chat`,
          timestamp: new Date(),
        },
      ]);
      setOnlineUsers((prev) => {
        if (!prev.find(u => u.id === user.id)) {
          return [...prev, user];
        }
        return prev;
      });
    });

    socket.on("userDisconnected", (user) => {
      setMessages((prev) => [
        ...prev,
        {
          id: "system",
          type: "system",
          text: `👋 ${user.name} left the chat`,
          timestamp: new Date(),
        },
      ]);
      setOnlineUsers((prev) => prev.filter((u) => u.id !== user.id));
    });

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, { ...data, status: 'delivered' }]);
    });

    socket.on("messageDelivered", (messageId) => {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, status: 'delivered' } : msg
      ));
    });

    socket.on("messageRead", (messageId) => {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, status: 'read' } : msg
      ));
    });

    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users);
    });

    socket.on("userTyping", ({ userId, userName }) => {
      setTypingUsers(prev => {
        const newTyping = prev.filter(u => u.id !== userId);
        return [...newTyping, { id: userId, name: userName }];
      });
      
      // Clear typing indicator after 3 seconds
      setTimeout(() => {
        setTypingUsers(prev => prev.filter(u => u.id !== userId));
      }, 3000);
    });

    socket.on("userStoppedTyping", (userId) => {
      setTypingUsers(prev => prev.filter(u => u.id !== userId));
    });

    // Emit user connected event
    if (name && me) {
      socket.emit("joinChat", { id: me, name });
    }

    return () => {
      if (name && me) {
        socket.emit("leaveChat", { id: me, name });
      }
      socket.off("userConnected");
      socket.off("userDisconnected");
      socket.off("receiveMessage");
      socket.off("messageDelivered");
      socket.off("messageRead");
      socket.off("onlineUsers");
      socket.off("userTyping");
      socket.off("userStoppedTyping");
    };
  }, [socket, name, me, setName]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleTyping = (e) => {
    setMessage(e.target.value);
    
    if (!isTyping) {
      setIsTyping(true);
      socket.emit("typing", { userId: me, userName: name });
    }
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      socket.emit("stoppedTyping", me);
    }, 1000);
  };

  const sendMessage = () => {
    if (message.trim() && name) {
      const messageId = Date.now().toString();
      const messageData = {
        id: messageId,
        userId: me,
        name,
        text: message,
        timestamp: new Date(),
        type: "message",
        status: 'sent'
      };

      socket.emit("sendMessage", messageData);
      setMessages(prev => [...prev, messageData]);
      setMessage("");
      // setShowEmojiPicker(false);
      
      // Emit stopped typing
      socket.emit("stoppedTyping", me);
      setIsTyping(false);
    }
  };

  // const handleEmojiClick = (emojiObject) => {
  //   setMessage(prev => prev + emojiObject.emoji);
  // };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const messageId = Date.now().toString();
        const messageData = {
          id: messageId,
          userId: me,
          name,
          type: "image",
          imageUrl: reader.result,
          timestamp: new Date(),
          status: 'sent'
        };
        
        socket.emit("sendMessage", messageData);
        setMessages(prev => [...prev, messageData]);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendGif = (gifUrl) => {
    const messageId = Date.now().toString();
    const messageData = {
      id: messageId,
      userId: me,
      name,
      type: "gif",
      gifUrl: gifUrl,
      timestamp: new Date(),
      status: 'sent'
    };
    
    socket.emit("sendMessage", messageData);
    setMessages(prev => [...prev, messageData]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString([], {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMessageStatusIcon = (status, isMyMessage) => {
    if (!isMyMessage) return null;
    
    switch(status) {
      case 'sent':
        return <DoneIcon className={classes.statusIcon} />;
      case 'delivered':
        return <DoneAllIcon className={classes.statusIcon} />;
      case 'read':
        return <DoneAllIcon className={classes.statusIcon} style={{ color: '#4A00E0' }} />;
      default:
        return null;
    }
  };

  const groupMessagesByDate = () => {
    const groups = {};
    messages.forEach((msg, index) => {
      const date = new Date(msg.timestamp).toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push({ ...msg, index });
    });
    return groups;
  };

  const renderMessage = (msg, isMyMessage) => {
    switch(msg.type) {
      case 'system':
        return (
          <Box key={msg.id} style={{ textAlign: 'center', margin: '10px 0' }}>
            <Typography variant="caption" style={{ color: '#666', fontSize: '0.85rem' }}>
              {msg.text}
            </Typography>
          </Box>
        );
      
      case 'image':
        return (
          <Box 
            key={msg.id} 
            className={`${classes.messageItem} ${isMyMessage ? classes.myMessage : classes.theirMessage}`}
          >
            {!isMyMessage && (
              <Typography variant="caption" style={{ fontWeight: "bold", display: 'block', marginBottom: 4 }}>
                {msg.name}
              </Typography>
            )}
            <img 
              src={msg.imageUrl} 
              alt="Shared" 
              className={classes.imagePreview}
              onClick={() => window.open(msg.imageUrl, '_blank')}
            />
            <Typography variant="caption" className={classes.timestamp}>
              {formatTime(msg.timestamp)}
            </Typography>
            {isMyMessage && getMessageStatusIcon(msg.status, isMyMessage)}
          </Box>
        );
      
      case 'gif':
        return (
          <Box 
            key={msg.id} 
            className={`${classes.messageItem} ${isMyMessage ? classes.myMessage : classes.theirMessage}`}
          >
            {!isMyMessage && (
              <Typography variant="caption" style={{ fontWeight: "bold", display: 'block', marginBottom: 4 }}>
                {msg.name}
              </Typography>
            )}
            <Box className={classes.gifMessage}>
              <img 
                src={msg.gifUrl} 
                alt="GIF" 
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Box>
            <Typography variant="caption" className={classes.timestamp}>
              {formatTime(msg.timestamp)}
            </Typography>
            {isMyMessage && getMessageStatusIcon(msg.status, isMyMessage)}
          </Box>
        );
      
      default:
        return (
          <Box 
            key={msg.id} 
            className={`${classes.messageItem} ${isMyMessage ? classes.myMessage : classes.theirMessage}`}
          >
            {!isMyMessage && (
              <Typography variant="caption" style={{ fontWeight: "bold", display: 'block', marginBottom: 4 }}>
                {msg.name}
              </Typography>
            )}
            <Typography className={classes.messageContent}>
              {msg.text}
            </Typography>
            <Box className={classes.messageFooter}>
              <Typography variant="caption" className={classes.timestamp}>
                {formatTime(msg.timestamp)}
              </Typography>
              {isMyMessage && getMessageStatusIcon(msg.status, isMyMessage)}
            </Box>
          </Box>
        );
    }
  };

  const goBack = () => {
    window.location.href = "/";
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const clearChat = () => {
    setMessages([]);
    handleMenuClose();
  };

  const messageGroups = groupMessagesByDate();

  return (
    <Box className={classes.root}>
      <Paper className={classes.chatContainer}>
        {/* Header */}
        <Box className={classes.header}>
          <Box display="flex" alignItems="center">
            <Tooltip title="Go Back">
              <IconButton onClick={goBack} className={classes.backButton}>
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            <Box>
              <Typography variant="h5">Global Chat Room</Typography>
              <Typography variant="body2">
                {onlineUsers.length} users online • {messages.filter(m => m.type === 'message').length} messages
              </Typography>
            </Box>
          </Box>
          
          <Box display="flex" alignItems="center" gap={2}>
            <Tooltip title="Online Users">
              <IconButton 
                onClick={() => setShowOnlineUsers(!showOnlineUsers)}
                className={classes.actionButton}
              >
                <Badge badgeContent={onlineUsers.length} color="secondary">
                  <PeopleIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            
            <Tooltip title="More Options">
              <IconButton 
                onClick={handleMenuClick}
                className={classes.actionButton}
              >
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={clearChat}>Clear Chat</MenuItem>
              {/* <MenuItem onClick={handleMenuClose}>Export Chat</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem> */}
            </Menu>

            <Box className={classes.userInfo}>
              <Avatar className={classes.avatar}>
                {name ? name.charAt(0).toUpperCase() : "U"}
              </Avatar>
              <Box>
                <Typography variant="body1">{name || "User"}</Typography>
                <Typography variant="caption" style={{ color: '#4CAF50' }}>
                  ● Online
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Online Users Panel */}
          {showOnlineUsers && (
            <Box className={classes.onlineUsersPanel}>
              <Typography variant="h6" className={classes.onlineUsersTitle}>
                Online Users ({onlineUsers.length})
              </Typography>
              <Divider style={{ marginBottom: 16 }} />
              {onlineUsers.map(user => (
                <Box key={user.id} className={classes.userItem}>
                  <Box className={classes.userStatus} />
                  <Avatar style={{ width: 32, height: 32, fontSize: '0.8rem' }}>
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography variant="body2">{user.name}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Chat Messages Area */}
        <Box className={classes.chatArea} ref={chatAreaRef}>
          {messages.length === 0 ? (
            <Box className={classes.emptyState}>
              <Typography variant="h5" style={{ marginBottom: 16, color: '#4A00E0' }}>
                Welcome to the Chat Room! 🎉
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 8 }}>
                No messages yet
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Be the first to say hello! 👋
              </Typography>
              <Typography variant="caption" color="textSecondary" style={{ marginTop: 16 }}>
                {onlineUsers.length > 1 ? `${onlineUsers.length - 1} others are online` : 'You are alone here'}
              </Typography>
            </Box>
          ) : (
            <Box className={classes.messageContainer}>
              {Object.entries(messageGroups).map(([date, dateMessages]) => (
                <React.Fragment key={date}>
                  <Box className={classes.dateSeparator}>
                    <Typography className={classes.dateText}>
                      {formatDate(new Date(date))}
                    </Typography>
                  </Box>
                  {dateMessages.map((msg) => (
                    <Box key={msg.id || msg.index} className={classes.messageItemContainer}>
                      {renderMessage(msg, msg.userId === me)}
                    </Box>
                  ))}
                </React.Fragment>
              ))}
            </Box>
          )}

          {/* Typing Indicator */}
          {typingUsers.length > 0 && (
            <Box className={classes.typingIndicator}>
              {typingUsers.map(user => user.name).join(', ')} 
              {typingUsers.length === 1 ? ' is ' : ' are '}
              typing...
            </Box>
          )}
        </Box>

        {/* Emoji Picker */}
        {/* {showEmojiPicker && (
          <Box className={classes.emojiPickerContainer}>
            <Picker onEmojiClick={handleEmojiClick} />
          </Box>
        )} */}

        {/* Input Area */}
        <Box className={classes.inputArea}>
          {/* <Tooltip title="Add Emoji">
            <IconButton 
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className={classes.actionButton}
            >
              <InsertEmoticonIcon />
            </IconButton>
          </Tooltip> */}

          <Tooltip title="Attach File">
            <IconButton 
              component="label"
              className={classes.actionButton}
            >
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
              <AttachFileIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Send GIF">
            <IconButton 
              onClick={() => {
                // You can integrate with a GIF API here
                const gifUrl = prompt("Enter GIF URL:");
                if (gifUrl) sendGif(gifUrl);
              }}
              className={classes.actionButton}
            >
              <GifIcon />
            </IconButton>
          </Tooltip>

          <TextField
            className={classes.messageInput}
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={handleTyping}
            onKeyPress={handleKeyPress}
            multiline
            maxRows={4}
            fullWidth
          />

          <IconButton
            className={classes.sendButton}
            onClick={sendMessage}
            disabled={!message.trim()}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatRoom;