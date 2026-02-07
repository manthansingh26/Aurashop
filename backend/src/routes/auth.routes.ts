import { Router } from "express";
import { body } from "express-validator";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

// Validation rules
const registerValidation = [
  body("email").isEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("phoneNumber").optional().isMobilePhone("any").withMessage("Invalid phone number"),
];

const loginValidation = [
  body("email").isEmail().withMessage("Valid email required"),
  body("password").notEmpty().withMessage("Password is required"),
];

const otpValidation = [
  body("email").isEmail().withMessage("Valid email required"),
  body("otp").isLength({ min: 6, max: 6 }).isNumeric().withMessage("OTP must be 6 digits"),
];

const resendOtpValidation = [
  body("email").isEmail().withMessage("Valid email required"),
];

// Routes
router.post("/register", registerValidation, authController.register);
router.post("/verify-otp", otpValidation, authController.verifyOTP);
router.post("/resend-otp", resendOtpValidation, authController.resendOTP);
router.post("/login", loginValidation, authController.login);

export default router;
