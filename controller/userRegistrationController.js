import userRegistrationModel from '../model/userRegistrationModel.js'; // Fixed the import statement, assuming you have the correct path
import bcrypt from 'bcrypt';

const userRegistrationController = async (req, res) => {
  try {
    const {
      name,  password,email,  Designation,
      DOB,  BloodGroup,Address, AdharNO, ContactNo, EmergencyMobileNo,
    } = req.body;

    const existingUser = await userRegistrationModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email is already in use'
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      password: hashPassword,
      email,
      Designation,
      DOB,
      BloodGroup,
      Address,
      AdharNO,
      ContactNo,
      EmergencyMobileNo,
    };

    console.log(userData);

    await userRegistrationModel.create(userData);

    return res.status(201).json({
      success: true,
      message: 'User account created successfully'
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error: ' + error.message
    });
  }
};

export default userRegistrationController;
