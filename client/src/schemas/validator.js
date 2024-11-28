import * as Yup from "yup";

// Admin Password Updated Schema
export const ChangPasswordSchema = Yup.object({
  oldPassword: Yup.string()
    .min(8, "Old password must be at least 8 characters")
    .max(150, "Old password less than 150 characters")
    .required("Please enter your old password"),
  newPassword: Yup.string()
    .min(8, "New password must be at least 8 characters")
    .max(150, "New password less than 150 characters")
    .required("Please enter your new password"),
  confirmPassword: Yup.string()
    .required("Please enter your confirm password")
    .oneOf(
      [Yup.ref("newPassword"), null, "Password do not match"],
      "Password do not match"
    ),
});

// Admin Login Schema
export const AdminLoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

// Salesman Login Schema
export const LoginSchema = Yup.object({
  userId: Yup.string().required("Please enter your salesman id"),
  password: Yup.string().required("Please enter your password"),
});

// User Oder Schema
export const orderSchema = Yup.object({
  customerName: Yup.string()
    .trim(true)
    .min(3)
    .max(30)
    .required("Please enter your name"),
  customerEmail: Yup.string().email().required("Please enter your email"),
  phoneNo: Yup.string().required("Please enter your phone number"),
  address1: Yup.string().required("Please enter your address1"),
  address2: Yup.string().required("Please enter your address2"),
  city: Yup.mixed().defined().required("Please enter your city"),
  country: Yup.mixed().defined().required("Please select your country"),
});

// Order Status Schema
export const orderStatusSchema = Yup.object({
  orderStatus: Yup.mixed()
    .oneOf(["PROCESSING", "SHIPPING", "CANCELLED", "DELIVERED"])
    .defined()
    .required("Please select your status"),
});

// Order Items Status Schema
export const orderItemStatusSchema = Yup.object({
  orderItemStatus: Yup.mixed()
    .oneOf(["PROCESSING", "SHIPPING", "CANCELLED", "DELIVERED"])
    .defined()
    .required("Please select your status"),
});

// Banner Status Schema
export const bannerStatusSchema = Yup.object({
  bannerStatus: Yup.mixed()
    .oneOf(["1", "0"])
    .defined()
    .required("Please select your status"),
});

export const eventStatusSchema = Yup.object({
  eventStatus: Yup.mixed()
    .oneOf(["1", "0"])
    .defined()
    .required("Please select your status"),
});


// User Order Track Schema
export const orderTrackSchema = Yup.object({
  orderId: Yup.string()
    .trim("Please remove spaces")
    .strict(true)
    .required("Please enter your order ID"),

  phone: Yup.string()
    .trim("Please remove spaces")
    .strict(true)
    .required("Please enter your phone number"),
});
export const orderSalemanCustomerSchema = Yup.object({
  customerArea: Yup.mixed().defined().required("Please select your customer Area"),
});


export const emailExistSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});



