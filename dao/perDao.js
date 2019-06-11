const shopPool = require("../config/shopPool")

module.exports = {
    perInfo(){
        return shopPool.getConnection()
    },
    perInfoUpdate(){
        return shopPool.getConnection()
    },
    perPhotoUpdate(){
        return shopPool.getConnection()
    },
    addressShow(){
        return shopPool.getConnection()
    },
    addAddress(){
        return shopPool.getConnection()
    },
    updateAddress(){
        return shopPool.getConnection()
    },
    setDefaultAddress(){
        return shopPool.getConnection()
    },
    deleteAddress(){
        return shopPool.getConnection()
    }
}