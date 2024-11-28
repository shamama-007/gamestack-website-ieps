const catchAsyncError = require("../middleware/catchAsyncError");
const Admin = require("../models/adminModel");
const sendJWT = require("../utils/jwtSend");
const path = require("path");
const { getRandomNumber } = require("../utils/utils");
const Banner = require("../models/bannerModel");
const fs = require('fs');
const EventLogo = require("../models/eventLogoModel");

// Admin Register
exports.adminRegister = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  await Admin.create({
    name,
    email,
    password,
  });

  res
    .status(200)
    .json({ success: true, message: "Account create successfully" });
});

// Admin Login
exports.adminLogin = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(200).json({
      status: false,
      message: "email and password field is required",
    });
  }

  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(200).json({
      status: false,
      message: "Invalid email and password",
    });
  }

  const isPasswordMatched = await admin.comparePassword(password);

  if (!isPasswordMatched) {
    return res.status(200).json({
      status: false,
      message: "Invalid email and password",
    });
  }

  admin.password = undefined;
  sendJWT(admin, 200, "Login successfully", res);
});

// Admin Data
exports.getAdminDetail = catchAsyncError(async (req, res, next) => {
  const userData = await Admin.findById(req.user.id);
  userData.password = undefined;
  res.status(200).json({
    status: true,
    user: userData,
  });
});

// Admin Logout
exports.adminLogout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
    message: "Logged Out Successfully",
  });
});

// Admin Update Password
exports.adminUpdatePassword = catchAsyncError(async (req, res, next) => {
  const admin = await Admin.findById(req.user.id);

  if (!admin) {
    return res.status(200).json({
      status: false,
      message: "Invalid email and password",
    });
  }

  const isPasswordMatched = await admin.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return res.status(200).json({
      status: false,
      message: "Invalid email and password",
    });
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return res.status(200).json({
      status: false,
      message: "Password does not match",
    });
  }

  admin.password = req.body.newPassword;
  await admin.save();

  res.status(200).json({
    status: true,
    message: "Password update successfully",
  });
});



// Image Get Banner
exports.getBannerImage = catchAsyncError(async (req, res, next) => {
  const banners = await Banner.find();

  res.status(200).json({
    status: true,
    banners,
  });
});

// Image Get Single Banner
exports.getBannerImageSingle = catchAsyncError(async (req, res, next) => {
  const { bannerId } = req.params;

  const banner = await Banner.findById(bannerId);

  res.status(200).json({
    status: true,
    banner,
  });
});

// Image Upload Banner
exports.bannerImage = catchAsyncError(async (req, res, next) => {
  const { bannerImage } = req.files;

  const randNumber1 = getRandomNumber();
  const randNumber2 = getRandomNumber();

  if (!bannerImage) return res.status(200).json({ message: " some error" });

  const array_of_allowed_file_types = ["image/png", "image/jpeg", "image/jpg"];
  if (!array_of_allowed_file_types.includes(bannerImage.mimetype)) {
    return res.status(200).json({
      status: false,
      message: "Invalid file type",
    });
  }

  const allowed_file_size = 5;
  if (bannerImage.size / (1024 * 1024) > allowed_file_size) {
    return res.status(200).json({
      status: false,
      message: "File size upload 5MB",
    });
  }

  if (!/^image/.test(bannerImage.mimetype)) return res.sendStatus(400);

  let oneStepBack = path.join(__dirname, "../");
  let imageExtension = bannerImage.name.split(".");
  let extension = imageExtension[imageExtension.length - 1];

  const result = await Banner.create({
    imageLink:
      process.env.IMAGE_BACKEND_DIRECTORY +
      randNumber1 +
      "_" +
      randNumber2 +
      "." +
      extension,
  });

  if (result) {
    bannerImage.mv(
      oneStepBack +
        process.env.IMAGE_BACKEND_DIRECTORY +
        randNumber1 +
        "_" +
        randNumber2 +
        "." +
        extension
    );
  }

  res.status(200).json({
    status: true,
    message: "Banner image upload successfully",
  });
});

// Image Upload Banner Update
exports.bannerStatusUpdate = catchAsyncError(async (req, res, next) => {
  const { bannerId } = req.params;

  const banner = await Banner.findById(bannerId);

  banner.status = req.body.status;

  await banner.save({ validateBeforeSave: false });

  res.status(200).json({
    status: true,
    message: "Banner status update successfully",
    banner,
  });
});

// Image Upload Banner Delete
exports.bannerImageDelete = catchAsyncError(async (req, res, next) => {
  const { bannerId } = req.params;

  const banner = await Banner.findByIdAndDelete(bannerId);
  let oneStepBack = path.join(__dirname, "../");
  fs.unlink(oneStepBack + banner.imageLink, (err) => {
    if (!err) {
      console.log("Delete File successfully.");
    }
  });

  res.status(200).json({
    status: true,
    message: "Banner delete successfully",
  });
});



// ========================================


// Image Get EventLogo
exports.getEventLogo = catchAsyncError(async (req, res, next) => {
  const event = await EventLogo.find();

  res.status(200).json({
    status: true,
    event,
  });
});

// Image Get Single Banner
exports.getEventLogoImageSingle = catchAsyncError(async (req, res, next) => {
  const { eventId } = req.params;

  const event = await EventLogo.findById(eventId);

  res.status(200).json({
    status: true,
    event,
  });
});

// Image Upload Banner
exports.eventLogoImage = catchAsyncError(async (req, res, next) => {
  const { eventLogo } = req.files;
  console.log(eventLogo);
  const randNumber1 = getRandomNumber();
  const randNumber2 = getRandomNumber();

  if (!eventLogo) return res.status(200).json({ message: "some error" });

  const array_of_allowed_file_types = ["image/png", "image/jpeg", "image/jpg"];
  if (!array_of_allowed_file_types.includes(eventLogo.mimetype)) {
    return res.status(200).json({
      status: false,
      message: "Invalid file type",
    });
  }

  const allowed_file_size = 5;
  if (eventLogo.size / (1024 * 1024) > allowed_file_size) {
    return res.status(200).json({
      status: false,
      message: "File size upload 5MB",
    });
  }

  if (!/^image/.test(eventLogo.mimetype)) return res.sendStatus(400);

  let oneStepBack = path.join(__dirname, "../");
  let imageExtension = eventLogo.name.split(".");
  let extension = imageExtension[imageExtension.length - 1];

  const result = await EventLogo.create({
    imageLink:
      process.env.IMAGE_BACKEND_DIRECTORY +
      randNumber1 +
      "_" +
      randNumber2 +
      "." +
      extension,
  });

  if (result) {
    eventLogo.mv(
      oneStepBack +
        process.env.IMAGE_BACKEND_DIRECTORY +
        randNumber1 +
        "_" +
        randNumber2 +
        "." +
        extension
    );
  }

  res.status(200).json({
    status: true,
    message: "Event logo upload successfully",
  });
});

// Image Upload Banner Update
exports.eventStatusUpdate = catchAsyncError(async (req, res, next) => {
  const { eventId } = req.params;

  const event = await EventLogo.findById(eventId);

  event.status = req.body.status;

  await event.save({ validateBeforeSave: false });

  res.status(200).json({
    status: true,
    message: "Event status update successfully",
    event,
  });
});

// Image Upload Banner Delete
exports.eventImageDelete = catchAsyncError(async (req, res, next) => {
  const { eventId } = req.params;

  const event = await EventLogo.findByIdAndDelete(eventId);
  let oneStepBack = path.join(__dirname, "../");
  fs.unlink(oneStepBack + event.imageLink, (err) => {
    if (!err) {
      console.log("Delete File successfully.");
    }
  });

  res.status(200).json({
    status: true,
    message: "Event delete successfully",
  });
});
