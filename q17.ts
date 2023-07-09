let list3=["Ahmad ", "Qamar", "Abdullah"];
console.log("Hi, "+ list3[0]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[1]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[2]+ " I would like to invite you to dinner!");
console.log(list3[1]+ " cant make it! ");
list3.splice(1,1,"Ali");
console.log("Hi, "+ list3[0]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[1]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[2]+ " I would like to invite you to dinner!");
console.log("I just found a bigger table!");
list3.unshift("Awais");
list3.splice(list3.length/2,0,"Sufiyan");
list3.push("Wahab");
console.log("Hi, "+ list3[0]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[1]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[2]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[3]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[4]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list3[5]+ " I would like to invite you to dinner!");
console.log("I am inviting: "+ list3.length+ " People"); //Task 19 to print number of invited people
console.log("Sorry Guys I can only invite two people as the place is reserved already :( ");
list3.forEach((element) => {
    if(list3.length>=3)
    {
        list3=list3.slice(1);
        console.log("Sorry "+ element + " you are out!");
    }
    else{
        console.log("You are invited : "+ [element]);
        list3=list3.slice(1);// To remove the element from array cause it states that we also need to empty the list
    }
});
console.log(list3); //Check if list is empty or not