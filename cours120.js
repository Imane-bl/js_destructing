//dustructing functions parametres 

const user={
    theName: "Osama",
    theAge: 39,
    skills:{
        html:70,
        css:30,
    },
}

showDetails(user);
/*
function showDetails(obj){
    console.log(`${obj.theName}-
    ---${obj.a}
    ---${obj.skills.html}`)

}*/

//processus of dustructing

function showDetails({theName,theAge,skills:{html}}=user){
    console.log(`${theName}-
    ---${theAge}
    ---${html}`)

}
// sma n7l {nktb les parm ta3i = le nom te obj }

function showDetails({theName:n,theAge,skills:{html}}=user){
    console.log(`${n}-
    ---${theAge}
    ---${html}`)

}