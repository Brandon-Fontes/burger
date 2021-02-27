const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get('/', function (req, res) {
    res.redirect('/index');
})