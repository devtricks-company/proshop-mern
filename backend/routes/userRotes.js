import express from 'express';
import { getAllUser, login, registerUser } from '../controller/userControllers.js';
import { protect } from '../middelwares/authMiddleware.js';
const router = express.Router();

router.route('/login').post(login);
router.route('/register').post(registerUser);
router.route('/').get(protect,getAllUser);
export default router;