/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    username: {
      type: "string",
      unique: true,
      email:true
    },
    password: {
      type: "string"
    },
    fullname: {
      type: "string",
      required: true
    }
  }
};

