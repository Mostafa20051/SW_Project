# SmartAttend - Smart Attendance Management System

SmartAttend is a smart attendance management system for events.  
It allows users to register, login, view events, mark attendance, and use QR-based attendance.

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- Swagger API Documentation

### Frontend
- React
- Vite
- Tailwind CSS

## Backend Features

- User registration
- User login
- JWT authentication
- Role-based authorization
- Admin, organizer, and attendee roles
- Event management
- Attendance tracking
- QR code generation
- Dashboard statistics
- Swagger API documentation

## User Roles

### Admin
- Can manage events
- Can generate QR codes
- Can view attendance reports
- Can access dashboard statistics

### Organizer
- Can manage events
- Can generate QR codes
- Can view attendance reports
- Can access dashboard statistics

### Attendee
- Can view events
- Can mark attendance
- Can scan QR code
- Can view personal attendance records

## Backend API Routes

### Auth Routes
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/profile`

### Event Routes
- POST `/api/events`
- GET `/api/events`
- GET `/api/events/:id`
- PUT `/api/events/:id`
- DELETE `/api/events/:id`
- POST `/api/events/:id/qr`

### Attendance Routes
- POST `/api/attendance/mark`
- POST `/api/attendance/scan`
- GET `/api/attendance/my`
- GET `/api/attendance/event/:eventId`

### Dashboard Routes
- GET `/api/dashboard/stats`

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret