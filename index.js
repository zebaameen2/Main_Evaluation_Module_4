import express from "express"

import vehhicleRoutes from "./routes/vehicle.routes.js"

import dotenv from "dotenv "
import userRoutes from "./routes/user.routes.js"

dotenv.config ()

const app= express ()

app.use (express.json())

app.use ("/users" , userRoutes)
app.use("/vehicles" , vehhicleRoutes)

app.listen (3000 ,()=>{
   console.log ("server running ")
})