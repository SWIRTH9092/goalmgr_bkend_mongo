const jwt = require("jsonwebtoken")

async function isLoggedIn (req, res, next) {
    try {
        // check if the token is in the cookies
        const { token = false } = req.cookies;
        if (token) {
          // verify token
          const payload = await jwt.verify(token, process.env.SECRET_KEY);
          // add payload to request
          req.payload = payload;
          // move on
          next();
        } else {
          throw "Not Logged In";
        }
      } catch (error) {
        res.status(400).json("error: not logged in");
      }  
}

export default isLoggedIn