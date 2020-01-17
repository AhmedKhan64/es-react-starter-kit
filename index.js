let array=[];
let a=Math.floor(Math.random()*7);
let b=Math.floor(Math.random()*7);
array.push(a);
array.push(b);
console.log(array);


let userguess = {firstValue:"",SecondValue:""}
function PopulateData (event){

    if (event.target.name==="First Value") 
    {
        userguess.firstValue=event.target.value
      
    }else if (event.target.name==="Last Value") 
    {
        userguess.LastValue=event.target.value
       
        let userarray=Object.keys(userguess).map(i => userguess[i])}
    }

        function check(){
    
    if (userarray.values==array.values) {
 return "winner"       
    } else {
        return "Try Again"
        
    }