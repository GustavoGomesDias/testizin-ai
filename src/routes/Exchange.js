import { Router } from 'express';
import Exchange from '../controller/Exchange.js';

const router = Router();

router.get('/exchange/:amount/:from/:to/:rate', Exchange.convert);

export default router;