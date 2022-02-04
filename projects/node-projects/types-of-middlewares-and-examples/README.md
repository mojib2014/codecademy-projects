# Middleware in Express

**Middleware** is simply a regular javascript function which has access to `req` (reqest object), `res` (response object) and `next` (function) in the application's `request-response cycle`.

**Middleware functions can perform the following tasks:**

- Execute any code (run any code in it)
- Make changes to the `req` and `res` objects
- End the request-response cycle
- Call the `next` middleware function in the stack

**Note:** The middleware function must end `request-response cycle` or call the `next` function to pass control to the next middleware in stack, otherwise the request will be hanging.

## Application level middleware:

Application level middlewares are middlewares that are bind to the `app object`(by using `app.use()` and `app.METHOD()` functions, where METHOD is the HTTP method of the request that the middleware function handles (such as `GET`, `PUT`, `POST`, or `DELETE` in lowercase)).

**Example**:

```js
// A middleware function with not mount path
// It gets executed every time app receives a request
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("middleware executed it's code");

  next();
});

// This middleware function gets executed for every HTTP
// request on /user/:id path.
// and uses a arrow function syntax (javascript)
app.use("/user/:id", (req, res, next) => {
  res.send("Request Type: " + req.method);
});

// This middleware function handles GET requests to the
// /user/:id path
app.get("/user/:id", (req, res, next) => {
  res.send("Found a user by the given ID");
});

// Loading series of middlewares at a mount point with
// a mount path (middleware sub-stack)
app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL: ", req.originalUrl);

    next();
  },
  (req, res, next) => {
    console.log("Request Type: ", req.method);
  },
);
```
