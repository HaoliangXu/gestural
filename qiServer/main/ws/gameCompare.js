/**
 * { 出招样式
    qi:1,
    bo:2,
    dan:3,
    dang:4,
   }
 * @param {玩家1的选择} choice1 
 * @param {玩家2的选择} choice2 
 */
function gameCompare(choice1,choice2){
        if (choice1 == choice2 || choice2 == 4 || choice1 == 4) return 0;
        if (choice1 - choice2 > 0) return 1;
        if (choice1 - choice2 < 0) return -1;
};
module.exports=gameCompare;