import express from 'express';
import { getPackagesByDetails } from '../controllers/packages-controller.js';

const router = express.Router();

router.get("/details", getPackagesByDetails);

export default router