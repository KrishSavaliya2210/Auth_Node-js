const jwt = require("jsonwebtoken");

const authenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({ message: "JWT Token is required" });
  }
  try {
    const token = auth.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
        return res.status(403).json({ message: "JWT Token is wrong " });
  }
  
};

module.exports = {
  authenticated,
};
