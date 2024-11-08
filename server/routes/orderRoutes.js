const express = require("express");
const {
  newOrder,
  getSingleOrder,
  getAllOrders,
  deleteOrders,
  userReturnOrderStatusUpdate,
  getSingleOrderAdmin,
  updateOrders,
  updateSingleOrders,
  getTrackOrder
} = require("../controllers/orderContoller");
const { isAuthenticatedAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/order/new", newOrder);

router.get("/order/:id", getSingleOrder);

router.post("/order/track", getTrackOrder);

router.put("/order/:id", userReturnOrderStatusUpdate);

router.get("/admin/orders", isAuthenticatedAdmin, getAllOrders);

router.get("/admin/order/:id", isAuthenticatedAdmin, getSingleOrderAdmin);



router.put("/admin/order/:id", isAuthenticatedAdmin, updateOrders);

router.put("/admin/order/:id/:productid", isAuthenticatedAdmin, updateSingleOrders);

router.delete("/admin/order/:id", isAuthenticatedAdmin, deleteOrders);

module.exports = router;
