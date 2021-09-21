class Response {
    constructor(statusCode, statusMessage, data) {
        this.status = statusCode || 500;
        this.message = statusMessage || "Internal server error";
        this.data = data || null;
    }
}

/**
 * Return a response
 * @param {number} statusCode - status code to (return default: 500)
 * @param {string} statusMessage - message to (return default: Internal server error)
 * @param {any} data - data to return (default: null)
 */
class Response_v2 {
    constructor(statusCode, statusMessage, data) {
        this.statusCode = statusCode || 500;
        this.statusMessage = statusMessage || "Internal server error";
        this.data = data || null;
    }
}

module.exports = {
    Response,
    Response_v2
}