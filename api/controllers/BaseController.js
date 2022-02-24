const Blog = require('../models/BlogModel');
const ResponseHelper = require('../helpers/ResponseHelper');

class BaseController{
    static get(model){
       return (req , res, next)=>{
        ResponseHelper.dataFoundResponse(res,{response: 'this is simple response'});
        }
    }

   
}

module.exports = BaseController;