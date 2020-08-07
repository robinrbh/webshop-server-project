const { Router } = require("express")

const router = new Router()

const Product = require("../models").product

router.get("/", async (req, res, next) => {
	try {
		const products = await Product.findAll()
		if (!Product) {
			res.status(404).send("Product not found!")
		}
		res.send(products)
	} catch (e) {
		next(e)
	}
})

module.exports = router
