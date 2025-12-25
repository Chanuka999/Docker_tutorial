import User from "../model/userModel.js";

export const CreateUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(200).json({
      message: "user added successfully",
      data: result,
    });
  } catch (error) {
    res.status(401).status({
      message: "user not added",
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "user data display",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      message: "not display data",
      data: error,
    });
  }
};
