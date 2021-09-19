const { Response } = require("./response.js");


const morgan = require("morgan");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.set("json spaces", 2);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("combined"));

app.use("/v1/wibu", require("./routes/v1/wibu"));
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));

const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`Server started and listening on port ${server.address().port}`);
});