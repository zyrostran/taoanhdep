class Response {
    constructor(statusCode, statusMessage, data) {
        this.status = statusCode || 500;
        this.message = statusMessage || "Internal server error";
        this.data = data || null;
    }
}

module.exports = {
    Response
}