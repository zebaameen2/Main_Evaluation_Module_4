import express from "express"

import ({ createVehicle , assignDriver }) from "../controller/vehicle.controller.js"

import {rateLimiter } from "..middlewares/rateLimiter.js"
import { createVehicle } from "../controllers/vehicle.controller"

const router = express.Router()

router.post ("/add" , rateLimiter, createVehicle)

router.patch ("/assign-driver/:vehicleId" , assignDriver )

router,get ("/vehicleId" , getVehicle) 


export default router