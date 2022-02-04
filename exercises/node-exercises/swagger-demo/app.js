const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const mongoose = require("mongoose");
const { User } = require("./models/users");

mongoose.connect("mongodb://localhost:27017/swagger-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Controllers
const createUser = (req, res, next) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) next(err);
    else res.json(user);
  });
};

const updateUser = (req, res, next) => {
  User.findByIdAndUpdate(req.body.id, req.body, { new: true }, (err, user) => {
    if (err) next(err);
    else res.json(user);
  });
};

const deleteUser = (req, res, next) => {
  req.user.remove((err) => {
    if (err) next(err);
    else res.json(req.user);
  });
};

const getAllUsers = (req, res, next) => {
  User.find((err, users) => {
    if (err) next(err);
    else res.json(users);
  });
};

const getOneUser = (req, res, next) => {
  res.json(req.user);
};

const getByIdUser = (req, res, next, id) => {
  User.findOne({ _id: id }, (err, user) => {
    if (err) next(err);
    else {
      req.user = user;
      next();
    }
  });
};

// Routes
router.route("/users").post(createUser).get(getAllUsers);
router
  .route("/users/:userId")
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

router.param("userId", getByIdUser);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1", router);

app.listen(3000, () => console.log(`Server listening on port ${3000}...`));
module.exports = app;
