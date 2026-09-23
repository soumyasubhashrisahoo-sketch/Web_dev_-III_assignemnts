const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Custom logger middleware (logs method, URL, timestamp)
app.use(logger);

// Root route (simple health check)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student Management REST API is running.",
    endpoints: [
      "GET    /students",
      "GET    /students/:id",
      "POST   /students",
      "PUT    /students/:id",
      "DELETE /students/:id"
    ]
  });
});

// Modular routing for student-related APIs
app.use("/students", studentRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found."
  });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error."
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
