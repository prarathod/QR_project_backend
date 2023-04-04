const {constants} = require('../constants');
const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"FORBIDDEN Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"NOT_FOUND Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"SERVER_ERROR Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("stausCode:- ", statusCode);
            console.log('No error Found');
            break;
    }
};

module.exports = errorHandler;