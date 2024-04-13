
//challenge
let chosen= 3;
//let stat,stat2,stat3;
let myfriend=[
{title:"osama",age:39,av:true,skills:["html","css"]},
{title:"o",age:40,av:false,skills:["python","django"]},
{title:"s",age:50,av:true,skills:["php","laravel"]},
];

 if (chosen ==1){
    
 let [{title,age,av, skills: [,b]}]  = myfriend ;
 if ( av== true){
   stat="avalaibel"
 }else{
    stat=" not ava"
 }
 console.log(`${title}--${age}--${stat}--${b}`)
 }
 
 else if (chosen ==2){
    
    let [{},{title:t2,age:a2,av:av2, skills: [,d]},{}]  = myfriend ;
    if ( av2 == true){
       stat2="avalaibe2"
    }else{
      stat2=" not ava2"
    }
    console.log(`${t2}--${a2}--${stat2}--${d}`)
    }

    
    else if(chosen ==3){
    
        let [{},{},{title:t3,age:a3,av:av3, skills: [,l]}]  = myfriend ;
        if ( av3== true){
           stat3="avalaibe3";
        }else{
           stat3=" not ava3";
        }
        console.log(`${t3}--${a3}--${stat3}--${l}`);
        }
        else{
            console.log("not exist")
        }
