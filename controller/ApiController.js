const models = require('../model/Providers');
exports.getApi = (req,res,next)=>{
    models.User.findAll().then(response=>{
        res.send(response);
    })
};
exports.getApibyid=(req,res,next)=>{
    var id = req.params.id;
   models.User.findById(id).then(response=>{
       res.send(response);
   })
}
