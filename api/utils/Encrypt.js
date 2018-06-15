var bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {
    encryptPassword: function (myPlaintextPassword) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, function (err, salt) {
                if (err) {
                    reject(err);
                }
                bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                    if (err) {
                        reject(err);
                    }
                    resolve(hash)
                });
            });
        })
    },
    decryptPassword: function (myPlaintextPassword){
        return new Promise((resolve, reject) => {
            bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
                if(err) reject(err)
                return resolve(res)
            });
        })
    }
}
