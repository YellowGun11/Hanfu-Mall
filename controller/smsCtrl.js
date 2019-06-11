const sms = require("leancloud-storage")
const app_id = ""
const app_key = ""
sms.init({
  appId:app_id,
  appKey:app_key
})
module.exports = {
  smsPhone(req,resp){
    let phone = req.body.phone
    let phoneNum = Number(req.body.phoneNum)
    // 拿到手机号
    console.log(phoneNum)
    if (phoneNum){
      sms.Cloud.requestSmsCode({
        mobilePhoneNumber:phone,
        name:"采薇汉服官网",
        code:"验证码",
        ttl:1,
        sign:"CountWED"
      }).then(function (data) {
        console.log("短信发送成功")
        console.log(data)
        // 短信发送成功
        resp.send("1")
      }).catch(function (err) {
        // 短信发送失败
        console.log("短信发送失败")
        console.log(err)
        resp.send("0")
      })
    } else {
      resp.send("0")
    }

  },
  smsCode(req,resp){
    let code = req.body.code
    let phone = req.body.phone
    let phoneNum = req.body.phoneNum
    if (code != "" && phone != ""){
      sms.Cloud.verifySmsCode(code,phone).then(function (data) {
        console.log(data)
        // 验证成功
        resp.send("1")
      }).catch(function (err) {
        console.log(err)
        //验证失败
        resp.send("0")
      })
    } else {
      resp.send("0")
    }
  }
}