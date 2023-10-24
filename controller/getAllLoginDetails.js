import userRegistrationModel from "../model/userRegistrationModel.js";


const getAllLoginDetails = async (req, res) => {
  try {
    // Fetch all user login details from the database
    const loginDetails = await userRegistrationModel.find({}, 'email name  Designation loginTimestamp');

    // Return the login details as a JSON response
    res.status(200).json({ loginDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default getAllLoginDetails;
