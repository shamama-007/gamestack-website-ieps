const express = require("express");
const router = express.Router();

const { isAuthenticatedAdmin } = require("../middleware/auth");

const {
  adminRegister,
  adminLogin,
  adminLogout,
  adminUpdatePassword,
  getAdminDetail,
  bannerImage,
  getBannerImage,
  bannerStatusUpdate,
  bannerImageDelete,
  getBannerImageSingle
} = require("../controllers/adminController");

router.post("/admin/register", adminRegister);

router.post("/admin/login", adminLogin);

router.get("/admin/me", isAuthenticatedAdmin, getAdminDetail);

router.get("/admin/logout", adminLogout);

router.put("/admin/password/update", isAuthenticatedAdmin, adminUpdatePassword);

// Banner Image
router.get("/admin/banner/image", getBannerImage);

router.get("/admin/banner/image/:bannerId", getBannerImageSingle);

router.post("/admin/banner/image", isAuthenticatedAdmin, bannerImage);

router.put("/admin/banner/image/:bannerId", isAuthenticatedAdmin, bannerStatusUpdate);

router.delete("/admin/banner/image/:bannerId", isAuthenticatedAdmin, bannerImageDelete);

module.exports = router;
