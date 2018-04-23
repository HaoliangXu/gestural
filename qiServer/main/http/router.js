const app = require("express");
let {getUserInfo,rank} = require("./util");
const router = app.Router();
/**
 * 返回用户信息
 */
router.use("/user",(req,res,next)=>{
    let openId = req.body.openId;
    getUserInfo(openId).then((response)=>{
        res.json(response);
    }).catch((err)=>{
        res.json("出现错误:" + err);
    });
});
/**
 * 排行
 */
router.use("/rank",(req,res,next)=>{
    rank().then((response)=>{
        res.json(response);
    }).catch((err)=>{
        res.json("出现错误:" + err);
    });
});
module.exports = router;