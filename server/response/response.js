const response = (res, statusCode, data, message) => {
    res.status(statusCode).json({
        payload: {
            data: data,
        },
        msg : message,
        info: {
            statusCode: statusCode,
            prev: "",
            next: "",
        }

    })
}

module.exports = response;