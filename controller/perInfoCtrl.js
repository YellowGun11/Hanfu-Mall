const perDao = require("../dao/perDao")

module.exports = {
    perInfoHome(req,res){
        let sessionData =req.session.data
        let userAccount =sessionData.user_account
        console.log(userAccount)
        perDao.perInfo().then(function (connection) {
            connection.query("select * from member t1 left join user t2 on t1.user_account=t2.user_account where t1.user_account =?",[userAccount]).then(function (data) {
                // console.log(data[0].member_id)
                console.log(1)
                console.log(data)
                var userInfo = data[0]
                var birth = userInfo.member_birthday
                var bir = new Date(birth)
                var times=bir.getFullYear()+'-'+(bir.getMonth()+1)+'-'+bir.getDate()
                // console.log(times)
                res.render("view/PersInformation",{userInfo,times,sessionData})


            }).catch(function (err) {
                //查询表发生的错误
              console.log(err)
            })
            connection.release()
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    deliAddress(req,res){
        let sessionData = req.session.data
        let user_id = sessionData.user_id
        console.log('地址表打印session'+sessionData.user_account)
        perDao.addressShow().then(function (connection) {
            connection.query("select * from shipping_address t1 left join user t2 on t1.user_id=t2.user_id where t1.user_id= ? order by addr_is_default desc limit 4 ",[user_id]).then(function (data) {
                let addressList = data
                // let pageNum = Math.ceil(data.length/3)
                // console.log(data.length)
                // console.log(pageNum)
                res.render("view/DeliveryAddress",{addressList,sessionData})

            }).catch(function (err) {
                //查询表发生的错误
            })
            connection.release()
        }).catch(function (err) {
            //这个catch是连接数据发生的错误
        })
    },
    perInfoUpdate(req,res){
        let nickname = req.body.nickName
        let sex=req.body.sex
        let birth= req.body.birth
        let email= req.body.email
        let sessionData = req.session.data
        let userAccount = sessionData.user_account
        // console.log(nickname)
        perDao.perInfoUpdate().then(function (connection) {
            connection.query("select * from member where user_account != ? and (member_nickname=? or member_email=?) ",[userAccount,nickname,email]).then(function (data) {
                if (data.length){
                    // console.log(data)
                    res.send("exist")

                } else {
                    connection.query("update member set member_nickname=?,member_sex=?,member_birthday=?,member_email=? where user_account = ? ",[nickname,sex,birth,email,userAccount]).then(function (data) {
                        if (data){
                            res.send("nonexistence")
                        }
                    })
                }
            })
            connection.release()
        })
    },
    addAddress(req,res) {
        let user_id =req.session.data.user_id
        let consignee = req.body.consignee
        let address = req.body.address
        let contactWay = req.body.contactWay
        let defaultAddress = 0
        let arr=[user_id,consignee,contactWay,address,defaultAddress]
        perDao.addAddress().then(function (connection) {
            connection.query("insert into shipping_address(user_id,addr_name,addr_phone,addr_home,addr_is_default) value(?,?,?,?,?)",arr).then(function (data) {
                if (data){
                    let addr_id=data.insertId
                    res.send({status:1,ad_id:addr_id})
                }else {
                    res.send("0")
                }
            })
        })

    },
    updateAddress(req,res){
        let addressId =req.body.address_id
        let consignee = req.body.consignee
        let address = req.body.address
        let contactWay = req.body.contactWay
        let arr=[consignee,contactWay,address,addressId]
        perDao.updateAddress().then(function (connection) {
            connection.query("update shipping_address set addr_name=?,addr_phone=?,addr_home=? where addr_id=?",arr).then(function (data) {
                if (data){
                    res.send("1")
                }else {
                    res.send("0")
                }
            })
            connection.release()
        })
    },
    setDefaultAddress(req,res){
        let userId = req.session.data.user_id
        let addrId=req.body.addr_id
        let all=0
        let one=1
        perDao.setDefaultAddress().then(function (connection) {
            connection.query("update shipping_address set addr_is_default=? where user_id=?",[all,userId]).then(function (data) {
                if (data){
                    connection.query("update shipping_address set addr_is_default=? where addr_id=? and user_id=?",[one,addrId,userId]).then(function (data) {
                        if (data){
                            res.send("1")
                        } else {
                            res.send("0")
                        }
                    })
                    connection.release()
                } else {
                    res.send("0")
                }
            })
            connection.release()
        })
    },
    deleteAddress(req,res){
        let addressId =req.body.address_id
        perDao.deleteAddress().then(function (connection) {
            connection.query("delete from shipping_address where addr_id=?",[addressId]).then(function (data) {
                if (data){
                    res.send("1")
                }else {
                    res.send("0")
                }
            })
            connection.release()
        })
    },
    orderManagement(req,res){
        let sessionData =req.session.data
        let id = sessionData.user_id
      perDao.perInfo().then(function (connection) {
        connection.query("SELECT * FROM my_order  WHERE user_id = ?",[id]).then(function (data) {
          console.log(data)
          res.render("view/OrderManagement",{sessionData,data})
        }).catch(function (err) {
          console.log(err)
        })
      })

    },
    getOrderDetail(req,res){
        let userId = req.session.data.user_id
        let orderId=req.body.orderId
        perDao.perInfo().then(function (connection) {
            connection.query("SELECT * FROM my_order t1 LEFT JOIN order_goods_details t2 ON t1.order_id = t2.order_id LEFT JOIN goods t3 on t2.goods_id=t3.goods_id WHERE t1.user_id = ? and t1.order_id=?",[userId,orderId]).then(function (data) {
                console.log(data)
                if (data){
                    res.send(data)
                } else {
                    res.send("0")
                }

            })
            connection.release()
        })

    },
    delOrder(req,res){
        let userId = req.session.data.user_id
        let orderId=req.body.orderId
        perDao.perInfo().then(function (connection) {
            connection.query("delete t1,t2 from my_order as t1 left join order_goods_details as t2 on t1.order_id = t2.order_id where t1.order_id=?",[orderId]).then(function (data) {
                if (data){
                    res.send("1")
                } else {
                    res.send("0")
                }

            })
            connection.release()
        })
    },
    finishOrder(req,res){
        let userId = req.session.data.user_id
        let orderId=req.body.order_id
        let is_finish=3
        console.log(orderId)
        console.log(is_finish)
        perDao.perInfo().then(function (connection) {
            connection.query("update my_order set order_is_finish=? where order_id=?",[is_finish,orderId]).then(function (data) {
                if (data){
                    res.send("1")
                } else {
                    res.send("0")
                }

            })
            connection.release()
        })
    },
    submitComment(req,res){
        let userId = req.session.data.user_id
        let {detail_id,goods_id,goods_size,comment_type,comment_text}=req.body
        let is_comment=1
        perDao.perInfo().then(function (connection) {
            connection.query("insert into comments(user_id,goods_id,comments_type,comments_content,good_size) value(?,?,?,?,?)",[userId,goods_id,comment_type,comment_text,goods_size]).then(function (data) {
                if (data){
                    connection.query("update order_goods_details set goods_is_comment=? where order_details_id=?",[is_comment,detail_id]).then(function (data) {
                        if (data){
                            connection.query("update goods set goods_comments=goods_comments+1 where goods_id = ? ",[goods_id]).then(function (data) {
                                if (data){
                                    res.send("1")
                                }else {
                                    res.send("0")
                                }
                            })
                        } else {
                            res.send("0")
                        }
                    })
                    connection.release()
                } else {
                    res.send("0")
                }

            })
            connection.release()
        })
    },
    safeSetting(req,res){
      let sessionData =req.session.data
        res.render("view/SafeSet",{sessionData})
    },
    changePhoneNum(req,resp){
      let id = req.session.data.user_id
      let phone =req.body.phone
      let sessionData = req.session.data
      perDao.perInfo().then(function (connection) {
        connection.query("update user set user_phone = ? where user_id = ? ",[phone,id]).then(function (data) {
          resp.send("sessionData")
          connection.query("select * from user").then(function (data) {
            req.session.data = data[0]
            console.log("更换号码后的session"+req.session.data)
          })
        }).catch(function (err) {
          resp.send("")
        })
      })
    },
    //安全设置
    getSessionData(req,resp){
        if (req.session.data) {
            resp.send(req.session.data)
        }else {
        }
    },
  getCollectionPage(req,resp){
      let sessionData = req.session.data
      let id = sessionData.user_id
      let arr = [id]
      perDao.perInfo().then(function (connection) {
        connection.query("select * from collection_goods t1 left join goods t2 on t1.goods_id = t2.goods_id left join goods_picture t3 on t3.goods_picture_id = t2.goods_picture_id where t1.user_id = ?",arr).then(function (data) {
          console.log(data)
          let collectionData = data
          resp.render("view/collection_goods",{collectionData,sessionData})
        }).catch(function (err) {
          console.log(err)
        })
      })
  },
  deleteCollection(req,resp){
      let id = req.body.id
      let goodsId=req.body.goodsId
    perDao.perInfo().then(function (connection) {
      connection.query("delete from collection_goods where collection_goods_id = ? ",[id]).then(function (data) {
        if (data) {
            connection.query("update goods set goods_collection=goods_collection-1 where goods_id = ? ",[goodsId]).then(function (data) {
                resp.send("1")
            })
        }
      }).catch(function (err) {
        console.log(err)
        resp.send("0")
      })
    })
  },
  getGoods(req,resp){
      let order_id = req.body.order_id
    perDao.perInfo().then(function (connection) {
      connection.query("update my_order set order_is_finish = ? where order_id = ?",[1,order_id]).then(function (data) {
        console.log(data)
        resp.send("1")
      }).catch(function (err) {
        console.log(err)
        resp.send("0")
      })
    })
  },
  getPay(req,resp){
    let order_id = req.body.order_id
    perDao.perInfo().then(function (connection) {
      connection.query("update my_order set order_is_pay = ? where order_id = ?",[1,order_id]).then(function (data) {
        console.log(data)
        resp.send("1")
      }).catch(function (err) {
        console.log(err)
        resp.send("0")
      })
    })
  },
}