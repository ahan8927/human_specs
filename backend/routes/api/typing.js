const express = require("express");
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { TypingStat } = require('../../db/models');

const router = express.Router();

router.post(
  '',
  asyncHandler(async (req, res) => {
    const { speed, score, time, frequency } = req.body;
    const stats = await TypingStat.updateStats({ speed, score, time, errors, frequency });

    return res.json({
      stats,
    });
  }),
)

module.exports = router;
