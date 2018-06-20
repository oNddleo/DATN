/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        productName: {
            type: "string"
        },
        images:{
            collection: 'image',
            via: 'productID'
        },
        priceOriginal: {
            type: "integer"
        },
        promo: {
            type: "integer"
        },
        status: {
            type: "string"
        },
        info: {
            type: "string"
        },
        size: {
            type: "string"
        },
        quantity: {
            type: "integer"
        },
        // orders: {
        //     collection: 'order',
        //     via: 'owner'
        // }
    }
};