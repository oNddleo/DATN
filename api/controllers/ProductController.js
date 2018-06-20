
var Message = require('../utils/Message')
var Type = require('../utils/Type')
var moment = require('moment')
module.exports = {
    create: function (req, res) {
        let { images, ...data } = req.body;
        // console.log('data product', data)
        Product
            .create({ ...data }).exec((err, result) => {
                if (err) {
                    return res.send(Message.sendErrorJSON(err, Type.errorMessage.PRODUCT_NOT_CREATED))
                }
                for (let i = 0; i < images.length; i++) {
                    // console.log('data image', images)
                    Image.update({ where: { id: images[i] } }, { productID: result.id }).exec((err, result) => {
                        if (err) return res.send(Message.sendErrorJSON(err, Type.errorMessage.IMAGE_NOT_UPDATE))
                        // sails.log('image result update===', result)
                    })
                }
                return res.send(Message.sendSuccessJSON(Type.successMessage.PRODUCT_CREATED, result))
            })
    },
    get: function (req, res) {
        Product
            .find()
            .populate('images', { select: ['path', 'fileName'] }).exec(function (err, result) {
                if (err) res.send(Message.sendErrorJSON(err, Type.errorMessage.ERROR_SYSTEM))
                result.map(e => {
                    e.pricePromo = e.priceOriginal * (100 - e.promo) / 100
                    return e
                })
                return res.send(Message.sendSuccessJSON(Type.successMessage.PRODUCT_INFO, result))
            })
    },
    getNewProducts: function (req, res) {
        var end = moment(moment().format("YYYY-MM-DD")).toISOString()
        var start = moment(moment().format("YYYY-MM-DD")).subtract(10, 'days').toISOString()
        sails.log('start: ', start, 'end: ', end)
        Product
            .find({ createdAt: { '>': start, '<': end } })
            .populate('images', { select: ['path', 'fileName'] })
            .exec(function (err, result) {
                if (err) res.send(Message.sendErrorJSON(err, Type.errorMessage.ERROR_SYSTEM))
                result.map(e => {
                    e.pricePromo = e.priceOriginal * (100 - e.promo) / 100
                    return e
                })
                return res.send(Message.sendSuccessJSON(Type.successMessage.PRODUCT_INFO, result))
            })
    },
    getSaleProducts: function (req, res) {

    },
    getPromoProducts: function (req, res) {
        let promo = 10;
        Product
            .find({ promo: { '>=': promo } })
            .populate('images', { select: ['path', 'fileName'] })
            .exec(function (err, result) {
                if (err) res.send(Message.sendErrorJSON(err, Type.errorMessage.ERROR_SYSTEM))
                result.map(e => {
                    e.pricePromo = e.priceOriginal * (100 - e.promo) / 100
                    return e
                })
                return res.send(result)
            })
    },
    update: function (req, res) {
        let { images, ...data } = req.body;
        Product.update({ where: { id: req.params.id } }, { ...data }).exec(function (err, result) {
            if (err) res.send(Message.sendErrorJSON(err, Type.errorMessage.PRODUCT_NOT_FOUND))
            return res.send(Message.sendSuccessJSON(Type.successMessage.PRODUCT_UPDATED, result))
        })
    },
    delete: function (req, res) {
        // sails.log('....', req.params.id)
        Product.destroy({ where: { id: req.params.id } }).exec((err, result) => {
            // sails.log('..result', result)
            if (err) res.send(Message.sendErrorJSON(err, Type.errorMessage.PRODUCT_NOT_DELETED))

            return res.send(Message.sendSuccessJSON(Type.successMessage.PRODUCT_DELETED, result))
        })

    }
}