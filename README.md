# 🎉 Event Management Web Application (MERN Stack)

A fully functional Event Management Web Application built with **MongoDB**, **Express.js**, **React.js**, **Node.js**, **Typescript**, **Mongoose**. This project includes a custom authentication system, dynamic event operations, powerful search & filter functionality, and an intuitive UI.

---

## 🚀 Project Overview

Building Event Management App.

---

## 🌟 Features

### 🔐 Authentication (Custom-built)
- Registration: Name, Email, Password, Photo URL
- Login: Email and Password
- Error handling on both login & registration
- No third-party auth libraries used
- Profile picture visible on navbar after login
- Logout functionality included

---

### 🧭 Navbar
- Includes: Logo + Website Name
- Navigation Links: `Home`, `Events`, `Add Event`, `My Event`,
- On Login: Displays user's **profile picture**
- Profile Dropdown:
  - User Name (non-clickable)
  - Logout button

---

### 🏠 Homepage
- Banner
- Featured Event
- Testimonial

---

## 📆 Core Pages

### 📋 Events (Private Route)
- Displays all events (recent-first by date & time)
- **Card Format** includes:
  - Event Title
  - Creator Name
  - Date and Time
  - Location
  - Description
  - Attendee Count
  - **Join Event** button

#### 🧠 Logic
- "Join Event" increments attendee count by 1
- A user can join **only once**

#### 🔎 Search & Filter
- **Search by title**
- **Filter options**:
  - Today’s Date
  - Current Week
  - Last Week
  - Current Month
  - Last Month

---

### ➕ Add Event (Private Route)
- Event form includes:
  - Title
  - Name (creator)
  - Date & Time
  - Location
  - Description
  - Attendee Count (default = 0)
- On submission, data is stored in MongoDB

---

### 📂 My Events (Private Route)
- Shows only events posted by the logged-in user
- Event cards show all event info, along with:
  - **Update Button**
  - **Delete Button**
    - Confirm before delete
    - Permanently removes event

---

## 🧑‍💻 Tech Stack

| Frontend | Backend  | Database | Auth          |
|----------|----------|----------|----------------|
| React.js | Node.js  | MongoDB  | Custom-built   |
| Tailwind CSS | Express.js | Mongoose | JWT (custom logic) |
|               | TypeScript |
---
