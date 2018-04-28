const router = require('express').Router()

router.use('/passenger', require('./passenger'))
router.use('/driver', require('./driver'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


module.exports = router
