const dbSql = require("../../lib/db/dbSql");
/**
 * @param {openId} id 
 * 得到用户信息
 */

function getUserInfo(id){
     return dbSql.select("player",id);
}
/**
 * 排行
 */
function rank(){
    return dbSql.select("player");

}
module.exports = {getUserInfo,rank};