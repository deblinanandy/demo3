import Notice from "../model/Notice.js";
export const deleteAllNotices = async (req, res) => {
  try {
    await Notice.deleteMany({}); // Delete all notices

    return res.status(204).send(); // Respond with a 204 No Content status indicating successful deletion
  } catch (error) {
    return res.status(500).json({ error: "Error deleting all notices" });
  }
};
