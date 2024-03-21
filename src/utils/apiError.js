class apiError extends Error {
    constructor (statusCode, message = "Something went Wrong", error = [], stack = "" ) 
    {
        super(message) = message
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.errors = errors
        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {apiError}