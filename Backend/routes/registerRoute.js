import express from 'express';
import createUser from '../controllers/registerController.js';
const router = express.Router();

router.get("/", function(req, res) {
  // Your GET route logic here
});

router.post("/",createUser);

export default router;
