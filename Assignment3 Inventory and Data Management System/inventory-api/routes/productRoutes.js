const express = require('express');
const c = require('../controllers/productController');
const { validateObjectId } = require('../middleware/errorHandler');

const router = express.Router();

router.route('/').get(c.getProducts).post(c.createProduct);

// Static routes MUST come before '/:id' or "low-stock" is treated as an id
router.get('/low-stock', c.getLowStock);
router.get('/summary', c.getCategorySummary);

router.patch('/:id/stock', validateObjectId, c.adjustStock);

router
  .route('/:id')
  .get(validateObjectId, c.getProductById)
  .put(validateObjectId, c.updateProduct)
  .delete(validateObjectId, c.deleteProduct);

module.exports = router;
