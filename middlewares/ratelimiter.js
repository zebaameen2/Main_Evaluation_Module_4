const requests ={}

export const rateLimiter =(req , res , next )=>{
  const ip= req.ip
  const now = Date.now()


requests [ip] = (requests[ip] || []).filter (t=>now-t<60000)

if (requests[ip] . length>=3){
return res.status (429).json({message:"too many request ,wait1 minute"})
}

requests[ip].push (now)
next()
}