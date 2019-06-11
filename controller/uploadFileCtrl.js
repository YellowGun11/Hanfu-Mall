const perDao = require("../dao/perDao")

module.exports = {
    // 单文件
    upload(req,res){
        //上传完了之后干啥
        //拿到图片路径将路径写入数据库
        //req.file 是 路由拦截中‘myfile’文件的信息
        console.log(`upload/${req.file.filename}`)
        console.log("req.file.path"+req.file.path)
        console.log(req.file)
        let photoPath=`upload/${req.file.filename}`
        let userAccount = req.session.data.user_account
        //将图片url写入数据库
        perDao.perPhotoUpdate().then(function (connection) {
            connection.query("update user set user_header_url=? where user_account = ? ",[photoPath,userAccount]).then(function (data) {
                if (data){
                    res.send(`upload/${req.file.filename}`)
                    // res.send("1")
                }else {
                    res.send("0")
                }
            })
            connection.release()
        })
        //res.render("sms",{})

    },
    //多文件
    uploadFiles(req,res){
        let imgArr = []
        req.files.forEach((item)=>{
            imgArr.push(item.filename)
        })
        //拿到上传的所有文件名 并将文件名写入数据库
        console.log("imgArr"+imgArr)
        //循环添加这个数组邻面src //一定要使用promise
        res.send("文件上传成功")
    }
}