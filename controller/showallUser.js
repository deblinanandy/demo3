import userRegistrationModel from "../model/userRegistrationModel.js";

const showallUser = async (req, res) => {
  try {
    const userDetails = await userRegistrationModel.find({});

    return res.status(200).json({
      success: true,
      message: 'User details retrieved successfully',
      data: userDetails
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error: ' + error.message
    });
  }
};

export default showallUser;
