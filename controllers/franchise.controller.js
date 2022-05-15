const asyncHandle = require('../middlewares/asyncHandle');
const User = require('../models/User');

const renderSite = asyncHandle(async (req, res, next) => {
    const user = await User.findOne({ username: res.locals.username });
    res.render('franchise.ejs', {
        userFName: user?.full_name,
        userRole: user?.role,
        userId: user?.id,
    });
});

module.exports = {
    renderSite,
};
