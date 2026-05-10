# SmartAttend

SmartAttend is a modern QR-code based attendance management system designed for universities, workshops, and events. The system simplifies attendance tracking by replacing manual attendance methods with a secure and fast QR scanning solution.

---

# Project Overview

Traditional attendance systems are time-consuming and prone to errors. SmartAttend solves this problem by providing a digital attendance platform with role-based access, event management, and real-time attendance tracking.

---

# Features

## Authentication System
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## Role-Based Access
- Admin
- Organizer
- Attendee

## Event Management
- Create Events
- View Events
- Delete Events
- Generate QR Codes Automatically

## QR Attendance System
- QR Code Scanning
- Instant Attendance Recording
- Secure Attendance Verification

## Dashboard & Analytics
- Total Users
- Total Events
- Total Attendance
- Analytics Charts

## Attendance History
- View personal attendance records
- Event attendance tracking

## Responsive Design
- Mobile Friendly
- Tablet Friendly
- Desktop Friendly

---

# Technologies Used

## Frontend
- React
- Vite
- TailwindCSS
- React Router DOM
- Axios
- Recharts
- QRCode React
- Lucide React

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

---

# Project Structure

```bash
SW_Project/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── routes/
│   │   └── assets/
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md


     Installation & Setup
1. Clone the Repository
git clone https://github.com/Mostafa20051/SW_Project.git
2. Install Frontend Dependencies
cd frontend
npm install
3. Install Backend Dependencies
cd backend
npm install

           Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

         Running the Project
   Run Backend
cd backend
npm run dev

Backend runs on:

http://localhost:5000


    Run Frontend
cd frontend
npm run dev

Frontend runs on:

http://localhost:5173


    How to Use the System
1. Register a new account
2. Login to the system
3. Organizers/Admins can create events
4. QR codes are generated automatically
5. Attendees scan QR codes to mark attendance
6. Dashboard displays attendance analytics
7. Users can view attendance history

    Testing

The following functionalities were tested:

Authentication System
Protected Routes
Event Creation
QR Attendance Scanning
Attendance History
Responsive Design
Dashboard Analytics


    Challenges Faced
MongoDB connection configuration
GitHub team collaboration
QR scanner integration
Role-based authorization
State management and protected routing


     Future Improvements
Email Notifications
Attendance Report Export
Mobile Application
Advanced Analytics
Multi-language Support

     Team Members
Mostafa Shawahneh — Frontend Developer
Samah Abu Hantash — Backend Developer
Khadija Saed — Documentation & Presentation

    Conclusion

SmartAttend provides a secure, fast, and user-friendly attendance management solution using QR technology. The system improves attendance accuracy, reduces manual work, and enhances event management efficiency.