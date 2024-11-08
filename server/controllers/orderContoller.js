const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const { getRandomNumber } = require("../utils/utils");

// New Order -- User
exports.newOrder = catchAsyncError(async (req, res, next) => {
  const { customerInfo, cartItems } = req.body;
  const orderId = getRandomNumber();
  const order = await Order.create({
    orderId,
    shippingInfo: {
      customerName: customerInfo.customerName,
      customerEmail: customerInfo.customerEmail,
      phoneNo: customerInfo.phoneNo,
      address1: customerInfo.address1,
      address2: customerInfo.address2,
      city: customerInfo.city,
      country: customerInfo.country,
      specialInstruction: customerInfo.specialInstruction,
    },
    orderItems: cartItems,
  });

  res.status(200).json({ success: true, order });
});

// Get Single Order -- User
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order Not Found with this Id!", 404));
  }

  res.status(200).json({ success: true, order });
});

// Get Track Order -- User
exports.getTrackOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findOne({ orderId: req.body.orderId });

  if (!order) {
    return res
      .status(200)
      .json({ success: false, message: "Order Not Found with this Id!" });
  }

  if (order.shippingInfo.phoneNo !== req.body.phone) {
    return res
      .status(200)
      .json({ success: false, message: "Phone Number are not matched" });
  }

  res.status(200).json({ success: true, order });
});

// User Return Update Order Status -- User
exports.userReturnOrderStatusUpdate = catchAsyncError(
  async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return next(new ErrorHandler("Order Not Found with this Id!", 404));
    }

    if (order.orderStatus === "CANCELLED") {
      return next(
        new ErrorHandler("YOu Have already cancelled this order", 404)
      );
    }

    if (req.body.status === "CANCELLED") {
      order.orderStatus = req.body.status;
      order.cancelledType = "USER";

      order.orderItems.map((i) => (i.orderStatus = req.body.status));
      order.cancelledAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });

    res.status(200).json({ success: true, order });
    // Stock Update Function
  }
);

// Get Single Order -- Admin
exports.getSingleOrderAdmin = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order Not Found with this Id!", 404));
  }

  res.status(200).json({ success: true, order });
});

// Get All Order -- Admin
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find().sort({ createAt: -1 });
  res.status(200).json({ success: true, orders });
});

// Update Order Status -- Admin
exports.updateOrders = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res
      .status(200)
      .json({ success: false, message: "Order Not Found with this Id!" });
  }

  if (order.orderStatus === "DELIVERED") {
    return res.status(200).json({
      success: false,
      message: "You Have already delivered this order",
      order,
    });
  }


  if (req.body.values.orderStatus === "SHIPPING" || req.body.values.orderStatus === "PROCESSING") {
    order.orderStatus = req.body.values.orderStatus;
    order.cancelledAt = undefined;
  }


  if (req.body.values.orderStatus === "CANCELLED") {
    order.orderStatus = req.body.values.orderStatus;
    order.orderItems.map((i) => (i.orderStatus = req.body.values.orderStatus));
    order.cancelledAt = Date.now();
  }


  if (req.body.values.orderStatus === "DELIVERED") {
    order.orderStatus = req.body.values.orderStatus;
    order.cancelledAt = undefined;
    order.cancelledType = "ADMIN";

    order.orderItems.map((i) => (i.orderStatus = req.body.values.orderStatus));
    order.deliveredAt = Date.now();

    let data = req.body.orderDetail.orderItems.map((item) => {
      return {
        productCode: item.productCode,
        quantity: item.quantity,
        rate: item.price,
        grossAmount: item.price * item.quantity,
      };
    });
    const date = new Date();
    const isoDateString = date.toISOString();

    const response = await fetch(
      "https://rightway.etechsolutionspk.com/api/Stock/PostCustomerOrder",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          transactionNumber: String(req.body.orderDetail.orderId),
          transactionDate: isoDateString,
          customerName: req.body.orderDetail.shippingInfo.customerName,
          cellNo: req.body.orderDetail.shippingInfo.phoneNo,
          emailAddress: req.body.orderDetail.shippingInfo.customerEmail,
          address1: req.body.orderDetail.shippingInfo.address1,
          address2: req.body.orderDetail.shippingInfo.address2,
          city: req.body.orderDetail.shippingInfo.city,
          country: req.body.orderDetail.shippingInfo.country,
          specialInstruction:
            req.body.orderDetail.shippingInfo.specialInstruction,
          deliveryCharges: String(req.body.orderDetail.deliveryCharges),
          orderItems: data,
        }),
      }
    );

    const result = await response.json();

    if (result.status == 1) {
      await order.save({ validateBeforeSave: false });
      return res
        .status(200)
        .json({ success: true, order, apiStatus: result.status });
    } else {
      return res
        .status(200)
        .json({ success: true, order, apiStatus: result.status });
    }
  }

  await order.save({ validateBeforeSave: false });

  return res.status(200).json({ success: true, order });
});

// Update Single Order Status -- Admin
exports.updateSingleOrders = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Order Not Found with this Id!", 404));
  }

  let updateValueHere = order.orderItems.filter((i) => {
    return String(i._id) === req.params.productid;
  });

  updateValueHere[0].orderStatus = req.body.status;

  await order.save({ validateBeforeSave: false });

  res.status(200).json({ success: true, order });
});

// Delete Order -- Admin
exports.deleteOrders = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order Not Found with this Id!", 404));
  }

  await Order.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true });
});
