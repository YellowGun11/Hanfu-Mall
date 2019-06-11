const express = require("express")
const shopCtrl = require("../controller/shopCtrl")
const shopDoCtrl = require("../controller/shopDoCtrl")


const login = require("../controller/login_registered")
const mySms = require("../controller/smsCtrl")
const perInfo = require("../controller/perInfoCtrl")
const uploadFileCtrl = require("../controller/uploadFileCtrl")
const upload = require("../config/MulterCig")
const router = express.Router()





//商城
router.get("/goods_women",shopCtrl.womenGoodsList)
router.get("/shopping_home",shopCtrl.shoppingHome)
router.get("/goods_acc",shopCtrl.accGoodsList)
router.get("/search_result",shopCtrl.searchResult)
router.get("/goods_detail",shopCtrl.goodsDetail)
router.get("/search_page",shopCtrl.searchPage)
router.get("/shopping_cart",shopDoCtrl.shoppingCart)


router.get("/order_process",shopDoCtrl.orderProcess)
router.get("/cart_order_process",shopDoCtrl.cartOrderProcess)
router.post("/choosePage.do",shopDoCtrl.choosePage)


//个人中心
router.get("/per_info",perInfo.perInfoHome)
router.get("/deli_address",perInfo.deliAddress)
router.get("/order_management",perInfo.orderManagement)
router.get("/safe_setting",perInfo.safeSetting)
router.get("/collection_goods",perInfo.getCollectionPage)
router.post("/perInfoUpdate.do",perInfo.perInfoUpdate)
router.post("/addAddress.do",perInfo.addAddress)
router.post("/updateAddress.do",perInfo.updateAddress)
router.post("/setDefaultAddress.do",perInfo.setDefaultAddress)
router.post("/deleteAddress.do",perInfo.deleteAddress)
router.post("/getOrderDetail.do",perInfo.getOrderDetail)
router.post("/delOrder.do",perInfo.delOrder)
router.post("/finishOrder.do",perInfo.finishOrder)
router.post("/submitComment.do",perInfo.submitComment)


router.post("/changePhone",perInfo.changePhoneNum)
router.post("/deleteCollection.do",perInfo.deleteCollection)
// router.post("/sendComment.do",perInfo.sendComment)
router.post("/getGoods.do",perInfo.getGoods)
router.post("/getpay.do",perInfo.getPay)


//upload.single后所接的字符串 代表前端input的name值
router.post("/uploadFile.do",upload.single('myfile'),uploadFileCtrl.upload)

//登录,注册
router.get("/login.do",login.dengLuPage)
router.post("/the_login.do",login.getLoginData)
router.get("/registered.do",login.zhuCePage)
router.post("/the_registered.do",login.getRegisteredData)
router.post("/sms.do",mySms.smsPhone)
router.post("/verifyCode.do",mySms.smsCode)
router.post("/validation_userName",login.contrastUserName)
router.post("/back_password",login.verifyPhone)
router.post("/modify_pwd",login.modifyPwd)
router.post("/exitLogin",login.dropSession)
router.get("/back_password",login.backPassword)


//商城购物车

router.post("/addCart.do",shopDoCtrl.addCart)
router.post("/deleteCartGoods.do",shopDoCtrl.deleteCartGoods)
router.post("/deleteCartAllGoods.do",shopDoCtrl.deleteCartAllGoods)
router.post("/moveCartGoods.do",shopDoCtrl.moveCartGoods)
// router.post("/collectCartAllGoods.do",shopDoCtrl.collectCartAllGoods)

router.post("/buyGoods.do",shopDoCtrl.buyGoods)
router.post("/addCollect.do",shopDoCtrl.addCollect)
router.post("/cancelCollect.do",shopDoCtrl.cancelCollect)
router.post("/goodsSelectTrue.do",shopDoCtrl.goodsSelectTrue)
router.post("/goodsSelectFalse.do",shopDoCtrl.goodsSelectFalse)
router.post("/updateCartGoodsNum.do",shopDoCtrl.updateCartGoodsNum)
router.post("/subCartGoodsNum.do",shopDoCtrl.subCartGoodsNum)
router.post("/addCartGoodsNum.do",shopDoCtrl.addCartGoodsNum)
router.post("/updateAllCartGoods.do",shopDoCtrl.updateAllCartGoods)
router.post("/createOrder.do",shopDoCtrl.createOrder)
router.post("/paySuccess.do",shopDoCtrl.paySuccess)
router.post("/choseComment.do",shopDoCtrl.choseComment)



router.get("/getSession",perInfo.getSessionData)


module.exports=router