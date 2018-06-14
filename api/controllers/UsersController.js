/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: (req, res) => {
        let data = req.body;
        Users.create(data).exec((err, result) => {
            if (err) {
                sails.log("error========", err)
                res.send({ err: err, message: "Không thêm mới được người dùng" })
            }
            //Should response message send client ,not send data
            return res.send(result);
        })
    },
    update: (req, res) => {
        let data  = req.body;
        Users.update({ where: { id: req.params.id } }, data ).exec((err, updated) => {
            if (err) {
                sails.log("error========", err)
                res.send({ err: err, message: "Không tìm thấy người dùng" })
            }
            return res.send(updated);
        })
    },
    delete: (req, res) => {
        Users.destroy({ where: { id: req.params.id } }).exec((err, result) => {
            if (err) {
                sails.log("error========", err)
                res.send({ err: err, message: "Không tìm thấy người dùng" })
            }
            return res.send(result)
        })
    }
};

