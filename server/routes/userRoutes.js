const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAuthenticatedAdmin } = require("../middleware/auth");

const {
  register,
  loginUser,
  userContact,
  logout,
  resetPassword,
  getUserDetail,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  forgotPassword,
} = require("../controllers/userController");
const { contactRateLimiter } = require("../middleware/rateLimit");

router.post("/user/register", register);

router.post("/user/login", loginUser);

// router.get("/user/logout", isAuthenticatedUser, logout);

router.post("/user/contact", contactRateLimiter, userContact);


router.post("/user/password/forgot", forgotPassword);

router.put("/user/password/reset/:token", resetPassword);

router.get("/user/me", isAuthenticatedUser, getUserDetail);

router.put("/user/password/update", isAuthenticatedUser, updatePassword);

router.put("/user/me/update", isAuthenticatedUser, updateProfile);

router.get(
  "/admin/users",
  isAuthenticatedAdmin,
  getAllUser
);

router.get(
  "/admin/user/:id",
  isAuthenticatedAdmin,
  getSingleUser
);


router.put(
  "/admin/user/:id",
  isAuthenticatedAdmin,
  updateUserRole
);


router.delete(
  "/admin/user/:id",
  isAuthenticatedAdmin,
  deleteUser
);

module.exports = router;
