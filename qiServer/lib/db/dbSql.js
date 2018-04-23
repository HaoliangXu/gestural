const AV=require("leanengine");
/**
 * @param {表} table 
 * @param {数据} insertValue 
 * @param {id} openid 
 */
function insert(table,insertValue,openid){
    if (!openid) throw new Error("无提供条件");
    let {keys,values} = handleInsert(insertValue);
    let cql = "insert into " + table + " (" + keys + " ) values (" + values + ")";
    query(cql);
}
/**
 * 
 * @param {表} table 
 * @param {键值对象} keyValue 
 * @param {id} openid 
 */
function update(table,keyValue,openid){
    if(!openid) throw new Error("无提供条件");
    let cql = "update " + table + " set " + handleUpdate(keyValue) + "where openid=" + openid;
    query(cql);
}

/**
 * 提供二种查询 条件查询 和 升序查询所有的
 * @param {数据表} table 
 * @param {条件} openid 
 */
function select(table,openid=null){
    let cql = openid ? "select * from " + table + " where openid=" + openid : "select * from " + table + " order uWinNum desc";// 是否提供占位符优化
    query(cql);
}
/**
 * 更新函数的数据处理
 * @param {对象} keyValue 
 */
function handleUpdate(keyValue){
    let KV =[];
    for(let [key,value] of Object.entries(keyValue)){//es5 不支持for([value,key] in object)  for of 需要是可迭代对象
        typeof value == "string" && (value = "'"+ value +"'");
        KV.push(key + "=" + value);
    }
    return KV.join(",");
}
/**
 * 插入数据库语法
 * @param {对象} insertValue 
 */
function handleInsert(insertValue){
    let keys = Object.keys(insertValue),values = [];
    for(let key of keys){
        typeof insertValue[key] == "number" ? values.push(insertValue[key]):values.push("'" + insertValue[key] + "'");
    }
    
    return {keys:keys.join(","),values:values.join(",")};
}
/**
 * @param {查询语句} cql 
 */
function query(cql){
    return AV.Query.doCloudQuery(cql);
}
module.exports={insert,update,select,handleInsert,handleUpdate};