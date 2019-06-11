const shopDao = require("../dao/shopDao")
const shopCtrl = require("../controller/shopCtrl")


module.exports = {
  /*permissions(req,resp,next){
    console.log(req.session.data)
    if (req.session.data){
      next()
    }
    else {}
    resp.render("view/login")
  },*/
  dengLuPage(req,resp){
    console.log(11)
    let url = req.query.url
    resp.render("view/login",{url})
  },
  //返回登录页面
  getLoginData(req,resp){
    let num = 0
    let url = req.body.url
    console.log(url)
    let newUrl = url.split("/")[url.split("/").length-1]
    let arr = [req.body.username,req.body.password]
    shopDao.goodsList().then(function (connection) {
      connection.query("select * from user where user_account = ? and user_password = ?",arr,).then(function (data) {
        if (data.length>0) {
          if(data[0].user_status==1){
              //设置session
              req.session.data = data[0]
              if(Boolean(newUrl)){
                  resp.redirect("/"+newUrl)
              }else {
                  resp.redirect("/shopping_home")
              }
          }
          else {
              url = 1
              resp.render("view/login",{url})
          }
        }else {
          url = 0
          resp.render("view/login",{url})
        }
      })
    })
  },
  //登录判断
  zhuCePage(req,resp){
    resp.render("view/registered")
  },
  //返还注册页面
  getRegisteredData(req,resp){
    let myData = new Date()
    let time = myData.toLocaleString( )
    let username = req.body.username
    let password =req.body.password
    let nameNum = Number(req.body.nameNum)
    let pwdNum = Number(req.body.pwdNum)
    let rpwdNum = Number(req.body.rpwdNum)
    let codeNum = Number(req.body.codeNum)
    let phoneNum =Number(req.body.phoneNum)
    let header_url = "../images/user_header/header.jpg"
    let phone = req.body.phone
    let arr = [password,username,time,phone,header_url]
    console.log(typeof codeNum)
    console.log(Boolean(username),Boolean(password),Boolean(nameNum),Boolean(pwdNum),Boolean(rpwdNum),Boolean(codeNum),Boolean(phoneNum))
    if (username && password && phone && nameNum && pwdNum && rpwdNum && codeNum && phoneNum){
      console.log(123)
      shopDao.goodsList().then(function (connection) {
        connection.query("insert into user(user_password,user_account,user_time,user_phone,user_header_url) value(?,?,?,?,?)",arr).then(function (data) {
          console.log(data)
            connection.query("insert into member(member_phone,user_account) value(?,?)",[phone,username]).then(function (data) {
                resp.send("1")
            }).catch(function (err) {
              resp.send("0")
            })
        }).catch(function (err) {
            resp.send("0")
        })
      })
    }else {
      console.log(321)
      resp.send("0")
    }
  },
  //注册成功写入数据库
  contrastUserName(req,resp){
    let userName = req.body.name
    let arr = [userName]
    shopDao.goodsList().then(function (connection) {
      connection.query("select * from user where user_account = ? ",arr).then(function (data) {
        console.log(data)
        console.log(data.length)
        if (data.length > 0){
          console.log("有相同")
          resp.send("0")
        } else {
          console.log("没有相同")
          resp.send("1")
        }
      })
    })
  },
  //失焦 判断用户名
  verifyPhone(req,resp){
    let name = req.body.name
    let phone = req.body.phone
    var arr = [name,phone]
    console.log(arr)
    shopDao.goodsList().then(function (connection) {
      connection.query("select * from user where user_account = ? and user_phone = ?",arr).then(function (data) {
        console.log(data)
        if (data.length){
          resp.send("1")
        }else {
          resp.send("0")
        }
      }).catch(function (err) {
        console.log(err)
        resp.send("0")
      })
    })
},
//修改密码 对比账号和手机号
  modifyPwd(req,resp){
    let name = req.body.name
    let newPwd = req.body.newPwd
    let arr = [newPwd,name]
    console.log(arr)
    console.log("newpwe"+Boolean(newPwd))
    console.log("name"+Boolean(name))
    if (newPwd && name){
      shopDao.goodsList().then(function (connection) {
        connection.query("update user set user_password = ? where user_account = ? ",arr).then(function (data) {
          console.log(data)
          resp.send("1")
        }).catch(function (err) {
          console.log(err)
          resp.send("0")
        })
      })
    } else {
      resp.send("0")
    }

  },
  dropSession(req,res){
    console.log(req.session)
    req.session.data = ""
    console.log(req.session)
    res.send("1")
  },
  backPassword(req,resp){
    resp.render("view/back_password")
  }
}