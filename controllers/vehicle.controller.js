 import { supabase } from "../config/supabase";

 export const createVehicle = async (req , res ) =>{
   const { name, registeration ,allowed passengers , rateper km, owner id } = req.body 
 

 if (req.headers.role !=="owner ") {
  return res.status (403 ) ({
    message :"only owner can create vehicles "
  })


 }

 const {error} = await supabase 
 .from ("vehicles ") 
 .insert ([{ name, registeration , number ,allowed passengers , rateper km , owner id  , isAvailable : true , driver_id : null}])   

 if (error ) return res.status (400).json ({error: error.message})

  res.status (201).json ({message:"vehicle created "})

 }

 export const assignDriver = async (req , res) =>{
  const {vehicleId } = req.params 

  const {driver_id} req.body 
 }

 const {error} = await supabase 
 .from ("vehicles")
 .update ({driver_id})
 .eq ("id" , vehicleId)

 