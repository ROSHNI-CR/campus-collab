# 🎓 CampusCollab – Real-Time Student Collaboration Platform

CampusCollab is a full-stack web application designed to help students collaborate efficiently through study rooms and real-time communication.

The platform enables users to create accounts, join discussions, communicate instantly using live chat, and interact in a structured collaborative environment.

---

## 🚀 Features

### 🔐 Authentication & Security
- User Registration and Login
- JWT-based Authentication
- Password Encryption using bcrypt
- Protected Routes

### 💬 Real-Time Collaboration
- Instant Group Messaging
- Study Room Based Communication
- Live Updates using Socket.io
- Persistent Chat Experience

### 📚 Student Productivity
- Collaborative Study Environment
- Organized Interaction Flow
- Responsive Interface

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT
- bcrypt

### Real-Time Communication
- Socket.io

---

## 🏗 System Architecture

```plaintext
Frontend (HTML/CSS/JS)
          │
          ▼
Node.js + Express Server
          │
 ┌────────┴────────┐
 ▼                 ▼
MongoDB        Socket.io
(Database)    (Real-Time Chat)
```

---

## 📸 Screenshots

### Login Page
(Add Screenshot)

### Dashboard
(Add Screenshot)

### Study Room
(Add Screenshot)

### Real-Time Chat
(Add Screenshot)

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/ROSHNI-CR/campus-collab.git
```

### Move into project directory

```bash
cd campus-collab
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

### Run application

```bash
npm start
```

or

```bash
npm run dev
```

Open:

```plaintext
http://localhost:5000
```

---

## 📂 Project Structure

```plaintext
CampusCollab
│
├── client/
│   ├── pages
│   ├── assets
│   └── styles
│
├── server/
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── controllers
│   └── socket
│
├── .env
├── package.json
└── README.md
```

---

## 🔄 Application Workflow

1. User creates account or logs in  
2. Authentication validates access  
3. User joins study room  
4. Messages sent through Socket.io  
5. Chat updates in real time  
6. Data stored and retrieved from MongoDB  

---

## 🎯 Learning Outcomes

Through this project I gained practical experience in:

- Full-Stack Web Development
- REST API Integration
- Real-Time Communication
- Authentication & Authorization
- Database Design
- Client–Server Architecture

---

## 🔮 Future Improvements

- Video Calling
- Notifications
- File Sharing
- Dark Mode
- AI-Based Study Suggestions
- Group Management

---

## 👩‍💻 Author

**Roshni Khanam**

GitHub:  
https://github.com/ROSHNI-CR

LinkedIn:  
(Add LinkedIn Link)

---

## ⭐ Support

If you found this project useful, consider giving it a star.
