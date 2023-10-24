import checkinModel from "../model/checkinModel.js";
const deleteCheck = async (req, res) => {
  try {
    // Delete all user login details from the database
    await checkinModel.deleteMany({});
    console.log('Deletion successful'); // Add this for debugging
    res.status(204).json({ message: 'All details deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default deleteCheck;
