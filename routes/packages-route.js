import express from 'express';
import { 
    getPackagesByDetails,
    // getPackagesById, 
    postPackageItem 
} from '../controllers/packages-controller.js';

const router = express.Router();

router.get("/details/:id", getPackagesByDetails);
// router.get("/", getPackagesById);
router.post("/create", postPackageItem);

export default router;