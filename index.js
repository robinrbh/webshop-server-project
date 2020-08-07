const express = require("express")

const app = express()
const jsonParser = express.json();

app.use(jsonParser);

// const userRouter = require("./router/user");
// const imageRouter = require("./router/image");
// const loginRouter = require("./router/auth");
// const authMiddleware  = require("./auth/middleware")

// app.use("/users", userRouter)
// app.use("/images", imageRouter)
// app.use(loginRouter)

const port = process.env.PORT || 4000

app.listen(port, () => {
	console.log("Listening on: ", port)
})
