const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));

// Error catching route
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  console.log(error.message);
  res.status(statusCode).json({
    error: true,
    message: error.message
  });
});

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
});
