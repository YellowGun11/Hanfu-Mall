const multer = require("multer")
let path = require("path");

//磁盘存储引擎
const storage = multer.diskStorage({
    //destination 是用来确定上传的文件应该存储在哪个文件夹中
    destination: function (req,file,cb) {
        // let filePath = path.join(__dirname, '../src/upload');
        //__dirname表示的是本文件的根目录即config
        // filePath == '....day9\config\src\upload\1547132087268-内马尔.jpg'
        // cb(null,filePath)

        //cb(null,'src/upload') 表示的路径是在项目的根目录下 添加路径
        cb(null,'src/upload')               //将上传的文件放到那个文件夹中去 字符串参数是路径


    },
    //filename 用于确定文件夹中的文件名的确定
    filename:function (req,file,cb) {
        cb(null,Date.now()+'-'+file.originalname)
    }
})

const upload = multer({storage:storage})

module.exports = upload