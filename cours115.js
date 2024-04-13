// dustructing

//let c=1//erruer
let a=1
let b=2
let c=3
let d=4

let myfriend= ["Ahmed", " sayed", " ali","maysa"];

[a, b, c, d] = myfriend
//[a, b, c] = myfriend; jibli ahmed /sayed /ali /4
//kon nzid var e haydli undefiend sinon nmdlou 9ima
//[a,b,c,d,e="osma"] 3adi ykhrjha 
console.log(a)//Ahmed
console.log(b)// sayed
console.log(c)//
console.log(d)

/*
let [x,y,z]=myfriend;
console.log(x)
console.log(y)
console.log(z)
*/
//afficher ahmed /sayed /ali
console.log("*********************")

let [x,y,,z]=myfriend;
console.log(x)
console.log(y)
console.log(z)
//afficher ahmed/sayed/maysa  psk drt espace donc hatfout ali 
console.log("*********************")

let [,y1,,z1]=myfriend;

console.log(y1)
console.log(z1)