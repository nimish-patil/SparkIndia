import User from "../models/userModal";
import express from "express";
const router = express.Router();

router.get("/:uuid", (req, res) => {
  try {
    const user = User.findOne({ uuid: req.params.uuid });
    if (!user) {
      return res.render({ err: "not in db" });
    }
    return res.render({ User });
  } catch (e) {
    return res.render({ err: "something went wrong" });
  }
});

module.exports = router;
