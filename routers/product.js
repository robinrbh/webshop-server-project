const { Router } = require("express")

const router = new Router()

const Product = require("../models").product
const Category = require("../models").category

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

router.patch("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const findProduct = await Product.findByPk(id)
		if (!findProduct) {
			res.status(400).send("Product not found!")
		} else {
			console.log("Find product:", findProduct)
			const updatedProduct = await findProduct.update({ ...req.body })
			res.send(updatedProduct)
		}
	} catch (e) {
		next(e)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const { name, description, price, imageurl } = req.body
		if (!name || !description || !price || !imageurl) {
			res.status(400).send("Missing stuff!")
		} else {
			try {
				const newProduct = await Product.create({
					name,
					description,
					price,
					imageurl,
				})
				res.json(newProduct)
			} catch (e) {
				console.log(e)
				next(e)
			}
		}
	} catch (e) {
		next(e)
	}
})

module.exports = router
