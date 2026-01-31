import { supabase } from "../config/supabase";

export const createTrip = async (req,res) =>{
  const {customer_id , vehicle_id ,start_date , end_date ,location , distance_km ,passengers }
 =req.body 

 if (req.headers.role !== 'customer ')  
  {
return res.status(403).json({message: 'only customers can create trips '})
 }
}