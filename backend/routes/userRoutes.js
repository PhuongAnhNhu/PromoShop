import express from 'express';
const router = express.Router();

import {
    authUser
} from '../controllers/userController.js';

//@desc Fetch all Users
//@route GET /api/Users
//@acess Public
router.post('/login', authUser)


export default router;
