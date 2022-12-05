const authorize = (req,res,next) => {
const {user}=req.query;
  if(user==='chaudhuree'){
    req.user={name: 'chaudhuree',id:4}
    next()
  }else{
    res.status(404).send({message:'unauthorized'})
    next()
  }
}
module.exports=authorize