const User = require("../models/userModel");
// const catchAsync = require('../utils/catchAsync');

exports.register = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    });
    //   createSendToken(newUser, 201, res);
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    console.log("ERROR 💥", err.name, err);
    let msg;
    if (err.name === "ValidationError") {
      console.log("ERROR 💥", Object.entries(err));
      const errors = Object.values(err.errors).map((el) => el.message);
      msg = `Invalid input data. ${errors.join(". ")}`;
    } else {
      msg = err.name;
    }
    // console.log(msg);
    return res.status(400).json({
      // message: err.errors,
      // message: err._message,
      message: msg,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("req.body", req.body);
    console.log("auth login", email, password);
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email & password",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    console.log(user, password, user.password);
    console.log(await user.correctPassword(password, user.password));
    if (!user || !(await user.correctPassword(password, user.password))) {
      // return next(new AppError('Incorrect email or password', 401));
      return res.status(401).json({
        message: "Incorrect email or password",
      });
    }

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log("ERROR 💥", err.name, err);
    let msg;
    if (err.name === "ValidationError") {
      console.log("ERROR 💥", Object.entries(err));
      const errors = Object.values(err.errors).map((el) => el.message);
      msg = `Invalid input data. ${errors.join(". ")}`;
    } else {
      msg = err.name;
    }
    // console.log(msg);
    return res.status(400).json({
      err: err,
      status: err.status,
      message: msg,
    });
  }
};

// exports.register = catchAsync(async (req, res) => {
//   console.log("req.body", req.body);

//   const newUser = await User.create({
//     email: req.body.email,
//     password: req.body.password,
//     passwordConfirm: req.body.passwordConfirm,
//   })
//     .then((res) => {
//       //   createSendToken(newUser, 201, res);
//       res.status(201).json({
//         status: "success",
//         data: {
//           newUser,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log("ERROR 💥", Object.entries(err));
//       // console.log(typeof err.errors.password);
//       // console.log(err.errors.password);
//       // console.log(err._message);
//       const errors = Object.values(err.errors).map((el) => el.message);

//       const msg = `Invalid input data. ${errors.join(". ")}`;
//       console.log(msg);
//       res.status(400).json({
//         // message: err.errors,
//         // message: err._message,
//         message: msg,
//       });
//     });
// });
