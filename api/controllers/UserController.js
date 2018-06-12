/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: (req, res) => {
        let data = req.body;
        // resultt = add database ? 0 : 1 
        return res.send(data);
    },
    create: (req, res) => {
        let data = req.body;
        User.create(data).exec((err, result) => {
            if(err){

            }
            //Should response message send client ,not send data
            return res.send(result);
        })
    },
    update: (req, res) => {
        let data = req.body;
        User.update(data).exec((err, result) => {
            if(err){

            }
            res.send(result)
        })
    },
    delete: (req, res) => {
        let data = req.body;
        User.destroy(data).exec((err, result) => {
            if(err){

            }
            res.send(result)
        })
    }
    
};

