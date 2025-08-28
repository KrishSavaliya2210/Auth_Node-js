# Banas Tech Auth & Dashboard Project

This project is a full-stack authentication and dashboard system built with React (frontend) and Node.js/Express (backend).

## Features
- User Signup & Login
- JWT-based authentication
- Protected dashboard route
- Logout functionality
- Token validation and expiration
- Responsive UI with Bootstrap

## Technologies Used
- Frontend: React, React Router, Axios, Bootstrap, React Toastify
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Joi

## Folder Structure
```
Banas_Task/
├── backend/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── Models/
│   ├── Routes/
│   ├── index.js
│   ├── package.json
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── auth/
    │   ├── components/
    │   ├── pages/
    │   ├── api.js
    │   ├── App.js
    │   └── ...
    ├── public/
    ├── package.json
    └── requirements.txt
```

## How to Run

### Backend
1. Go to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your `.env` file with MongoDB and JWT secret.
4. Start the server:
   ```sh
   nodemon index.js
   ```

### Frontend
1. Go to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## Usage
- Visit `http://localhost:3000` for the frontend.
- Sign up or log in to access the dashboard.
- Logout to clear your session.
- Protected routes require a valid JWT token.

## API Endpoints
- `POST /api/signup` — User registration
- `POST /api/login` — User login
- `GET /protect/` — Token verification (protected route)

## Notes
- JWT tokens are stored in localStorage and checked on every protected route.
- Visiting `/login` will always log you out.
- Dashboard is only accessible when logged in.

## License
MIT
