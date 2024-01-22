const router = require("express").Router()
const { login, register, userAuth } = require("../controllers/auth.controller")
const authValidation = require("../middlewares/validations/auth.validation")
const { tokenCheck } = require("../middlewares/auth")

router.post("/login", authValidation.login, login)

router.post("/register", authValidation.register, register)

router.get("/auth", tokenCheck, userAuth)

module.exports = router