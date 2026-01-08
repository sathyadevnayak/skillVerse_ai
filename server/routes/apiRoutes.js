import express from 'express';
const router = express.Router();

// Import controllers (add as needed)
// import atsController from '../controllers/atsController.js';
// import githubController from '../controllers/githubController.js';
// etc.

// Example route
router.get('/health', (req, res) => {
  res.json({ status: 'API is working' });
});

// Add more routes here
// router.use('/ats', atsController);
// router.use('/github', githubController);

export default router;