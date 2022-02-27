const createFile = (req,res,next) =>{
    let file = req.file;
    let returnObj = {
        "name":file.originalname,
        "type": file.mimetype,
        "size":file.size
    };
    next(
        res.json(returnObj)
    );
}


module.exports = {
    createFile
}