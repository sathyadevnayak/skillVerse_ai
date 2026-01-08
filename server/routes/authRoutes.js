import express from 'express';
import { signup, signin, me, googleAuth } from '../controllers/authController.js';
import { requireAuth, requireRole } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googleAuth);

// Authenticated
router.get('/me', requireAuth, me);

// Example protected route for admins only
router.get('/admin-only', requireAuth, requireRole('admin'), (req, res) => {
  res.json({ message: 'Welcome admin!', user: req.user });
});

export default router;
