const mongoose = require('mongoose');

class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new AppError('Invalid product id', 400));
  }
  next();
};

const notFound = (req, res, next) => {
  next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
};


const errorHandler = (err, req, res, next) => {
  let status = err.statusCode || 500;
  let message = err.message || 'Server error';
  let details;

  if (err.name === 'ValidationError') {
    status = 400;
    details = Object.values(err.errors).map((e) => e.message);
    message = 'Validation failed';
  } else if (err.name === 'CastError') {
    status = 400;
    message = `Invalid value for ${err.path}`;
  } else if (err.code === 11000) {
    status = 409;
    const fields = err.keyValue ? Object.keys(err.keyValue) : ['sku'];
    message = `Duplicate value for: ${fields.join(', ')}`;
  } else if (err instanceof SyntaxError && err.status === 400) {
    message = 'Malformed JSON body';
  }

  res.status(status).json({ error: message, ...(details && { details }) });
};

module.exports = { AppError, validateObjectId, notFound, errorHandler };
