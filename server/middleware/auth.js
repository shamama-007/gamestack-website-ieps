const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const Admin = require("../models/adminModel");
const User = require("../models/userModel");

exports.isAuthenticatedAdmin = catchAsyncError(async (req, res, next) => {
  const token = req.headers['token'];
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await Admin.findById(decodedToken.id);
  next();
});


exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const token = req.headers['token'];
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decodedToken.id);
  next();
});