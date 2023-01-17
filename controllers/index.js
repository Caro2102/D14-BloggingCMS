//Importar router de express
const router = require('express').Router();
//Importar rutas de api
const apiRoutes = require('./api');
//Importar rutas de home
const homeRoutes = require('./homeRoutes.js');
//Importar rutas de dashboard
const dashboard = require('./dashboardRoutes.js');

//Usar rutas de home con /
router.use('/', homeRoutes);
//Usar rutas de home con /dashboard
router.use('/dashboard',dashboard);
//Usar rutas de home con /api
router.use('/api', apiRoutes);

//Exportar rutas
module.exports = router;
