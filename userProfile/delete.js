import User from '../models/userModal.js';
import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

router.delete('/:uuid', async (req, res) => {
  try {
    const user = await User.deleteOne({ uuid: req.params.uuid });
    console.log(user);
    return res.send(`user with uid ${req.params.uuid} deleted.`);
  } catch (e) {
    return res.render({ err: 'something went wrong' });
  }
});
export default router;
