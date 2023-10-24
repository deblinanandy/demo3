import userRegistrationModel from "../model/userRegistrationModel.js";

const deleteAllLoginDetails = async (req, res) => {
  try {
    // Delete all user login details from the database
    const deleteResult = await userRegistrationModel.deleteMany({});

    if (deleteResult.deletedCount > 0) {
      res.status(200).json({ message: 'All user login details deleted successfully' });
    } else {
      res.status(404).json({ error: 'No user login details found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default deleteAllLoginDetails;
