var Message = require('../utils/Message')
var Type = require('../utils/Type')
module.exports = {
  upload: function (req, res) {
    let file = req.file('file');
    file
      .upload({
        maxBytes: 100000000,
        // set the directory
        dirname: '../../assets/images/testUpload'
      },
        function (err, upload) {
          console.log('upload', upload)
          // try to always handle errors
          if (err) { return res.serverError(err) }
          // upload is an array of files uploaded 
          // so remember to expect an array object
          if (upload.length === 0) return res.badRequest('No file was uploaded')
          // if file was uploaded create a new registry
          // at this point the file is phisicaly available in the hard drive
          /** 
           * Handle path 
           * */
          let arrPath = upload[0].fd.split('/');
          let newPath = 'images/' + [arrPath[arrPath.length - 2], arrPath[arrPath.length - 1]].join('/')
          Image.create({
            path: newPath,
            fileName: upload[0].filename,
          }).exec(function (err, result) {
            if (err) return res.serverError(err)
            // if it was successful return the registry in the response
            return res.json(result.id)
          })
        })
  },
  download: function (req, res) {
    var fileID = req.param('id')
    // gets the id either in urlencode, body or url query
    File
      .findOne({ id: fileID })
      .exec((err, file) => {
        if (err) { return res.serverError(err) }
        if (!file) { return res.notFound() }
        // we use the res.download function to download the file 
        // and send a ok response
        res.download(file.path, function (err) {
          if (err) {
            return res.serverError(err)
          } else {
            return res.ok()
          }
        })
      })
  },
  delete: function (req, res) {
    Image.destroy({ where: { id: req.params.id } }).exec((err, result) => {
      if (err) {
        res.send(Message.sendErrorJSON(err, Type.errorMessage.IMAGE_NOT_FOUND))
      }
      return res.send(Message.sendSuccessJSON(Type.successMessage.IMAGE_DELETED, result))
    })
  },
  get: function (req, res) {
    Image.find().populate("productID", { select: ['productID'] }).exec(function (err, result) {
      if (err) res.send(Message.sendErrorJSON(err, Type.errorMessage.IMAGE_NOT_FOUND))
      return res.send(result)
    })
  },
  update: function (req, res) {
    let file = req.file('file');
    file
      .upload({
        maxBytes: 100000000,
        dirname: '../../assets/images/testUpload'
      },
        function (err, upload) {
          console.log('upload', upload)
          if (err) { return res.serverError(err) }
          if (upload.length === 0) return res.badRequest('No file was uploaded')
          let arrPath = upload[0].fd.split('/');
          let newPath = 'images/' + [arrPath[arrPath.length - 2], arrPath[arrPath.length - 1]].join('/')
          Image
            .update({
              where: { id: req.params.id }
            }, {
                path: newPath,
                fileName: upload[0].filename,
              }).exec((err, updated) => {
                if (err) res.send(Message.sendErrorJSON(err, Type.errorMessage.USER_NOT_FOUND))
                return res.send(Message.sendSuccessJSON(Type.successMessage.USER_UPDATED, updated))
              })
        })
  }
}