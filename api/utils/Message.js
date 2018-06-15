module.exports = {
    sendSuccessJSON: function(message, data){
        return { "success": message, "data": data}
    },
    sendErrorJSON: function (err, message) {
        return { "errCode": err, "errMess": message }
    }
}