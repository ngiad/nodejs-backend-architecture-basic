// khai báo port và khởi động server

const { default: mongoose } = require("mongoose");
const app = require("./src/app");
const PORT = process.env.PORT || 5656;

const server = app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT ::: ", PORT);
});

// những xử lí khi tắt server
process.on("SIGINT",async() => {
  console.log("\nReceived SIGINT. Closing server and disconnecting from MongoDB...");

  try {
    await server.close();
    console.log("Express server closed.");
    
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
    
    process.exit(0);
  } catch (err) {
    console.error("Error during shutdown:", err);
    process.exit(1);
  }
})