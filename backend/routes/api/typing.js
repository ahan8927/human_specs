const express = require("express");
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { TypingStat } = require('../../db/models');

const router = express.Router();

router.post(
  '',
  asyncHandler(async (req, res) => {
    // console.log('POSTINGGGGGGGG \n')
    const { id, speed, errors, letters, score, time, frequency } = req.body;
    // console.log(id, speed, errors, letters, score, time, frequency)
    const stats = await TypingStat.updateStats({ id, speed, score, time, letters, errors, frequency });

    return res.json({
      stats,
    });
  }),
)

module.exports = router;
