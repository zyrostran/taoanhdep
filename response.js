/**
 * Response data
 * @param {string} statusCode - status code to response (default: 500)
 * @param {string} statusMessage - message to response (default: "Internal server error")
 * @param {any} data - data to response (default: null)
 */
class Response {
    constructor(statusCode, statusMessage, data) {
        this.status = statusCode || 500;
        this.message = statusMessage || "Internal server error";
        this.data = data || null;
    }
}

/**
 * Response data too, but it's v2
 * @param {number} statusCode - status code to response (return default: 500)
 * @param {string} statusMessage - message to response (return default: Internal server error)
 * @param {any} data - data to response (default: null)
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