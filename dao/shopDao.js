const shopPool = require("../config/shopPool")

module.exports = {
    goodsList(){
        return shopPool.getConnection()
    },
    goodsDetails(){
        return shopPool.getConnection()
    },
    goodsSearch(){
        return shopPool.getConnection()
    },
    goodsCart(){
        return  shopPool.getConnection()
    },
    cartGoodsDelete(){
        return shopPool.getConnection()
    },
    goodsBuy(){
        return shopPool.getConnection()
    },
    collectGoods(){
        return shopPool.getConnection()
    },
    cancelCollect(){
        return shopPool.getConnection()
    },
    orderList(){
        return shopPool.getConnection()
    },
    cartGoodsSelected(){
        return shopPool.getConnection()
    },
    cartGoodsUpdate(){
        return shopPool.getConnection()
    },
    createOrder(){
        return shopPool.getConnection()
    },
    paySuccess(){
        return shopPool.getConnection()
    },
    choseComment(){
        return shopPool.getConnection()
    }
}