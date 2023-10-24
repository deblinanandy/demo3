import adminModel from '../model/adminModel.js';
import bcrypt from 'bcrypt';

const Admincontroller = async (req, res) => {
  try {
    const {  email,password } = req.body;
    const existingUser = await adminModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: 'Email is already existing',
      });
    }

    const salt = await bcrypt.genSalt(10); // Add await here
    const hashPassword = await bcrypt.hash(password, salt); // Add await here

    const userData = {

      password: hashPassword,
      email: email,
    };

    console.log(userData);

    await adminModel.create(userData);

    return res.status(200).send({
      success: true,
      message: 'User account created successfully',
    });
  } catch (error) {
    return res.status(400).send({
      message: "Error: " + error.message,
    });
  }
};

export default Admincontroller;
