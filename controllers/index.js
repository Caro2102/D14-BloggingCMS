const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashboard = require('./dashboardRoutes.js');

router.use('/', homeRoutes);
router.use('/dashboard',dashboard);
router.use('/api', apiRoutes);

module.exports = router;
