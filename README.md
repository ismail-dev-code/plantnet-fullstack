# 🌿 PlantNet – Plant Identification Web App

**PlantNet** is a modern, full-stack web application that allows users to identify plants, store data, and interact with plant-related content securely. Built with **React (Vite)** and **Express**, it integrates **Firebase** for authentication and **MongoDB** for database storage.

> _"Discover and explore plants around you — digitally."_

---

## 🔗 Live Demo

- 🌐 **Frontend**: [https://plantnet-bd.web.app](https://plantnet-bd.web.app)  
- 📡 **API Base URL**: `https://plantnet-api.onrender.com/api` (example)

---

## 🧰 Tech Stack

### 🔹 Frontend – React + Vite

- React 19
- Tailwind CSS 4
- DaisyUI
- React Router v7
- Firebase (Authentication)
- Axios
- React Icons
- React Hot Toast
- React Spinners
- Headless UI

### 🔸 Backend – Node.js + Express

- Express v5
- MongoDB v6
- Dotenv
- CORS
- Cookie-Parser
- JSON Web Token (JWT)

---

## 📦 Notable Dependencies

### ➤ Frontend

| Package           | Purpose                  |
|-------------------|--------------------------|
| `react`           | UI rendering             |
| `react-router`    | Client-side routing      |
| `firebase`        | Authentication           |
| `axios`           | HTTP requests            |
| `tailwindcss`     | Utility-first CSS        |
| `daisyui`         | Prebuilt UI components   |
| `react-hot-toast` | Toast notifications      |
| `react-icons`     | Icon library             |
| `headlessui`      | Accessible UI primitives |

### ➤ Backend

| Package         | Purpose                   |
|------------------|---------------------------|
| `express`       | Server framework          |
| `mongodb`       | NoSQL database            |
| `dotenv`        | Environment config        |
| `cors`          | Cross-origin resource sharing |
| `jsonwebtoken`  | Authentication (JWT)      |
| `cookie-parser` | Parse and manage cookies  |

---

## 📌 Key Features

- ✅ Secure user authentication via Firebase
- 🌿 Optional real-time plant detection using external APIs
- 🗂️ Store and manage plant data with MongoDB
- 🔐 Protected API routes secured with JWT tokens
- 🔔 Toast notifications and spinners for UX feedback
- 📱 Fully responsive design optimized for all devices

---

## 🔒 Authentication Flow

1. User signs in via Firebase (frontend)
2. Firebase ID token is sent to backend
3. Backend verifies token and returns JWT
4. JWT is stored in an HTTP-only cookie for secure access

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ismail-dev-code/plantnet-fullstack.git
cd plantnet-fullstack
