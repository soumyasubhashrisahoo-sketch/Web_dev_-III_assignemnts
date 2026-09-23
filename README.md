# Student Management REST API — Assignment 2

Web Dev III (Node.js & Express Backend) — Unit 2

## Setup
```
npm install
npm start
```
Server runs at http://localhost:3000

## Project Structure
```
student-management-api/
├── app.js               # Express server entry point
├── package.json
├── routes/
│   └── studentRoutes.js # Modular routing (CRUD)
├── middleware/
│   └── logger.js        # Custom logger middleware
└── data/
    └── students.js      # In-memory array/JSON data (no DB used)
```

## API Endpoints
| Method | Endpoint         | Description          |
|--------|------------------|-----------------------|
| GET    | /students        | Get all students      |
| GET    | /students/:id    | Get student by ID     |
| POST   | /students        | Create a new student  |
| PUT    | /students/:id    | Update a student      |
| DELETE | /students/:id    | Delete a student      |

## Status Codes
- 200 Success
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Testing
Import the endpoints above into Postman. For POST/PUT, send JSON body, e.g.:
```json
{ "name": "Neha", "course": "BSc", "age": 20 }
```
