// var express = require("express");
// var router = express.Router();

// /* GET users listing. */
// router.get("/", function(req, res, next) {
//     res.send("respond with a resource");
// });

// module.exports = router;

import express, { router } from "express";

let users = express.Router();
users.get("/", (req, res, next) => {
    res.send("respond with a resource");
});

let user = express.Router();
user.get("/:username", (req, res, next) => {
    res.send("respond with a user: " + req.params.username);
});


export { users, user };
