let list1=["Ahmad ", "Qamar", "Abdullah"];
console.log("Hi, "+ list1[0]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list1[1]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list1[2]+ " I would like to invite you to dinner!");
console.log(list1[1]+ " cant make it! ");
list1.splice(1,1,"Ali");
console.log("Hi, "+ list1[0]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list1[1]+ " I would like to invite you to dinner!");
console.log("Hi, "+ list1[2]+ " I would like to invite you to dinner!");