const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions')
const meetingsRouter = require('./meetings')

apiRouter.use('/minions', minionsRouter)
apiRouter.use('/meetings', meetingsRouter)


module.exports = apiRouter;
