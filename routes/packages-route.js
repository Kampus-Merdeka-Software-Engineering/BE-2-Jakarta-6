import express from 'express';
import { 
    getPackagesByDetails, 
    getAllPackages,
    postPackageItem 
} from '../controllers/packages-controller.js';

const router = express.Router();

router.get("/details/:id", getPackagesByDetails);
router.get("/", getAllPackages);
router.post("/create", postPackageItem);

export default router;