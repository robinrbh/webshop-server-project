const { Router } = require("express")

const router = new Router()

const Category = require("../models").category

// router.get("/", async (req, res, next) => {
// 	try {
// 		const products = await Product.findAll()
// 		if (!Product) {
// 			res.status(404).send("Product not found!")
// 		}
// 		res.send(products)
// 	} catch (e) {
// 		next(e)
// 	}
// })

router.post("/", async (req, res, next) => {
  try {
    const { name, description, imageurl } = req.body 
    if (!name || !description || !imageurl ) {
      res.status(400).send("Missing stuff!")
    } else {
      const newCategory = await Category.create({
        name, 
        description,
        imageurl
      })
      res.json(newCategory)
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router
