import { Router } from "express";
import {createTodo} from '../controllers/todo'
const router=Router();
router.post('/',createTodo);
router.get('/');
router.patch('/:id');
router.delete('/:id');
export default router;