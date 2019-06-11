const shopDao = require("../dao/shopDao")

module.exports = {
    shoppingHome(req,resp){
        shopDao.goodsList().then(function (connection) {
            connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id where t1.goods_state='上架' order by t1.goods_comments desc  limit 3",[]).then(function (data) {
                // console.log(data)
                var hotList = data
                connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_season t3 on t3.goods_season_id = t1.goods_season_id where t1.goods_state='上架' order by t1.goods_collection desc limit 3",[]).then(function (data) {
                    var recList= data
                    resp.render("view/ShoppingHome",{hotList,recList})
                })
                connection.release()
            }).catch(function (err) {
                //查询表发生的错误
            })
            connection.release()
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    womenGoodsList(req,resp){
        shopDao.goodsList().then(function (connection) {
            connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name='女装' and t1.goods_state='上架' limit 0,9",[]).then(function (data) {
                // console.log(data)
                var goodsList = data
                connection.query("select count(*) as 'pageNum' from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name='女装' and t1.goods_state='上架' ",[]).then(function (data) {
                    // console.log(data[0].pageNum)
                    var pageNum=Math.ceil(data[0].pageNum/9)
                    // console.log(number)
                    resp.render("view/WomenGoodsList",{goodsList,pageNum})
                })
                connection.release()
            }).catch(function (err) {
                //查询表发生的错误
            })
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    accGoodsList(req,resp){
        shopDao.goodsList().then(function (connection) {
            connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name='配饰' and t1.goods_state='上架' limit 0,9",[]).then(function (data) {
                // console.log(data)
                var goodsList = data
                connection.query("select count(*) as 'pageNum' from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name='配饰' and t1.goods_state='上架' ",[]).then(function (data) {
                    // console.log(data[0].pageNum)
                    var pageNum=Math.ceil(data[0].pageNum/9)
                    // console.log(number)
                    resp.render("view/AccGoodsList",{goodsList,pageNum})
                })
                connection.release()
            }).catch(function (err) {
                //查询表发生的错误
            })
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    searchResult(req,resp){
        resp.render("view/SearchResult")
    },
    goodsDetail(req,resp){
        // let user_id = req.session.data.user_id
        let theId = req.query.id
        // let arr=[user_id,theId]
        shopDao.goodsDetails().then(function (connection) {
            connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_details t3 on t1.goods_id=t3.goods_id where t1.goods_id=?  ",[theId]).then(function (data) {
                // console.log(data)
                if (data){
                    let goodsList = data
                    connection.query("select * from comments t1 left join user t2 on t1.user_id=t2.user_id where t1.goods_id=?",[theId]).then(function (data) {
                        let commentList=data
                        let commentLength=data.length
                        resp.render("view/ShoppingDetails",{goodsList,commentList,commentLength})
                        /*connection.query("select collection_goods_id from collection_goods where user_id=? and goods_id=?",arr).then(function (data) {
                            let thisItem
                            if (data.length){
                                // console.log(data)
                                thisItem="取消收藏"
                                resp.render("view/ShoppingDetails",{goodsList,thisItem,commentList,commentLength})
                            } else {
                                // console.log(data)
                                thisItem="收藏"
                                resp.render("view/ShoppingDetails",{goodsList,thisItem,commentList,commentLength})
                            }
                        })*/
                    })
                }
            }).catch(function (err) {
                //查询表发生的错误
            })
            connection.release()
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })

    },
    searchPage(req,resp){
        let search_name = req.query.name
        // search_name = '%'+search_name+'%'
        // console.log(search_name)
        shopDao.goodsSearch().then(function (connection) {
            connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t1.goods_name like CONCAT('%',?,'%') or t3.goodsType_subtitle like CONCAT('%',?,'%')  limit 0,9",[search_name,search_name,search_name]).then(function (data) {
                // console.log(data)
                var goodsList = data
                // console.log(data.length)
                var pageNum=Math.ceil(data.length/9)
                // resp.send(data)
                resp.render("view/SearchResult",{goodsList,pageNum})
            }).catch(function (err) {
                //查询表发生的错误
                console.log("err")
                console.log(err)
            })
            connection.release()
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    }

}