#  Authenticated Notes Dashboard

A secure and responsive full-stack Notes Dashboard built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to sign up, log in, and manage personal notes with a visually appealing dashboard using Tailwind CSS and Framer Motion.

##  Features

### Authentication
- Secure user registration and login
- Password hashing with bcrypt
- JWT-based token authentication
- Persistent sessions via localStorage

### Notes Management
- Create, view, edit, and delete personal notes
- Notes are user-specific and securely stored in MongoDB

###  Authorization
- Protected routes and dashboard — accessible only after login

###  UI Design (Tailwind + Framer Motion)
- Animated login/signup forms with validation and error handling
- Notes displayed as interactive cards
- Dark/light mode toggle


## Project Structure backend
backend/
├── controllers/            # Business logic for routes
│   ├── authController.js
│   └── noteController.js
│
├── models/                 # Mongoose schemas
│   ├── User.js
│   └── Note.js
│
├── middleware/             # Custom middleware (auth, error handling)
│   └── authMiddleware.js
│
├── routes/                 # Route handlers
│   ├── authRoutes.js
│   └── noteRoutes.js
│
├── config/                 # Config and DB connection
│   └── db.js
│
├── .env                    # Environment variables
├── server.js               # Entry point
├── package.json
└── README.md
#### Project Structure frontend

frontend/
├── public/
│   └── index.html
│
├── src/
│   ├── components/         # Reusable UI components
│   │   |-NoteFormModal.jsx
│   │   |-ProtectedRoute.jsx
│   │   └── NoteCard.jsx
│   │
│   ├── pages/              # Page-level components
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │  
│   │
│ 
│   │
│   ├── services/              # Helper functions
│   │   └── api.js
│   │
│   ├── App.jsx             # Main app layout
│   ├── main.jsx            # ReactDOM entry
│   ├── index.css           # Tailwind CSS
│   └── router.jsx          # React Router setup
│
├── .env                    # Frontend base API config
├── tailwind.config.js
├── postcss.config.js
├──  package.json
└── README.md

###Development Tips
Run both frontend and backend in parallel:

Use concurrently or run two terminal tabs:
cd backend && npm start
cd frontend && npm start
Use proxy in frontend/package.json if needed:
"proxy": "http://localhost:5000"

##deploye Link

https://kenmark-assignment-fs97.vercel.app/

-----------------------------------------Thanks----------------------------------






