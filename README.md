# <img src="./frontend/public/app.png" width="36" alt="Whisp Logo"> Whisp : Full Stack Chat Application

A **real-time chat application** built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and **Socket.io**. It supports secure user authentication, instant messaging, and persistent chat history.

---

## 🚀 Some Screenshots

### Chat Login Page

![Chat Login Page](./frontend/public/Screenshot%202025-06-15%20at%209.20.24 PM.png)

### Chat Messaging UI

![](./frontend/public/Screenshot%202025-06-15%20at%209.38.22 PM.png)

---

## ✨ Features

- 🔐 JWT Authentication (Login / Signup)
- 💬 Real-time Messaging (Socket.IO)
- 🔎 User Search
- 💾 Chat History with MongoDB
- 🖼️ Image Sharing
- 📱 Responsive UI (Mobile + Desktop)
- 🌙 Different Chat Themes (DaisyUI)

---

## 🛠️ Tech Stack

### 🔹 Frontend

- React.js
- Socket.IO Client
- Tailwind CSS / Bootstrap

### 🔸 Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + BcryptJS
- Socket.io

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/C-handan/whisp_app.git
cd whisp_app
```

Go to backend and install dependencies

```bash
cd backend
npm i
```

Create a .env file

```bash
MONGODB_URI= your_mongodb_connection_string
PORT= 5001
JWT_SECRET= your_jwt_secret
CLOUDINARY_CLOUD_NAME= your_cloudinary_cloud_name
CLOUDINARY_API_KEY= your_cloudinary_api_key
CLOUDINARY_API_SECRET= your_cloudinary_api_secret
NODE_ENV= development
```

Run the backend server

```bash
npm run dev
```

Go to frontend folder and install dependencies

```bash
cd ../frontend
npm i
npm run dev
```
