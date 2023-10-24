import Router  from "express";
import userRegistrationController from "../controller/userRegistrationController.js";
import Admincontrolle from "../controller/Admincontroller.js";
import Adminloging from "../controller/Adminloging.js";
import userLoging from "../controller/userLoging.js";
import getAllLoginDetails from "../controller/getAllLoginDetails.js";
import deleteAllLoginDetails from "../controller/cleanLoginFormData .js";
import checkinController from "../controller/checkinController.js";
import getAllCheckdetails from "../controller/getAllCheckdetails.js";
import deleteCheck from "../controller/deleteCheck.js";
import showallUser from "../controller/showallUser.js"
import {
  createNotice,
  getAllNotices,
  getNoticeById,
  updateNotice,
  deleteAllNotices,
} from '../controller/createNotice.js'; // Import your controller functions

const router = Router();

router.get('/', (req, res) => {
   res.send(`<h3>Login app routing</h3>`);

})
router.post('/register', userRegistrationController);
router.post('/adminregister', Admincontrolle);
router.post('/adminlog', Adminloging);
router.post('/userlog', userLoging);
router.get('/userlogdetils', getAllLoginDetails);
router.get('/deleteuser', deleteAllLoginDetails);
router.post('/check', checkinController);
router.get('/allcheck', getAllCheckdetails);
router.get('/alluser', showallUser);
router.delete('/delete', deleteCheck);
router.post('/notices', createNotice); // Create a new notice
router.get('/allnotices', getAllNotices); // Get all notices
router.get('/notices/:noticeId', getNoticeById); // Get a single notice by ID
router.put('/upnotices/:noticeId', updateNotice); // Update a notice by ID
router.delete('/deletenotices', deleteAllNotices); // Delete a notice by ID
export default router;
