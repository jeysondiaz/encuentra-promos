import { Router } from 'express'
import { getAllCategories, createCategory, categoryById, updateCategory, deleteCategory } from './controller'
import { authMiddleware } from '@middlewares/authMiddleware'
import { adminMiddleware } from '@middlewares/adminMiddleware'

const router = Router()


router.get('/categories', authMiddleware, getAllCategories)
router.post('/categories', authMiddleware, adminMiddleware, createCategory)
router.get('/categories/:id', authMiddleware, categoryById)
router.patch('/categories/:id', authMiddleware, adminMiddleware, updateCategory)
router.delete('/categories/:id', authMiddleware, adminMiddleware, deleteCategory)

export default router