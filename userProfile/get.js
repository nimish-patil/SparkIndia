import User from '../models/userModal.js';
import express from 'express';
const router = express.Router();

router.get('/:uuid', async (req, res) => {
  try {
    const user = await User.findOne({ uuid: req.params.uuid });
    if (!user) {
      return res.render({ err: 'not in db' });
    }
    console.log(user);
    return res.send(user);
  } catch (e) {
    return res.render({ err: 'something went wrong' });
  }
});

export default router;
