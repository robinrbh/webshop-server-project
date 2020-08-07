const express = require("express")
const app = express()
const jsonParser = express.json();

app.use(jsonParser);

const productRouter = require("./routers/product");

app.use("/products", productRouter)

const port = process.env.PORT || 4000

app.listen(port, () => {
	console.log("Listening on: ", port)
})
