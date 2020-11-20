// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  const allowedPaths = ["/", "/api/login", "/api/signup" ]
  // If the user is logged in, continue with the request to the restricted route
  if (req.user || req.url.toLowerCase().includes(allowedPaths)) {

    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
