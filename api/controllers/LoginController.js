var bcrypt = require('bcrypt')
var Encrypt = require('../utils/Encrypt')
var Message = require('../utils/Message')
var Type = require('../utils/Type')

module.exports = {

    login: (req, res) => {
        const USER_NOT_EXIST = Type.errorMessage.USER_NOT_EXIST
        const PASS_NOT_TRUE = Type.errorMessage.PASS_NOT_TRUE
        const LOGIN_SUCCESS = Type.successMessage.LOGIN_SUCCESS
        let passDecrypt = Encrypt.decryptPassword(req.body.password)
        Users.find({ where: { username: req.body.username } }).exec(function (err, result) {
            if (err) return res.send(Message.sendErrorJSON({ err, USER_NOT_EXIST }))
            if (passDecrypt) {
                return res.send(Message.sendSuccessJSON(LOGIN_SUCCESS, result))
                // return res.redirect('/')
            }
            return res.send(Message.sendErrorJSON({ err, PASS_NOT_TRUE }))
        })
    }
}