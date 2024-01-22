const jwt = require("jsonwebtoken")

const createToken = async (userInfo, res) => {
    console.log(userInfo);

    const payload = {
        sub: userInfo._id,
        name: userInfo.name
    }

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        algorithm: "HS512",
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    return res.status(201).json({
        success: true,
        token: token,
        message: "Success"
    })

}

module.exports = {
    createToken
}