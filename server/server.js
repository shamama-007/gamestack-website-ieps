const app = require("./app");
const mongoDBConnect = require("./config/db");
const chalk = require("chalk");

// Handling Uncaught Exception =====> console.log(SERVER SHUTDOWN)
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Connecting to database
mongoDBConnect();

// Server Listen
const server = app.listen(process.env.PORT, () => {
  console.log(chalk.bgCyanBright(`SERVER IS LISTENING http://localhost:${process.env.PORT}`));
});

// UnHandled Promise Rejection ====> Server Crashing Suddenly (SERVER OFF)
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unHandle Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
