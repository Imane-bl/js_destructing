//dustructring objets 

const user={
    theName: "Osama",
    theAge: 39,
    theTitle: "dev",
    theCountry:"egypt",
    thecolor:"blackk",

    skills:{
        html:70,
        css:30,
    },
}
const{
     theName:n,
     theAge:a,
     theTitle,
     theCountry,
     thecolor:co ="red",
    skills: {html,css:s},
   // skills: {html:h},
}=user;

console.log(n)
console.log(a)
console.log(theCountry)
console.log(co)
//mais ki nht color : black dakhl lobjet hayjib black

console.log(`my html ${html} and ${s}`);//70
//console.log(`my html ${h}`);//70
//yjibli val 70 te html
//comme ca jaurasi pas besoin decrire skills.html

//dustructuring
const   {html:h, css:cs} = user.skills;
console.log(`${h},${cs}`)