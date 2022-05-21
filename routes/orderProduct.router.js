const express = require('express');

const orderProductController = require('../controllers/orderProduct.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const orderProductRouter = express.Router();

orderProductRouter
    .route('/')
    .get(
        authMiddleware.protect,
        authMiddleware.isAuthenticated,
        authMiddleware.admin,
        orderProductController.getAllOrderProducts
    )
    .post(
        // authMiddleware.protect,
        // authMiddleware.isAuthenticated,
        orderProductController.createOrderProduct
    );

orderProductRouter.route('/:id').put(
    // authMiddleware.protect,
    // authMiddleware.isAuthenticated,
    orderProductController.updateOrderProduct
);

module.exports = orderProductRouter;
