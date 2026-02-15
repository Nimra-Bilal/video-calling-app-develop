// const app = require('express')()
// const server = require('http').createServer(app)
// const cors = require('cors')

// const io = require("socket.io")(server, {
// 	cors: {
// 		origin: "*",
// 		methods: [ "GET", "POST" ]
// 	}
// });

// app.use(cors());

// const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
// 	res.send('Server is running');
// });

// io.on("connection", (socket) => {
// 	socket.emit("me", socket.id);

// 	socket.on("disconnect", () => {
// 		socket.broadcast.emit("callEnded")
// 	});

// 	socket.on("calluser", ({ userToCall, signalData, from, name }) => {
// 		io.to(userToCall).emit("calluser", { signal: signalData, from, name });
// 	});

// 	socket.on("answercall", (data) => {
// 		io.to(data.to).emit("callaccepted", data.signal)
// 	});
// });

// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




// // server.js (updated)
// const app = require('express')()
// const server = require('http').createServer(app)
// const cors = require('cors')

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });

// app.use(cors());

// const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// let onlineUsers = [];

// io.on("connection", (socket) => {
//   console.log(`New connection: ${socket.id}`);
  
//   // Send socket ID to client
//   socket.emit("me", socket.id);

//   // Handle chat room joins
//   socket.on("joinChat", (userData) => {
//     const user = { id: socket.id, name: userData.name };
//     onlineUsers.push(user);
    
//     // Notify everyone about new user
//     socket.broadcast.emit("userConnected", user);
    
//     // Send current online users to the new user
//     socket.emit("onlineUsers", onlineUsers);
//   });

//   // Handle chat messages
//   socket.on("sendMessage", (messageData) => {
//     socket.broadcast.emit("receiveMessage", messageData);
//   });

//   // Handle video calls
//   socket.on("calluser", ({ userToCall, signalData, from, name }) => {
//     io.to(userToCall).emit("calluser", { signal: signalData, from, name });
//   });

//   socket.on("answercall", (data) => {
//     io.to(data.to).emit("callaccepted", data.signal);
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log(`User disconnected: ${socket.id}`);
    
//     // Remove user from online users
//     const userIndex = onlineUsers.findIndex(user => user.id === socket.id);
//     if (userIndex !== -1) {
//       const disconnectedUser = onlineUsers[userIndex];
//       onlineUsers.splice(userIndex, 1);
      
//       // Notify everyone about disconnection
//       socket.broadcast.emit("userDisconnected", disconnectedUser);
//     }
    
//     socket.broadcast.emit("callEnded");
//   });

//   socket.on("leaveChat", (userData) => {
//     const userIndex = onlineUsers.findIndex(user => user.id === socket.id);
//     if (userIndex !== -1) {
//       const leavingUser = onlineUsers[userIndex];
//       onlineUsers.splice(userIndex, 1);
//       socket.broadcast.emit("userDisconnected", leavingUser);
//     }
//   });
// });

// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));







// server.js (updated)
const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);
  
  // Send socket ID to client
  socket.emit("me", socket.id);

  // Handle chat room joins
  socket.on("joinChat", (userData) => {
    const user = { id: socket.id, name: userData.name };
    onlineUsers.push(user);
    
    // Notify everyone about new user
    socket.broadcast.emit("userConnected", user);
    
    // Send current online users to the new user
    socket.emit("onlineUsers", onlineUsers);
    
    // Also notify existing users about the new user
    socket.broadcast.emit("onlineUsers", onlineUsers);
  });

  // Handle chat messages
  socket.on("sendMessage", (messageData) => {
    // Add message ID if not present
    if (!messageData.id) {
      messageData.id = Date.now().toString();
    }
    
    // Broadcast message to all users except sender
    socket.broadcast.emit("receiveMessage", messageData);
    
    // Send delivery confirmation to sender
    setTimeout(() => {
      socket.emit("messageDelivered", messageData.id);
    }, 100);
    
    // Simulate message read after 2 seconds
    setTimeout(() => {
      socket.emit("messageRead", messageData.id);
      socket.broadcast.emit("messageRead", messageData.id);
    }, 2000);
  });

  // Handle typing indicators
  socket.on("typing", ({ userId, userName }) => {
    socket.broadcast.emit("userTyping", { userId, userName });
  });

  socket.on("stoppedTyping", (userId) => {
    socket.broadcast.emit("userStoppedTyping", userId);
  });

  // Handle video calls
  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    
    // Remove user from online users
    const userIndex = onlineUsers.findIndex(user => user.id === socket.id);
    if (userIndex !== -1) {
      const disconnectedUser = onlineUsers[userIndex];
      onlineUsers.splice(userIndex, 1);
      
      // Notify everyone about disconnection
      io.emit("userDisconnected", disconnectedUser);
      io.emit("onlineUsers", onlineUsers);
    }
    
    socket.broadcast.emit("callEnded");
  });

  socket.on("leaveChat", (userData) => {
    const userIndex = onlineUsers.findIndex(user => user.id === socket.id);
    if (userIndex !== -1) {
      const leavingUser = onlineUsers[userIndex];
      onlineUsers.splice(userIndex, 1);
      socket.broadcast.emit("userDisconnected", leavingUser);
      socket.broadcast.emit("onlineUsers", onlineUsers);
    }
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));