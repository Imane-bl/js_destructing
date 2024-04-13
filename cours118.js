/*
destructuring object
*/


const user={
    theName: "Osama",
    theAge: 39,
    theTitle: "dev",
    theCountry:"egypt"
}
/*
console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);

let theName= user.theName;
let theAge= user.theAge;
let theTitle= user.theTitle;
let theCountry= user.theCountry;

console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);


({theName,theAge,theTitle,theCountry} = user)

*/

// hna haka y9ouli errer the vas are already declered 
//roug=h nhi let brk et rajout ()



// hna n9oulou bli declarit   val 
//ytb3hm nrml
/*
const {theName,theAge,theTitle,theCountry} = user;

console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
*/
//kon nhb nhi the title hna nhih mn {} w  mn lconsole 
//mch mhtaja mm pas nkhlih fadi 
const {theName,theAge,theCountry} = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);