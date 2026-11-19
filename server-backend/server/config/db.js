const mongoose = require("mongoose");

let connectionPromise;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => {
        connectionPromise = undefined;
        throw err;
      });
  }

  await connectionPromise;
}

module.exports = connectDB;
