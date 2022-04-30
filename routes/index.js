const ErrorResponse = require('../common/ErrorResponse');
const homeRouter = require('./home.router');
const userRouter = require('./user.router');
const franchiseRouter = require('./franchise.router');
const authRouter = require('./auth.router');
const introduceRouter = require('./introduce.router');
const productRouter = require('./product.router');
const newsRouter = require('./news.router');
const storeRouter = require('./store.router');
const recruitmentRouter = require('./recruitment.router');
const orderRouter = require('./order.router');

function route(app) {
    app.use('/orders', orderRouter);
    app.use('/users', userRouter);
    app.use('/auth', authRouter);
    app.use('/products', productRouter);
    app.use('/franchise', franchiseRouter);
    app.use('/introduce', introduceRouter);
    app.use('/news', newsRouter);
    app.use('/store', storeRouter);
    app.use('/recruitment', recruitmentRouter);
    app.use('/', homeRouter);
    app.use('*', (req, res, next) => {
        return next(new ErrorResponse('Not found route', 404));
    });
}

module.exports = route;
