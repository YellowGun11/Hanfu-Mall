const shopDao = require("../dao/shopDao")

module.exports = {
    choosePage(req,resp){
        let currentPage = req.body.currentPage
        let sortType = Number(req.body.sort_type)
        let goodsType = req.body.goods_type
        let partPage = req.body.part_page
        let arr = (Number(currentPage)-1)*9
        let arrOne = [partPage,arr]
        let arrTwo = [partPage,goodsType,arr]
        if (goodsType==""){
            if (sortType==0){
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? order by t1.goods_id asc limit ?,9",arrOne).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==1) {
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? order by t1.goods_collection asc limit ?,9",arrOne).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==2) {
                //收藏量
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? order by t1.goods_collection desc limit ?,9",arrOne).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==3) {
                console.log(3)
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? order by t1.goods_price asc limit ?,9",arrOne).then(function (data) {
                        if (data){
                            console.log(data)
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==4) {
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? order by t1.goods_price desc limit ?,9",arrOne).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
        }
        else{
            if (sortType==0){
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? and goodsType_subtitle=? order by t1.goods_id asc limit ?,9",arrTwo).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==1) {
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? and goodsType_subtitle=? order by t1.goods_collection asc limit ?,9",arrTwo).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==2) {
                //收藏量
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? and goodsType_subtitle=? order by t1.goods_collection desc limit ?,9",arrTwo).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==3) {
                console.log(3)
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? and goodsType_subtitle=? order by t1.goods_price asc limit ?,9",arrTwo).then(function (data) {
                        if (data){
                            console.log(data)
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
            else if (sortType==4) {
                shopDao.goodsList().then(function (connection) {
                    connection.query("select * from goods t1 left join goods_picture t2 on t1.goods_picture_id=t2.goods_picture_id left join goods_type t3 on t3.goodsType_id = t1.goodsType_id where t3.goodsType_name=? and goodsType_subtitle=? order by t1.goods_price desc limit ?,9",arrTwo).then(function (data) {
                        if (data){
                            resp.send(data)
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                    })
                    connection.release()
                }).catch(function (err) {
                    //这个catch是连接数据发生的错误
                })
            }
        }
    },
    shoppingCart(req,res){

      const url = req.query.url
      console.log("登录购物车"+url)
      if (req.session.data){
          let userId = req.session.data.user_id
        shopDao.goodsCart().then(function (connection) {
          connection.query('select * from shopping_carts t1 left join goods t2 on t1.goods_id=t2.goods_id left join goods_picture t3 on t3.goods_picture_id = t2.goods_picture_id where t1.user_id=?',[userId]).then(function (data) {
            var goodsList = data
            // console.log(data)
            res.render("view/ShoppingCart",{goodsList})
          })
          connection.release()
        })
      }else {
        res.redirect(`/login.do?url=${url}`)
      }
    },
    orderProcess(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let user_id = req.session.data.user_id
        let goods_id =req.query.goods_id
        let goods_size=req.query.goods_size
        let arr=[user_id,goods_id,goods_size]
        shopDao.orderList().then(function (connection) {
            connection.query("select * from shopping_carts t1 left join goods t2 on t1.goods_id=t2.goods_id left join goods_picture t3 on t2.goods_picture_id =t3.goods_picture_id where t1.user_id=? and t1.goods_id=? and t1.goods_size=?",arr).then(function (data) {
                let orderList = data.slice(0,1)
                console.log(orderList)
                let shoppingId = orderList[0].shopping_cart_id
                let realPay = orderList[0].goods_number*orderList[0].shopping_price
                connection.query("delete  from shopping_carts where shopping_cart_id=?",shoppingId).then(function (data) {
                    connection.query("select * from shipping_address where user_id=? order by addr_is_default desc ",user_id).then(function (data) {
                        let addressList = data
                        res.render("view/ShoppingOrderProcess",{orderList,addressList,realPay})
                    })
                })
            })
            connection.release()
        })

    },
    addCart(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let user_id = req.session.data.user_id
        let goods_id = req.body.goodsId
        let goods_price = req.body.price
        let goods_number = req.body.number
        let goods_size = req.body.size
        console.log(goods_id)
        console.log(goods_price)
        let goodsArr =[user_id,goods_id,goods_number,goods_size,goods_price]
        shopDao.goodsCart().then(function (connection) {
            connection.query('select * from goods_details where goods_id=?',[goods_id]).then(function (data) {
                if (data){
                    let arr=data
                    let num
                    if (goods_size=='S'){
                        num = arr[0].goodsDetails_s
                    } else if (goods_size=='M'){
                        num = arr[0].goodsDetails_m
                    } else if(goods_size=='L'){
                        num = arr[0].goodsDetails_l
                    }
                    console.log("num")
                    console.log(num)
                    if (num<goods_number){
                        res.send("3")
                    } else {
                        connection.query('insert into shopping_carts(user_id,goods_id,goods_number,goods_size,shopping_price) value(?,?,?,?,?)',goodsArr).then(function (data) {
                            if (data){
                                if (goods_size=='S'){
                                    console.log('s')
                                    connection.query('update goods_details set goodsDetails_s=goodsDetails_s-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                        if (data){
                                            console.log(data)
                                            res.send("1")
                                        } else {
                                            res.send("0")
                                        }
                                    })
                                    connection.release()
                                } else if (goods_size=='M'){
                                    connection.query('update goods_details set goodsDetails_m=goodsDetails_m-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                        if (data){
                                            res.send("1")
                                        } else {
                                            res.send("0")
                                        }
                                    })
                                    connection.release()
                                } else if(goods_size=='L'){
                                    connection.query('update goods_details set goodsDetails_l=goodsDetails_l-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                        if (data){
                                            res.send("1")
                                        } else {
                                            res.send("0")
                                        }
                                    })
                                    connection.release()
                                }
                            }else {
                                res.send("0")
                            }
                        }).catch(function (err) {
                            //查询表发生的错误
                            console.log("查询表发生的错误")
                            console.log(err)
                        })
                    }
                }
                else {
                    res.send("0")
                }
            })
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
            console.log("数据连接错误")
            console.log(err)

        })
    },
    deleteCartGoods(req,res){
        let delete_cart_id = req.body.goods_cart_id
        // let userId = req.session.data.user_id
        shopDao.cartGoodsDelete().then(function (connection) {
            connection.query('select * from shopping_carts where shopping_cart_id=?',[delete_cart_id]).then(function (data) {
                if (data){
                    let goodsSize=data[0].goods_size
                    let goodsId=data[0].goods_id
                    let goodsNum=data[0].goods_number
                    let arr=[goodsNum,goodsNum,goodsId]
                    connection.query('delete from shopping_carts  where shopping_cart_id=?',[delete_cart_id ]).then(function (data) {
                        if (data){
                            if (goodsSize=='S'){
                                connection.query('update goods_details set goodsDetails_s=goodsDetails_s+?,goodsDetails_sale=goodsDetails_sale-? where goods_id=?',arr).then(function (data) {
                                    if (data){
                                        res.send("1")
                                    } else {
                                        res.send("0")
                                    }
                                })
                                connection.release()
                            } else if (goodsSize=='M'){
                                connection.query('update goods_details set goodsDetails_s=goodsDetails_m+?,goodsDetails_sale=goodsDetails_sale-? where goods_id=?',arr).then(function (data) {
                                    if (data){
                                        res.send("1")
                                    } else {
                                        res.send("0")
                                    }
                                })
                                connection.release()
                            } else if(goodsSize=='L'){
                                connection.query('update goods_details set goodsDetails_s=goodsDetails_l+?,goodsDetails_sale=goodsDetails_sale-? where goods_id=?',arr).then(function (data) {
                                    if (data){
                                        res.send("1")
                                    } else {
                                        res.send("0")
                                    }
                                })
                                connection.release()
                            }
                        }else {
                            res.send("0")
                        }
                    })
                } else {
                    res.send("0")
                }
            })
        })
    },
    deleteCartAllGoods(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let userId = req.session.data.user_id
        shopDao.cartGoodsDelete().then(function (connection) {
            connection.query('delete from shopping_carts where user_id=?',[userId]).then(function (data) {
                if (data){
                    // console.log(data)
                    res.send("1")
                }else {
                    res.send("0")
                }
            })
            connection.release()
        })
    },
    moveCartGoods(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let move_name = req.body.goods_move
        let goods_cart_id = req.body.goods_cart_id
        let goods_id = req.body.goods_id
        let userId = req.session.data.user_id
        shopDao.cartGoodsDelete().then(function (connection) {
            connection.query('select * from collection_goods where user_id=? and goods_id=?',[userId,goods_id]).then(function (data) {
                if (data.length){
                    res.send("0")
                } else {
                    connection.query('delete from shopping_carts where shopping_cart_id=?',[goods_cart_id]).then(function (data) {
                        if (data){
                            connection.query('insert into collection_goods(user_id,goods_id) value(?,?)',[userId,goods_id]).then(function (data) {
                                if (data){
                                    connection.query("update goods set goods_collection=goods_collection+1 where goods_id = ? ",[goods_id]).then(function (data) {
                                        res.send("1")
                                    })
                                }
                            })
                        }
                    })
                }
            })
            connection.release()
        })
    },
    /*collectCartAllGoods(req,res){
        let userId = req.session.data.user_id
        shopDao.cartGoodsDelete().then(function (connection) {
            connection.query('select * from goods t1 left join shopping_carts t2 on t1.goods_id = t2.goods_id where t2.user_id = ?',[userId]).then(function (data) {
                if (data){
                    // let goodId = data[0]
                    for (let i=0;i<data.length;i++){
                        console.log(data[i].goods_id)
                        let goodsId = data[i].goods_id
                        connection.query('insert into collection_goods(user_id,goods_id) value(?,?)',[userId,goodsId]).then(function (data) {

                        })
                    }
                    connection.query('delete t1 from shopping_carts t1 left join goods t2 on t1.goods_id=t2.goods_id  where t1.user_id=?',[userId]).then(function (data) {
                        if (data){
                            res.send("1")
                        }
                        else {
                            res.send("0")
                        }
                    })
                }else {
                    res.send("0")
                }
            })
            connection.release()
        })
    },*/
    buyGoods(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let user_id = req.session.data.user_id
        // console.log(user_id)
        let goods_id = req.body.goodsId
        let goods_name = req.body.name
        let goods_price = req.body.price
        let goods_number = req.body.number
        let goods_size = req.body.size
        //改变默认
        let is_selected=1
        let goodsArr =[user_id,goods_id,goods_number,goods_size,is_selected,goods_price]
        shopDao.goodsBuy().then(function (connection) {
            connection.query('select * from goods_details where goods_id=?',[goods_id]).then(function (data) {
                if (data){
                    let arr=data
                    let num
                    if (goods_size=='S'){
                        num = arr[0].goodsDetails_s
                    } else if (goods_size=='M'){
                        num = arr[0].goodsDetails_m
                    } else if(goods_size=='L'){
                        num = arr[0].goodsDetails_l
                    }
                    if (num<goods_number){
                        res.send("3")
                    } else {
                        connection.query('insert into shopping_carts(user_id,goods_id,goods_number,goods_size,shopping_is_select,shopping_price) value(?,?,?,?,?,?)',goodsArr).then(function (data) {
                            if (data){
                                if (goods_size=='S'){
                                    connection.query('update goods_details set goodsDetails_s=goodsDetails_s-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                        if (data){
                                            res.send("1")
                                        } else {
                                            res.send("0")
                                        }
                                    })
                                    connection.release()
                                } else if (goods_size=='M'){
                                    connection.query('update goods_details set goodsDetails_m=goodsDetails_m-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                        if (data){
                                            res.send("1")
                                        } else {
                                            res.send("0")
                                        }
                                    })
                                    connection.release()
                                } else if(goods_size=='L'){
                                    connection.query('update goods_details set goodsDetails_l=goodsDetails_l-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                        if (data){
                                            res.send("1")
                                        } else {
                                            res.send("0")
                                        }
                                    })
                                    connection.release()
                                }
                            }else {
                                res.send("0")
                            }
                        }).catch(function (err) {
                            //查询表发生的错误
                        })
                    }
                }
            })
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    addCollect(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let user_id = req.session.data.user_id
        // console.log(req.session.data)
        let goods_id = req.body.goodsId
        let Arr= [user_id,goods_id]
        shopDao.collectGoods().then(function (connection) {
            connection.query("select collection_goods_id from collection_goods where user_id=? and goods_id=?",Arr).then(function (data) {
                if (data.length){
                    res.send("3")
                } else {
                    connection.query('insert into collection_goods(user_id,goods_id) value(?,?)',Arr).then(function (data) {
                        if (data){
                            connection.query("update goods set goods_collection=goods_collection+1 where goods_id = ? ",[goods_id]).then(function (data) {
                                if (data){
                                    res.send("1")
                                } else {
                                    res.send("0")
                                }
                            })
                        }else {
                            res.send("0")
                        }
                    }).catch(function (err) {
                        //查询表发生的错误
                        console.log(err)
                    })
                    connection.release()
                }
            })

        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    cancelCollect(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let user_id = req.session.data.user_id
        let goods_id = req.body.goodsId
        let Arr= [user_id,goods_id]
        shopDao.cancelCollect().then(function (connection) {
            connection.query('delete from collection_goods where user_id=? and goods_id=?',Arr).then(function (data) {
                if (data){
                    res.send("1")
                }else {
                    res.send("0")
                }
            }).catch(function (err) {
                //查询表发生的错误
                console.log(err)
            })
            connection.release()
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    goodsSelectTrue(req,res){
        let cart_id = req.body.select_id
        let is_collect = 1
        let arr=[is_collect,cart_id]
        shopDao.cartGoodsSelected().then(function (connection) {
            connection.query("update shopping_carts set shopping_is_select=? where shopping_cart_id=?",arr).then(function (data) {
                if (data){
                    res.send("1")
                }
            })
            connection.release()
        })
    },
    goodsSelectFalse(req,res){
        let cart_id = req.body.select_id
        let is_collect = 0
        let arr=[is_collect,cart_id]
        shopDao.cartGoodsSelected().then(function (connection) {
            connection.query("update shopping_carts set shopping_is_select=? where shopping_cart_id=?",arr).then(function (data) {
                if (data){
                    res.send("1")
                }
            })
            connection.release()
        })
    },
    updateCartGoodsNum(req,res){
        let cart_goods=req.body.cart_goods_id
        let goods_num=req.body.newNum
        let arr=[goods_num,cart_goods]
        shopDao.cartGoodsUpdate().then(function (connection) {
            connection.query("update shopping_carts set goods_number=? where shopping_cart_id=?",arr).then(function (data) {
                if (data){
                    res.send("1")
                }
            })
            connection.release()
        })
    },
    subCartGoodsNum(req,res){
        let cart_goods=req.body.cart_goods_id
        let goods_id=req.body.goods_id
        let goods_size=req.body.goods_size
        let flag=req.body.flag
        if (flag){
            shopDao.cartGoodsUpdate().then(function (connection) {
                connection.query('select * from shopping_carts t1 left join goods_details t2 on t1.goods_id=t2.goods_id where t1.shopping_cart_id=?',[cart_goods]).then(function (data) {
                    if (data){
                        let num
                        let arr=data
                        if (goods_size=='S'){
                            num=arr[0].goodsDetails_s-arr[0].goods_number+1
                            if (num<0){
                                res.send("2")
                            } else {
                                connection.query("update shopping_carts set goods_number=goods_number-1 where shopping_cart_id=?",[cart_goods]).then(function (data) {
                                    if (data){
                                        connection.query('update goods_details set goodsDetails_s=goodsDetails_s+1,goodsDetails_sale=goodsDetails_sale-1 where goods_id=?',[goods_id]).then(function (data) {
                                            if (data){
                                                res.send("1")
                                            } else {
                                                res.send("0")
                                            }
                                        })
                                        connection.release()
                                    }
                                })
                            }

                        } else if (goods_size=='M'){
                            num=arr[0].goodsDetails_s-arr[0].goods_number+1
                            if (num<0){
                                res.send("2")
                            } else {
                                connection.query("update shopping_carts set goods_number=goods_number-1 where shopping_cart_id=?",[cart_goods]).then(function (data) {
                                    if (data){
                                        connection.query('update goods_details set goodsDetails_m=goodsDetails_m+1,goodsDetails_sale=goodsDetails_sale-1 where goods_id=?',[goods_id]).then(function (data) {
                                            if (data){
                                                res.send("1")
                                            } else {
                                                res.send("0")
                                            }
                                        })
                                        connection.release()
                                    }
                                })
                            }
                        } else if(goods_size=='L'){
                            num=arr[0].goodsDetails_s-arr[0].goods_number+1
                            if (num<0){
                                res.send("2")
                            } else {
                                connection.query("update shopping_carts set goods_number=goods_number-1 where shopping_cart_id=?",[cart_goods]).then(function (data) {
                                    if (data){
                                        connection.query('update goods_details set goodsDetails_l=goodsDetails_l+1,goodsDetails_sale=goodsDetails_sale-1 where goods_id=?',[goods_id]).then(function (data) {
                                            if (data){
                                                res.send("1")
                                            } else {
                                                res.send("0")
                                            }
                                        })
                                        connection.release()
                                    }
                                })
                            }
                        }
                    }
                })
            })
        } else {

        }
    },
    addCartGoodsNum(req,res){
        let cart_goods=req.body.cart_goods_id
        let goods_id=req.body.goods_id
        let goods_size=req.body.goods_size
        let flag=req.body.flag
        if (flag){
            shopDao.cartGoodsUpdate().then(function (connection) {
                connection.query('select * from shopping_carts t1 left join goods_details t2 on t1.goods_id=t2.goods_id where t1.shopping_cart_id=?',[cart_goods]).then(function (data) {
                    if (data){
                        let num
                        let arr=data
                        if (goods_size=='S'){
                            num=arr[0].goodsDetails_s-arr[0].goods_number-1
                            if (num<0){
                                res.send("2")
                            } else {
                                connection.query("update shopping_carts set goods_number=goods_number+1 where shopping_cart_id=?",[cart_goods]).then(function (data) {
                                    if (data){
                                        connection.query('update goods_details set goodsDetails_s=goodsDetails_s-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                            if (data){
                                                res.send("1")
                                            } else {
                                                res.send("0")
                                            }
                                        })
                                        connection.release()
                                    }
                                })
                            }

                        } else if (goods_size=='M'){
                            num=arr[0].goodsDetails_s-arr[0].goods_number-1
                            if (num<0){
                                res.send("2")
                            } else {
                                connection.query("update shopping_carts set goods_number=goods_number+1 where shopping_cart_id=?",[cart_goods]).then(function (data) {
                                    if (data){
                                        connection.query('update goods_details set goodsDetails_m=goodsDetails_m-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                            if (data){
                                                res.send("1")
                                            } else {
                                                res.send("0")
                                            }
                                        })
                                        connection.release()
                                    }
                                })
                            }
                        } else if(goods_size=='L'){
                            num=arr[0].goodsDetails_s-arr[0].goods_number-1
                            if (num<0){
                                res.send("2")
                            } else {
                                connection.query("update shopping_carts set goods_number=goods_number+1 where shopping_cart_id=?",[cart_goods]).then(function (data) {
                                    if (data){
                                        connection.query('update goods_details set goodsDetails_l=goodsDetails_l-1,goodsDetails_sale=goodsDetails_sale+1 where goods_id=?',[goods_id]).then(function (data) {
                                            if (data){
                                                res.send("1")
                                            } else {
                                                res.send("0")
                                            }
                                        })
                                        connection.release()
                                    }
                                })
                            }
                        }
                    }
                })
            })
        } else {

        }
    },
    updateAllCartGoods(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let userId = req.session.data.user_id
        let is_select = req.body.is_select
        let arr=[is_select,userId]
        shopDao.cartGoodsUpdate().then(function (connection) {
            connection.query("update shopping_carts set shopping_is_select=? where user_id=?",arr).then(function (data) {
                if (data){
                    res.send("1")
                }
            })
            connection.release()
        })
    },
    cartOrderProcess(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let user_id = req.session.data.user_id
        let is_select=1
        let arr=[user_id,is_select]
        // console.log(goods_id)
        shopDao.orderList().then(function (connection) {
            connection.query("select * from shopping_carts t1 left join goods t2 on t1.goods_id=t2.goods_id left join goods_picture t3 on t2.goods_picture_id =t3.goods_picture_id where t1.user_id=? and t1.shopping_is_select=?",arr).then(function (data) {
                let orderList = data
                let realPay=0
                data.forEach((item)=>{
                    realPay+=item.goods_number*item.goods_price
                })
                connection.query("delete  from shopping_carts where user_id=? and shopping_is_select=?",arr).then(function (data) {
                    connection.query("select * from shipping_address where user_id=? order by addr_is_default desc ",user_id).then(function (data) {
                        let addressList = data
                        res.render("view/ShoppingOrderProcess",{orderList,addressList,realPay})
                    })
                })
            })
            connection.release()
        })
    },
    createOrder(req,res){
        if (!req.session.data){
            return res.send("2")
        }
        let user_id = req.session.data.user_id
        let orderId=req.body.order_id
        let orderIdList=req.body.orderIdList
        orderIdList=JSON.parse(orderIdList)
        let orderSizeList=req.body.orderSizeList
        orderSizeList=JSON.parse(orderSizeList)
        let orderNumList=req.body.orderNumList
        orderNumList=JSON.parse(orderNumList)
        let totalMoney=req.body.totalMoney
        let orderAddress=req.body.orderAddress
        let is_finish=0
        let is_pay=0
        shopDao.createOrder().then(function (connection) {
            connection.query("insert into my_order (order_id,order_pay_money,user_id,order_is_pay,order_is_finish) values(?,?,?,?,?)",[orderId,totalMoney,user_id,is_pay,is_finish]).then(function (data) {
                if (data){
                    for (let i=0;i<orderIdList.length;i++){
                        connection.query("insert into order_goods_details (order_id,goods_id,goods_num,goods_size,order_details_addr) values(?,?,?,?,?)",[orderId,orderIdList[i],orderNumList[i],orderSizeList[i],orderAddress]).then(function (data) {

                        })
                    }
                    res.send("1")
                }
            })
            connection.release()
        })
    },
    paySuccess(req,res){
        let order_id=req.body.order_id
        let pay_type=req.body.pay_type
        let is_pay=1
        let is_finish=1
        shopDao.paySuccess().then(function (connection) {
            connection.query("update my_order set order_is_pay=?,pay_type=?,order_is_finish=? where order_id=?",[is_pay,pay_type,is_finish,order_id]).then(function (data) {
                if (data){
                    res.send("1")
                }
            })
            connection.release()
        })
    },
    choseComment(req,res){
        let goodsId=req.body.goodsId
        let commentType=req.body.comment_type
        if (commentType=="全部"){
            shopDao.choseComment().then(function (connection) {
                connection.query("select * from comments t1 left join user t2 on t1.user_id=t2.user_id where t1.goods_id=?",[goodsId]).then(function (data) {
                    if (data){
                        res.send(data)
                    }
                })
                connection.release()
            })
        } else {
            shopDao.choseComment().then(function (connection) {
                connection.query("select * from comments t1 left join user t2 on t1.user_id=t2.user_id where t1.goods_id=? and t1.comments_type=?",[goodsId,commentType]).then(function (data) {
                    if (data){
                        res.send(data)
                    }
                })
                connection.release()
            })
        }

    }
}