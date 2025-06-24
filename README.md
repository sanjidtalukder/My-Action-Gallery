<div align="center">
  <h1>🎉 Event Explorer – A Local Event Discovery Platform</h1>
  <p>An interactive platform for discovering, exploring, and managing local events.</p>
<!--   <img src="https://i.ibb.co/Qr5wPRk/event-explorer-banner.png" alt="Event Explorer Screenshot" width="80%" /> -->
</div>

---

## 📌 Project Overview

**Event Explorer** is a single-page web application that allows users to discover and explore local events like workshops, tech conferences, exhibitions, sports meets, and more. Authenticated users can reserve seats, view booking details, manage their profile, and get dynamic insights through interactive charts.

---

## 🌐 Live URL

🔗 [Live Demo (Hosted on Netlify)](https://gilded-cocada-e311bd.netlify.app)

---

## 🎯 Project Purpose

- Help users discover exciting events happening around them.
- Provide event details including category, host, time, and availability.
- Enable users to book and cancel seats securely.
- Show personalized bookings and statistics via chart.
- Ensure secure login/logout using Firebase Authentication.

---

## 🧪 Main Features

-  **User Authentication** with Firebase (Google & Email)
-  **Login / Logout / Persistent Auth** (via `onAuthStateChanged`)
-  **Navbar** with dynamic Login/Profile image and hoverable username
-  **My Profile Page** to display user info
-  **Event Details Page** with:
  - Title, description, host, date/time
  - Reserve Seat form
-  **Booking Confirmation** with toast notifications
-  **Cancel Booking** with removal from chart and localStorage
-  **Dynamic Chart** (Recharts) showing booked event prices
-  **Blog Page** with React-related questions/answers
-  **Custom 404 Page**
-  **Responsive UI** for desktop, tablet, and mobile
-  **Protected Routes** (redirect to login if unauthenticated)

---

## ⚙️ Technologies Used

- React.js
- React Router DOM
- Firebase Auth
- Recharts
- Tailwind CSS + DaisyUI
- React Hot Toast
- React CountUp
- Vite

---

## 📦 NPM Packages

```bash
npm install react-router-dom firebase tailwindcss daisyui react-hot-toast recharts react-countup
```
---

## 🙋‍♂️ Author
Sanjid Talukder

Junior Web Developer | CSE, Dhaka International University

📧 Email: sanjidtalukder02@gmail.com

🔗 GitHub: github.com/sanjidtalukder


## 📝 License & Credits
Design inspired by urban-themed event apps

Auth handled using Firebase

UI styled with TailwindCSS + DaisyUI

Guide followed from Programming Hero instructions
