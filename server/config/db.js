const mongoose = require("mongoose");
const chalk = require("chalk");

const mongoDBConnect = () => {
  mongoose.connect(process.env.DB_URL).then((data) => {
    const HOST_FIND = data.connection.host == "localhost" ? chalk.bgRed(data.connection.host) : data.connection.host
    console.log(chalk.bgGreenBright('CONNECTION SUCCESSFULLY!') + " " +HOST_FIND);
  });
};

module.exports = mongoDBConnect;
