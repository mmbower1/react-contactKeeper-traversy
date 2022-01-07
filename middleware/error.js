const ErrorResponse = require('../utils/errorResponse');
const dotenv = require('dotenv');
dotenv.config({ path: '../config/config.env' });

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  // log to console for developer use
  console.log(err);
  // mongoose bad object id
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // mongoose duplicate key error cover up
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
}

module.exports = errorHandler;