/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Encrypt = require('../utils/Encrypt')
var Message = require('../utils/Message')
var Type = require('../utils/Type')
module.exports = {
    create: async (req, res) => {
        let data = req.body;
        let passEncrypt = await Encrypt.encryptPassword(req.body.password);
        data.password = passEncrypt;
        Users.create({...data}).exec((err, result) => {
            if (err) {
                return res.send(Message.sendErrorJSON(err, Type.errorMessage.USER_REGISTED))
            }
            //Should response message send client ,not send data
            return res.redirect('/');
        })
    },
    update: async (req, res) => {
        let data  = req.body;
        let passEncrypt = await Encrypt.encryptPassword(req.body.password);
        data.password = passEncrypt;
        Users.update({ where: { id: req.params.id } }, data ).exec((err, updated) => {
            if (err) {
                res.send(Message.sendErrorJSON(err, Type.errorMessage.USER_NOT_FOUND))
            }
            return res.send(Message.sendSuccessJSON(Type.successMessage.USER_UPDATED, updated))
        })
    },
    delete: (req, res) => {
        Users.destroy({ where: { id: req.params.id } }).exec((err, result) => {
            if (err) {
                res.send(Message.sendErrorJSON(err, Type.errorMessage.USER_NOT_FOUND))
            }
            return res.send(Message.sendSuccessJSON(Type.successMessage.USER_DELETED, result))
        })
    }
};

