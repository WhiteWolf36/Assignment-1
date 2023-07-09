let favourite_fruits=["Strawberry","Leachee","Peach"];
let check_fruits=["Apple","Banana","Strawberry","Mango","Peach"];
favourite_fruits.forEach((element)=>{
    check_fruits.forEach((compare)=>{
        if(compare==element)
        console.log("You really like "+ element);
    })
    
})