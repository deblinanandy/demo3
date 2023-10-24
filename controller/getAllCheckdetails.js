import Checkin from "../model/checkinModel.js";

const getCheckinController = async (req, res) => {
  try {
    const checkins = await Checkin.find({}, 'name email designation ContactNo createdAt ');

    if (!checkins || checkins.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No checkins found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Checkins retrieved successfully',
      data: checkins
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error: ' + error.message
    });
  }
};

export default getCheckinController;
