import express from "express";
const app = express();
const router = express.Router();

router.route("/profile").get();

module.exports = router;
