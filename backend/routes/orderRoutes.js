import express from 'express';
const router = express.Router();

import { addOdersItems } from '../controllers/oderController.js';
import { protect } from '../middleware/authMiddeware.js';

router.post('/', protect, addOdersItems);

export default router;
