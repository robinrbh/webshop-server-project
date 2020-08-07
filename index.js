const express = require("express")
const app = express()
const jsonParser = express.json();

app.use(jsonParser);

const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");

app.use("/products", productRouter)
app.use("/category", categoryRouter)

const port = process.env.PORT || 4000

app.listen(port, () => {
	console.log("Listening on: ", port)
})
