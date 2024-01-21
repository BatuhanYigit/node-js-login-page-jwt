const user = require("../models/user.model");
const bcrypt = require("bcrypt")


const login = async (req, res) => {
    console.log(req.body);

    return res.json(req.body)
}


const register = async (req, res) => {
    const { email } = req.body

    const userCheck = await user.findOne({ email })

    if (userCheck) {
        console.log("Email already use!");
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)

    console.log("hashed password : ", req.body.password);

    try {
        const userSave = new user(req.body)

        await userSave.save()
            .then((response) => {
                return res.status(201).json({
                    success: true,
                    data: response,
                    message: "Success"
                })
            })
            .catch((err) => {
                console.log(err);
            })



    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    login,
    register
}
