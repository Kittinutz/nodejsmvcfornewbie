const UserController = require('../controller/UserController');
const ApiController = require('../controller/ApiController');

module.exports = (app) => {
    app.get('/',(req,res,next)=>{
        res.send('helloworld 12344567812312');
    });
    app.get('/helloworld',(req,res,next)=>{
        res.send('helloworld');
    });
    app.get('/hentai',UserController.getUser);
    app.get('/user',ApiController.getApi);
    app.get('/user/:id',ApiController.getApibyid);
}
