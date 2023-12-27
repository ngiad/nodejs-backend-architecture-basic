"use strict"

const { Router } = require('express')
const router = Router()

router.get("/",(req,res) => res.send("ok"))

router.use('/api/',require('./access'))


module.exports = router