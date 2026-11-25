const dns = require("dns");

// Prefer IPv4 when resolving SMTP hostnames.
// This helps avoid IPv6 connection errors on Render.
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const quotationRoutes = require("./routes/quotationRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

// ===============================
// CORS CONFIGURATION
// ===============================

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  ...(process.env.CLIENT_URLS || process.env.CLIENT_URL || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests without an Origin header
      if (!origin) {
        return callback(null, true);
      }

      // Allow only configured origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked CORS origin:", origin);
      console.log("Allowed origins:", allowedOrigins);

      return callback(new Error(`Origin not allowed by CORS: ${origin}`));
    },
    credentials: true,
  })
);

// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());

// Vercel reuses warm function instances, so connect once and reuse
// Mongoose's connection. Local development still connects before opening
// the HTTP server.
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

// ===============================
// HEALTH CHECK
// ===============================

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// ===============================
// API ROUTES
// ===============================

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api", cartRoutes); // exposes /api/cart and /api/wishlist

// ===============================
// ERROR HANDLER
// ===============================

app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  res.status(500).json({
    message: "Something went wrong",
  });
});

// ===============================
// LOCAL SERVER
// ===============================

if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
      process.exit(1);
    });
}

// ===============================
// EXPORT APP
// ===============================

module.exports = app;