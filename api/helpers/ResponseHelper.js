class ResponseHelper{
    static dataFoundResponse(res,docs){
        return res.status(200).json({
            message:"record found",
            statusCode:200,
            data:docs,
            error:null
        });

    }
}
module.exports = ResponseHelper;