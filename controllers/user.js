const { userModel } = require("../models/userModel");
const { hashPassword } = require("../utils/hashPassword");

exports.userProfile = async (req, res, next) => {
  console.log("req.payload", req.payload.aud);
  const user = await userModel.findById(req.payload.aud);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  // const userProfile = {
  //   firstname: user?.firstname,
  //   lastname: user?.lastname,
  //   email: user?.email,
  //   phonenumber: user?.phonenumber,
  // };
  console.log("userProfile", user);
  return res.status(200).json(user);
};

exports.editProfile = async (req, res, next) => {
  const data = req.body;
  if ("password" in data) {
    data.password = await hashPassword(data.password);
  }
  const user = await userModel.findByIdAndUpdate(
    req.payload.aud,
    { $set: data },
    { new: true }
  );
  return res.status(200).json({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phonenumber: user.phonenumber,
  });
};
