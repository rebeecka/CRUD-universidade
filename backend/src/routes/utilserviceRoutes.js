import {Router} from 'express';
import utilServiceController from '../controllers/UtilServiceController.js';

const router = Router();


router.get("/",utilServiceController.generatePDF);


export default router;