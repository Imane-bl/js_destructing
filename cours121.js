//dustructing mixeted

const user={
    theName: "Osama",
    theAge: 39,
    skills:["html","css","js"],
    adress: {
        h:"jjj",
        c:"mmm",
    },
}
//b3d mnel dystruc donne mendich
const {theName,theAge,skills: [a, ,c],adress: {h:premier}}= user;
console.log(theName)
console.log(theAge)
console.log(a)
console.log(premier)
//or
console.log(`${theName}, ${theAge},[ ${a},${c}], ${premier}`)

