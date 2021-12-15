module.exports = (statusCode, message, res) => {
  console.log(message);
  res.status(statusCode).json({
    payload: message,
    status: "error",
  });
};
