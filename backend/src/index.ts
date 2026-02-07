import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const { PORT = "5000" } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", message: "Backend is running" });
});

// Auth endpoints
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  
  // Mock authentication
  if (email === "demo@example.com" && password === "password") {
    res.status(200).json({
      success: true,
      user: {
        id: "1",
        email: "demo@example.com",
        firstName: "Demo",
        lastName: "User"
      },
      token: "mock-jwt-token"
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }
});

app.post("/api/auth/register", (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  
  // Mock registration
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: {
      id: "2",
      email,
      firstName,
      lastName
    }
  });
});

// Products endpoints
app.get("/api/products", (_req, res) => {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 299.99,
      description: "High-quality wireless headphones with noise cancellation",
      category: "Electronics",
      image: "🎧"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 399.99,
      description: "Feature-rich smartwatch with health tracking",
      category: "Electronics",
      image: "⌚"
    },
    {
      id: 3,
      name: "Leather Bag",
      price: 189.99,
      description: "Genuine leather handbag with multiple compartments",
      category: "Fashion",
      image: "👜"
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 129.99,
      description: "Comfortable athletic shoes for all-day wear",
      category: "Sports",
      image: "👟"
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: 89.99,
      description: "Automatic coffee maker with programmable features",
      category: "Home",
      image: "☕"
    },
    {
      id: 6,
      name: "Yoga Mat",
      price: 49.99,
      description: "Non-slip exercise mat for yoga and fitness",
      category: "Sports",
      image: "🧘"
    }
  ];
  
  res.status(200).json(products);
});

// Orders endpoints
app.get("/api/orders", (_req, res) => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: 299.99,
      status: "Delivered",
      items: 2
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      total: 189.99,
      status: "Processing",
      items: 1
    }
  ];
  
  res.status(200).json(orders);
});

app.listen(Number(PORT), () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔐 Auth endpoints: http://localhost:${PORT}/api/auth`);
  console.log(`🛍️  Products: http://localhost:${PORT}/api/products`);
});
