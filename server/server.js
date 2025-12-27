require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const app = express();

// CONNECT DATABASE
connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// 🔥 SERVE FRONTEND FILES
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
const testRoutes = require("./routes/testRoutes");
const basicApi = require("./routes/basicApi");
const authRoutes = require("./routes/authRoutes");

app.use(testRoutes);
app.use(basicApi);
app.use(authRoutes);

// TEST API
app.get("/api/message", (req, res) => {
  res.json({ message: "Backend is working 🎉" });
});

// ✅ LANDING PAGE ROUTE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* ==========================
   🔴 SOCKET.IO SETUP (STEP 2)
========================== */

// Create HTTP server from Express
const server = http.createServer(app);

// Attach Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// Socket events
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("sendMessage", (messageData) => {
    // Broadcast message to all connected clients
    io.emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

// START SERVER (IMPORTANT: server.listen, not app.listen)
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
