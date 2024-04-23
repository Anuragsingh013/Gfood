import express from 'express';
import handleLoginUser from '../controllers/handleLoginUser.js';
const router = express.Router();

router.get("/", function(req, res) {
  // Your GET route logic here
});

router.post("/",handleLoginUser);

export default router;
