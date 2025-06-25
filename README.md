# 🌿 PlantNet – Plant Identification Web App

**PlantNet** is a modern, full-stack web application that allows users to identify plants, store data, and interact with plant-based content securely. Built with React and Express, this app integrates Firebase for authentication and MongoDB for persistent data storage.

> "Discover and explore plants around you — digitally."

---

## 🔗 Live Site

🌐 **Frontend**: [https://plantnet-bd.web.app](https://plantnet-bd.web.app)  
📡 **API Base URL**: `https://plantnet-api.onrender.com/api` (example)

---

## 🧰 Tech Stack

### 🔹 Frontend (React + Vite)
- React 19
- Tailwind CSS 4 + DaisyUI
- Firebase (Authentication)
- React Router v7
- Axios
- React Icons
- React Hot Toast
- React Spinners
- Headless UI

### 🔸 Backend (Node.js + Express)
- Express v5
- MongoDB v6
- Dotenv
- CORS
- Cookie-Parser
- JSON Web Token (JWT)

---


---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ismail-dev-code/plantnet-fullstack.git


cd client
npm install
npm run dev

cd server
npm install 
nodemon index

## 🚀 Backend .env

PORT=5000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret


## 📌 Key Features

✅ Secure login & registration with Firebase

🌿 Real-time plant detection via external APIs (optional)

🗂️ Store and retrieve plant data from MongoDB

🔐 Auth-protected routes with JWT

🔔 Toast and loading feedback for better UX

📱 Fully responsive UI



## 🔒 Authentication Flow
Users sign in via Firebase

JWT is generated from backend using Firebase ID Token

JWT is stored in HTTP-only cookies for API security

## 📦 Dependencies (Highlights)
| Package           | Purpose             |
| ----------------- | ------------------- |
| `react`           | UI rendering        |
| `tailwindcss`     | Styling utility     |
| `firebase`        | Authentication      |
| `axios`           | API requests        |
| `react-router`    | Page routing        |
| `daisyui`         | UI components       |
| `react-hot-toast` | Toast notifications |

## Backend

| Package         | Purpose                   |
| --------------- | ------------------------- |
| `express`       | Backend routing           |
| `mongodb`       | Database connection       |
| `dotenv`        | Environment variables     |
| `cors`          | Cross-origin access       |
| `jsonwebtoken`  | Secure token-based auth   |
| `cookie-parser` | Read & write HTTP cookies |



