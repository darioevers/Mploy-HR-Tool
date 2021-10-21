const getPrivateData = (req, res, next) => {
  res.status(200).json({
    data: "You are logged in",
  });
};
module.exports = getPrivateData;
