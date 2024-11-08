// Create Token and Saving in Cookie

const sendJWT = (user, statusCode, message="", res) => {
  const token = user.jwtAuthToken();

  res
    .status(statusCode)
    .json({ status: true, message, user,token });
};

module.exports = sendJWT;
