import express from 'express';
const router = express.Router();

import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddeware.js';

//@desc Fetch all Users
//@route GET /api/Users
//@acess Public
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

export default router;
