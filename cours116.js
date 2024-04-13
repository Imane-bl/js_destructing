
let myfriend= ["Ahmed", " sayed", " ali",["sahdy", "amr",["mouhamed","gmal"]]];
console.log(myfriend[3][2][1])//gmal

let [ , , , [a, ,[, b]]]=myfriend;
//let [,,,[,,[,b]]]=myfriend;

console.log(a)//shady
console.log(b)//gmal