module.exports = {
    uploadTest: function (req, res) {
        let file = req.file('file');
        file.upload({
            adapter: require('skipper-gridfs'),
            uri: 'mongodb://localhost:27017/datn.image',
            dirname: '../../assets/images'
          }, function(err, upload) {
            console.log('upload')
            // try to always handle errors
            if (err) { return res.serverError(err) }
            // upload is an array of files uploaded 
            // so remember to expect an array object
            if (upload.length === 0) { return res.badRequest('No file was uploaded') }
            // if file was uploaded create a new registry
            // at this point the file is phisicaly available in the hard drive
            Image.create({
              path: upload[0].fd,
              fileName: upload[0].filename,
            }).exec(function(err, result) {
              if (err) { return res.serverError(err) }
              // if it was successful return the registry in the response
              return res.json(result)
            })
          })
    },
    download: function(req, res) {
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
      }
}