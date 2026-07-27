const express = require('express');
const { getProductReviews, createReview } = require('../controllers/reviews.controller');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/product/:productId', getProductReviews);
router.post('/', authMiddleware, createReview);

module.exports = router;
