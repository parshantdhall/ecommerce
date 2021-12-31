module.exports = (statusCode, data, count, res) => {
  res.status(statusCode).json({
    payload: {
      count,
      data,
    },
    status: "ok",
  });
};
