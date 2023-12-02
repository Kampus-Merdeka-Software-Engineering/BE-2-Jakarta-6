import express from 'express';
import { 
    getPackagesByDetails, 
    postPackageItem 
} from '../controllers/packages-controller.js';

const router = express.Router();

router.get("/details", getPackagesByDetails);
// router.get("/", getPackagesById);
router.post("/create", postPackageItem);

export default router;