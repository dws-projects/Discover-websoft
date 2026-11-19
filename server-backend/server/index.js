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

const allowedOrigins = (process.env.CLIENT_URLS || process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow server-to-server and local health checks that do not send Origin.
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Origin is not allowed by CORS"));
    },
  })
);

app.use(express.json());

// Vercel reuses warm function instances, so connect once and reuse Mongoose's
// connection. Local development still connects before opening the HTTP server.
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api", cartRoutes); // exposes /api/cart and /api/wishlist

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
});

if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }).catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
}

module.exports = app;
