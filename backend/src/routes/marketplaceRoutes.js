import { Router } from 'express';
import { marketplaceController } from '../controllers/marketplaceController.js';

const router = Router();

router.get('/home', marketplaceController.home);

export default router;
