exports.getApi = (req,res,next)=>{
    console.log(req.body.name);
    res.send(req.body);
};
