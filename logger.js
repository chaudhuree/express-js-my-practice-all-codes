const logger = (req,res,next) => {
  const method = req.method;
  const path = req.path;
  const year=new Date().getFullYear()
  console.log(method,path,year);
  next()
  
}

module.exports=logger