const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const Contact = require("../models/contactModel");
const Checkout = require("../models/checkoutModel");
const sendJWT = require("../utils/jwtSend");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

// User Register
exports.register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.jwtAuthToken();
  res.status(200).json({ success: true, message: "Account create successfully", token });
});


// User Login
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new ErrorHandler("Please Enter a valid email and password", 400)
    );
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email and password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email and password", 401));
  }

  user.password = undefined;
  sendJWT(user, 200, "Login successfully", res);
});


// User Contact
exports.userContact = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, message } = req.body;

  // Save the new contact
  const user = new Contact({ name, email, phone, message });
  await user.save();


  sendEmail({
    email: process.env.SMTP_MAIL,
    subject: "Contact form submission",
    message: `Name: ${name} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`
  });


  res.status(200).json({ success: true, message: "The form has been successfully submitted." });
});


// User Checkout
exports.userCheckout = catchAsyncError(async (req, res, next) => {
  const user = new Checkout(req.body);
  const result = await user.save();
  if (!result) {
    return res.status(200).json({ success: false, message: "The form has not been successfully submitted." });
  }
  sendEmail({
    email: process.env.SMTP_MAIL,
    subject: "Checkout Form Submission",
    message: `
    First Name: ${req.body.firstName} 
    Last Name: ${req.body.lastName} 
    Phone: ${req.body.phone} 
    Country: ${req.body.country} 
    Province: ${req.body.province} 
    City: ${req.body.city} 
    Address: ${req.body.address} 
    ZIP Code: ${req.body.zipCode} 
    Agreement: ${req.body.agreement ? "Accepted" : "Not Accepted"}
    Subscription Plan: ${req.body.subscriptionPlan} 
    Subscription Rate: ${req.body.subscriptionRate} 
    Subscription Refund: ${req.body.subscriptionRefund} 
    Subscription Total: ${req.body.subscriptionTotal}
    `,
});

  res.status(200).json({ success: true, message: "Your request has been successfully submitted." });
});



// User Forgot Password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User Not Found", 404));
  }

  const resetToken = await user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const frontEndUrl = process.env.FRONTEND_URL;
  const resetPasswordUrl = `${frontEndUrl}/password/reset/${resetToken}`;

  const message = `Your message reset token is :- \n\n ${resetPasswordUrl} \n\nIf have not requested this email then, Please ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Games.com Password Recovery",
      message: message,
    });

    res.status(200).json({
      success: true,
      message: `Email Sent to ${user.email} Successfully`,
    });
  } catch (e) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(e.message, 500));
  }
});

// User Reset Password After Email Verified
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  // Creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendJWT(user, 200, '', res);
});

// User Get Single Data
exports.getUserDetail = catchAsyncError(async (req, res, next) => {
  const userData = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user: userData,
  });
});

// User Update Password
exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old Password is incorrect", 401));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 401));
  }

  user.password = req.body.newPassword;
  await user.save();

  sendJWT(user, 200, 'Password updated successfully', res);
});

// User Update Profile
exports.updateProfile = catchAsyncError(async (req, res, next) => {
  const newDataEntry = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const opts = {
      folder: "avatar",
      width: 150,
      crop: "scale",
      overwrite: true,
      invalidate: true,
      resource_type: "auto",
    };
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, opts);
    newDataEntry.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.url,
    };
  }

  await User.findByIdAndUpdate(req.user.id, newDataEntry, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true });
});

// Get All User (Admin)
exports.getAllUser = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ success: true, users });
});

// Get Single User Detail (Admin)
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User doest not exit with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({ success: true, user });
});

// User Update Profile (Admin)
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
  const newDataEntry = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newDataEntry, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true, message: "User Updated Successfully" });
});

// User Delete (Admin)
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User doest not exist with this Id : ${req.params.id}`)
    );
  }

  const imageId = user.avatar.public_id;
  await cloudinary.v2.uploader.destroy(imageId);


  await User.findByIdAndRemove(req.params.id);

  res.status(200).json({ success: true, message: "User Deleted Successfully" });
});
