import userRegistrationModel from '../model/userRegistrationModel.js';
import bcrypt from 'bcrypt';

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find a user by email, assuming userRegistrationModel is a Mongoose model
    const user = await userRegistrationModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Assuming the user model has a field named 'loginTimestamp'
    user.loginTimestamp = new Date();
    await user.save();

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' }); // Handle the error more gracefully
  }
};

export default userLogin;
