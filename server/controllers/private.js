const getPrivateData = (req, res, next) => {
  res.status(200).json({
    data: "You got acces to the private data in this rout",
  });
};
module.exports = getPrivateData;
