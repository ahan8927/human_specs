// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const keyboardRouter = require('./typing.js');
const reactionRouter = require('./reaction.js');

router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/typing', keyboardRouter)

router.use('/reaction', reactionRouter)

module.exports = router;
